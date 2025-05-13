package com.desafio.api.modal;

import java.util.ArrayList;
import java.util.List;

import jakarta.persistence.CollectionTable;
import jakarta.persistence.Column;
import jakarta.persistence.ElementCollection;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(
    name = "candidatura",
    uniqueConstraints = {
        @jakarta.persistence.UniqueConstraint(columnNames = {"candidato_id", "vaga_id"})
    }
)
@Data
@AllArgsConstructor
@NoArgsConstructor
public class Candidatura {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Integer status;

    @ManyToOne
    @JoinColumn(name = "vaga_id", nullable = false)
    private Vaga vaga;

    @ManyToOne
    @JoinColumn(name = "candidato_id", nullable = false)
    private Usuario candidato;

   @ElementCollection
    @CollectionTable(
        name = "candidatura_feedbacks",
        joinColumns = @JoinColumn(name = "candidatura_id")
    )
    @Column(name = "feedback")
    private List<String> feedbacks = new ArrayList<>();
}

