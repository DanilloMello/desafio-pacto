package com.desafio.api.dto;

public record LoginDTO(String email, String password) {
    public LoginDTO {
        if (email == null || email.isBlank()) {
            throw new IllegalArgumentException("Email não pode ser nulo ou vazio");
        }
        if (password == null || password.isBlank()) {
            throw new IllegalArgumentException("Senha não pode ser nula ou vazia");
        }
    }
}
