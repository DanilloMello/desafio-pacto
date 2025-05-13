package com.desafio.api.service;

import java.util.List;
import java.util.Map;

import com.desafio.api.dto.CandidatoDTO;
import com.desafio.api.dto.LoginDTO;
import com.desafio.api.dto.SignupDTO;

public interface IUsuarioService {
    Map<String, String> login(LoginDTO login);

    Map<String, String> signup(SignupDTO signup);

    List<CandidatoDTO> getAllCandidatos(String email);
}
