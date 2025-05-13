package com.desafio.api.service;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.stereotype.Service;

import com.desafio.api.dto.CandidaturaDTO;
import com.desafio.api.dto.CandidaturaRequestDTO;
import com.desafio.api.dto.FeedbackRequestDTO;
import com.desafio.api.modal.Candidatura;
import com.desafio.api.modal.Usuario;
import com.desafio.api.modal.Vaga;
import com.desafio.api.repository.ICandidaturaJPARepository;
import com.desafio.api.repository.IUsuarioJPARepository;
import com.desafio.api.repository.IVagaJPARepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class CandidaturaService implements ICandidaturaService {

    @Autowired ICandidaturaJPARepository candidaturaRepository;
    @Autowired IUsuarioJPARepository authRepository;
    @Autowired IVagaJPARepository vagaRepository;
    @Autowired IEmailService emailService;

    @Override
    public List<CandidaturaDTO> getAllCandidaturas(String email) {
        return candidaturaRepository.findAllCandidaturaByEmail(email)
            .map(candidaturas -> 
                candidaturas.stream()
                    .map(candidatura -> new CandidaturaDTO(
                        candidatura.getId(),
                        candidatura.getStatus(),
                        candidatura.getVaga().getTitulo(),
                        candidatura.getVaga().getDescricao(),
                        candidatura.getFeedbacks()
                    ))
                    .collect(Collectors.toList())
            ).orElse(Collections.emptyList());
    }

    @Override
    public String candidatar(CandidaturaRequestDTO request) {
        Usuario usuario = authRepository.findUsuarioByEmail(request.usuario())
            .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado"));

        Vaga vaga = vagaRepository.findById(request.vagaId())
            .orElseThrow(() -> new EntityNotFoundException("Vaga não encontrada."));

        try {
            candidaturaRepository.save(new Candidatura(null, 0, vaga, usuario, new ArrayList<>()));
            emailService.notificarCandidatura(usuario.getNome());
        } catch (DataIntegrityViolationException ex){
            throw new DataIntegrityViolationException("Não foi possível candidatar-se: verifique se já existe candidatura para essa vaga.");
        }
        return "Candidatura realizada com sucesso.";
    }

    @Override
    public String salvaFeedback(FeedbackRequestDTO request) {
        Candidatura candidatura = candidaturaRepository.findByCandidatoIdAndEmpresaId(request.empresaEmail(), request.candidatoId())
            .orElseThrow(() -> new EntityNotFoundException("Não há candidatura para esse candidato"));
        candidatura.getFeedbacks().add(request.feedback());
        candidaturaRepository.save(candidatura);
        return "Feedback inserido com sucesso.";
    }

}
