package com.desafio.api.service;

import java.util.List;

import com.desafio.api.dto.CandidaturaDTO;
import com.desafio.api.dto.CandidaturaRequestDTO;
import com.desafio.api.dto.FeedbackRequestDTO;

public interface ICandidaturaService {

    List<CandidaturaDTO> getAllCandidaturas(String email);

    String candidatar(CandidaturaRequestDTO request);

    String salvaFeedback(FeedbackRequestDTO request);
}
