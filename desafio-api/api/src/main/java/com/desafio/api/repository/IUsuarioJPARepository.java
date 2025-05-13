package com.desafio.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.desafio.api.modal.Usuario;

import jakarta.transaction.Transactional;

public interface IUsuarioJPARepository extends JpaRepository<Usuario, Long> {

    Optional<Usuario> findUsuarioByEmail(String email);
    
    @Modifying
    @Transactional
    @Query("UPDATE Usuario u SET u.senha = :senha WHERE u.id in (:ids)")
    void adicionaSenhaAosUsuariosFixos(@Param("senha") String senha, @Param("ids") List<Integer> ids);

    @Modifying
    @Transactional
    @Query("SELECT c.candidato FROM Candidatura c WHERE c.vaga.empresa.email = :email ")
    Optional<List<Usuario>> findAllCandidatosByVagaFromEmpresa(String email);
        
}
