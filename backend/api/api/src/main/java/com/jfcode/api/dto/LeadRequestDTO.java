package com.jfcode.api.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;

public record LeadRequestDTO(

        @NotBlank(message = "O nome não pode estar vazio!")
        String nome,

        @NotBlank(message = "O e-mail é obrigatório!")
        @Email(message = "Por favor, digite um e-mail válido (com @).")
        String email,

        @Size(max = 500, message = "A mensagem pode ter no máximo 500 caracteres.")
        String mensagem

) {
}