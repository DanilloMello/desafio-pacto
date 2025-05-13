package com.desafio.api.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.api.dto.CandidaturaDTO;
import com.desafio.api.dto.CandidaturaRequestDTO;
import com.desafio.api.dto.FeedbackRequestDTO;
import com.desafio.api.service.ICandidaturaService;

import jakarta.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/candidatura")
public class CandidaturaController {

    @Autowired private ICandidaturaService candidaturaService;

    @RolesAllowed("CANDIDATO")
    @GetMapping("/")
    public ResponseEntity<List<CandidaturaDTO>> getAllCandidaturas(@RequestParam String email) {
        return ResponseEntity.ok(candidaturaService.getAllCandidaturas(email));
    }

    @RolesAllowed("CANDIDATO")
    @PostMapping("/")
    public ResponseEntity<String> candidatar(@RequestBody CandidaturaRequestDTO request) {
        return ResponseEntity.ok(candidaturaService.candidatar(request));
    }

    @RolesAllowed("EMPRESA")
    @PostMapping("/feedback")
    public ResponseEntity<String> salvaFeedback(@RequestBody FeedbackRequestDTO request) {
        return ResponseEntity.ok(candidaturaService.salvaFeedback(request));
    }
}
