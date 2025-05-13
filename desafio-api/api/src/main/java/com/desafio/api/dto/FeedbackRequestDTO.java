package com.desafio.api.dto;

public record FeedbackRequestDTO(String empresaEmail, Long candidatoId, String feedback) {}
