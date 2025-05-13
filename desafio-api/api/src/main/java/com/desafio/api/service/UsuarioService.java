package com.desafio.api.service;

import java.util.Collections;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import com.desafio.api.auth.JwtService;
import com.desafio.api.dto.CandidatoDTO;
import com.desafio.api.dto.LoginDTO;
import com.desafio.api.dto.SignupDTO;
import com.desafio.api.exception.UnauthorizedException;
import com.desafio.api.modal.Candidatura;
import com.desafio.api.modal.Usuario;
import com.desafio.api.repository.ICandidaturaJPARepository;
import com.desafio.api.repository.IUsuarioJPARepository;

import jakarta.persistence.EntityNotFoundException;

@Service
public class UsuarioService implements IUsuarioService {

    @Autowired private JwtService jwtService;
    @Autowired private IUsuarioJPARepository usuarioRepository;
    @Autowired private ICandidaturaJPARepository candidaturaRepository;
    @Autowired private BCryptPasswordEncoder passwordEncoder;

    @Override
    public Map<String, String> login(LoginDTO login) {

        usuarioRepository.adicionaSenhaAosUsuariosFixos(passwordEncoder.encode("empresa123"), List.of(1,2,3));
        usuarioRepository.adicionaSenhaAosUsuariosFixos(passwordEncoder.encode("usuario123"), List.of(4,5,6));

        Usuario usuario = usuarioRepository.findUsuarioByEmail(login.email())
                .orElseThrow(() -> new EntityNotFoundException("Usuário não encontrado!"));

        if (!passwordEncoder.matches(login.password(), usuario.getSenha())) {
            throw new UnauthorizedException("Credenciais inválidas");
        }

        String token = jwtService.generateToken(login.email(), usuario.getRole());

        return Map.of(
                "token", token,
                "user", usuario.getEmail(),
                "role", usuario.getRole());
    }

    @Override
    public Map<String, String> signup(SignupDTO signup) {
        String senhaCriptografada = passwordEncoder.encode(signup.senha());
        usuarioRepository.save(new Usuario(
            null,
            signup.nome(),
            signup.email(),
            signup.habilidades(),
            signup.apresentacao(),
            signup.tempoExperiencia(),            
            senhaCriptografada,
            signup.userType().toUpperCase()
        ));
        return login(new LoginDTO(signup.email(), signup.senha()));
    }

    @Override
    public List<CandidatoDTO> getAllCandidatos(String email) {     
        return usuarioRepository.findAllCandidatosByVagaFromEmpresa(email)
        .map(candidatos -> 
            candidatos.stream()
                .map(candidato -> {
                    Candidatura candidatura = candidaturaRepository.findByCandidato(candidato.getId());
                    return new CandidatoDTO(
                        candidato.getId(),
                        candidato.getNome(),
                        candidato.getTempoExperiencia(),
                        candidato.getApresentacao(),
                        candidato.getHabilidades(),
                        candidatura.getFeedbacks()
                    );
                })
                .collect(Collectors.toList())
        ).orElse(Collections.emptyList());
    }

}
