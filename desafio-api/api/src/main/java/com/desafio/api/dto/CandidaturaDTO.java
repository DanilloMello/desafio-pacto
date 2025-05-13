package com.desafio.api.dto;

import java.util.List;

public record CandidaturaDTO(
        Long id,
        Integer status,
        String titulo,
        String descricao,
        List<String> feedback
        ) {}
