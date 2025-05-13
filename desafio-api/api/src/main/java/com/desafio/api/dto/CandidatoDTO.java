package com.desafio.api.dto;

import java.util.List;

public record CandidatoDTO(
        Long id,
        String nome,
        Integer tempoExperiencia,
        String apresentacao,
        String habilidades,
        List<String> feedbacks) {
}
