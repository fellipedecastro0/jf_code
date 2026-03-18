package com.jfcode.api.service;

import com.jfcode.api.dto.LeadRequestDTO;
import com.jfcode.api.entity.Lead;
import com.jfcode.api.repository.LeadRepository;
import org.springframework.stereotype.Service;

@Service // Super importante! Avisa o Spring que este é o "Cozinheiro"
public class LeadService {

    private final LeadRepository repository;

    // Injetamos o repositório aqui
    public LeadService(LeadRepository repository) {
        this.repository = repository;
    }

    // Método que concentra a regra de negócio
    public Lead salvarLead(LeadRequestDTO dados) {

        // 1. Converte o DTO para a Entidade
        Lead novoLead = new Lead();
        novoLead.setNome(dados.nome());
        novoLead.setEmail(dados.email());
        novoLead.setMensagem(dados.mensagem());

        // Se no futuro precisar checar se o e-mail já existe no banco,
        // a regra entraria exatamente aqui!

        // 2. Salva no banco e devolve
        return repository.save(novoLead);
    }
}