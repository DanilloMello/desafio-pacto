package com.desafio.api.service;

import java.util.Collections;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.desafio.api.dto.VagaDTO;
import com.desafio.api.modal.Usuario;
import com.desafio.api.modal.Vaga;
import com.desafio.api.repository.IUsuarioJPARepository;
import com.desafio.api.repository.IVagaJPARepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class VagaService implements IVagaService {

    @Autowired IVagaJPARepository vagaRepository;
    @Autowired IUsuarioJPARepository authRepository;

    @Override
    public List<VagaDTO> getAll(String email) {
        Usuario user = authRepository.findUsuarioByEmail(email)
            .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado"));

        List<Vaga> vagas;
        if ("CANDIDATO".equalsIgnoreCase(user.getRole())) {
            vagas = vagaRepository.findAll();
        } else {
            vagas = vagaRepository.findAllByEmail(email)
                .orElse(Collections.emptyList());
        }

        return vagas.stream()
            .map(vaga -> new VagaDTO(
                vaga.getId(),
                vaga.getTitulo(),
                vaga.getDescricao(),
                vaga.getRequisitos(),
                null
            ))
            .collect(Collectors.toList());
    }

    @Override
    public String salva(VagaDTO vaga) {
        Usuario usuario = authRepository.findUsuarioByEmail(vaga.usuario())
            .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado"));

        vagaRepository.save(new Vaga(null, vaga.titulo(), vaga.descricao(), vaga.requisitos(), usuario));
        return "Vaga salva com sucesso.";
    }

    @Override
    public String update(VagaDTO vagaDTO) {
        Vaga vaga = vagaRepository.findById(vagaDTO.id())
            .orElseThrow(() -> new EntityNotFoundException("Vaga não encontrada."));

        vaga.setTitulo(vagaDTO.titulo());
        vaga.setDescricao(vagaDTO.descricao());
        vaga.setRequisitos(vagaDTO.requisitos());
        vagaRepository.save(vaga);

        return "Vaga atualizada com sucesso.";
    }

    @Override
    public String deleta(Long id) {
        try {
            vagaRepository.deleteById(id);
            return "Vaga excluída com sucesso.";
        } catch (RuntimeException ex) {
            throw new RuntimeException("Não é possível deletar vaga de cadidatura existente.");
        }
    }
}
