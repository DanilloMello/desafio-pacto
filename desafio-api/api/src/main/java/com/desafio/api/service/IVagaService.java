package com.desafio.api.service;

import java.util.List;

import org.apache.coyote.BadRequestException;

import com.desafio.api.dto.VagaDTO;

public interface IVagaService {

    List<VagaDTO> getAll(String email);

    String salva(VagaDTO vaga);

    String update(VagaDTO vaga);

    String deleta(Long id) throws BadRequestException;

}
