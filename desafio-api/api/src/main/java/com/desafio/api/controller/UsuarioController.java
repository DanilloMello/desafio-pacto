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

import com.desafio.api.dto.CandidatoDTO;
import com.desafio.api.dto.LoginDTO;
import com.desafio.api.dto.SignupDTO;
import com.desafio.api.service.IUsuarioService;

import jakarta.annotation.security.PermitAll;
import jakarta.annotation.security.RolesAllowed;


@RestController
@RequestMapping("/usuario")
public class UsuarioController {

    @Autowired private IUsuarioService usuarioService;

    @PermitAll
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody LoginDTO login) {
        return ResponseEntity.ok(this.usuarioService.login(login));
    }

    @PermitAll
    @PostMapping("/signup")
    public ResponseEntity<?> signup(@RequestBody SignupDTO signUpDTO) {
        return ResponseEntity.ok(this.usuarioService.signup(signUpDTO));
    }

    @RolesAllowed("EMPRESA")
    @GetMapping("/candidatos")
    public ResponseEntity<List<CandidatoDTO>> getAllCandidatos(@RequestParam String email) {
        return ResponseEntity.ok(usuarioService.getAllCandidatos(email));
    }

}
