package com.jfcode.api.controller;

import com.jfcode.api.dto.LeadRequestDTO;
import com.jfcode.api.entity.Lead;
import com.jfcode.api.service.LeadService; // Repare que agora importamos o Service
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/leads")
@CrossOrigin(origins = "*")
public class LeadController {

    private final LeadService service; // O Controller agora conversa com o Service!

    public LeadController(LeadService service) {
        this.service = service;
    }

    @PostMapping
    public ResponseEntity<Lead> receberLead(@Valid @RequestBody LeadRequestDTO dados) {

        // O Controller não faz ideia de como o Lead é salvo.
        // Ele só passa a bola pro Service trabalhar!
        Lead leadSalvo = service.salvarLead(dados);

        return ResponseEntity.status(HttpStatus.CREATED).body(leadSalvo);
    }
}