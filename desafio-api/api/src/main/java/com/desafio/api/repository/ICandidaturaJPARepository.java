package com.desafio.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.desafio.api.modal.Candidatura;

import jakarta.transaction.Transactional;

public interface ICandidaturaJPARepository extends JpaRepository<Candidatura, Long> {

    @Transactional
    @Query("SELECT c FROM Candidatura c WHERE c.candidato.email = :email ORDER BY c.id")
    Optional<List<Candidatura>> findAllCandidaturaByEmail(@Param("email") String email);

    @Transactional
    @Query("SELECT c FROM Candidatura c JOIN c.vaga v JOIN v.empresa e WHERE c.candidato.id = :candidatoId AND e.email = :empresaEmail")
    Optional<Candidatura> findByCandidatoIdAndEmpresaId(@Param("empresaEmail") String empresaEmail, @Param("candidatoId") Long candidatoId);

    @Transactional
    @Query("SELECT c FROM Candidatura c WHERE c.candidato.id = :candidatoId")
    Candidatura findByCandidato(@Param("candidatoId") Long candidatoId);
        
}
