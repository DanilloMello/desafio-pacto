package com.desafio.api.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Component;

@Component
public class EmailService implements IEmailService{

    @Autowired
    private JavaMailSender mailSender;

    @Value("${spring.mail.username}")
    private String endEmail;

    @Override
    public void notificarCandidatura(String nome) {
        SimpleMailMessage email = new SimpleMailMessage();
        email.setTo(endEmail);
        email.setSubject("Candidato Desafio Pacto");
        email.setText("Parabéns " +  nome.toUpperCase() + " pela sua candidatura!");
        email.setFrom(endEmail); 

        mailSender.send(email);

        email.setTo(endEmail);
        email.setSubject("Empresa Desafio Pacto");
        email.setText("Parabéns mais um novo candidato para sua vaga cadastrada");
        email.setFrom(endEmail); 

        mailSender.send(email);
    }
    
}
