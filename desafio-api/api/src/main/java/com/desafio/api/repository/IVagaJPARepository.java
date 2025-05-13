package com.desafio.api.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.desafio.api.modal.Vaga;

import jakarta.transaction.Transactional;

public interface IVagaJPARepository extends JpaRepository<Vaga, Long> {

    @Transactional
    @Query("SELECT v FROM Vaga v JOIN v.empresa e WHERE e.email = :email ORDER BY v.id")
    Optional<List<Vaga>> findAllByEmail(@Param("email") String email);
        
}
