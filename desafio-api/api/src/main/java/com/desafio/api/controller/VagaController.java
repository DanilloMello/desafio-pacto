package com.desafio.api.controller;

import org.apache.coyote.BadRequestException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.desafio.api.dto.VagaDTO;
import com.desafio.api.service.IVagaService;

import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;

@RestController
@RequestMapping("/vaga")
public class VagaController {

    @Autowired private IVagaService vagaService;

    @PermitAll
    @GetMapping("/")
    public ResponseEntity<?> getAll(@RequestParam String email) {
        return ResponseEntity.ok(vagaService.getAll(email));
    }

    @RolesAllowed("EMPRESA")
    @PostMapping("/")
    public ResponseEntity<String> salva(@RequestBody VagaDTO vaga) {
        return ResponseEntity.ok(vagaService.salva(vaga));
    }

    @RolesAllowed("EMPRESA")
    @PutMapping("/")
    public ResponseEntity<String> atualiza(@RequestBody VagaDTO vaga) {
        return ResponseEntity.ok(vagaService.update(vaga));
    }

    @RolesAllowed("EMPRESA")
    @DeleteMapping("/")
    public ResponseEntity<String> deleta(@RequestParam Long id) throws BadRequestException {
        return ResponseEntity.ok(vagaService.deleta(id));
    }

}
