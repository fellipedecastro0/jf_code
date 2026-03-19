# Relatorio de Ferramentas - JFCode

## 1. Resumo do Projeto

O projeto **JFCode** consiste em uma landing page com secoes para apresentar servicos, casos/portfolios e a equipe. A pagina tambem possui um **formulario de contato/orcamento** que envia os dados para um back-end via `fetch`, permitindo registrar *leads* (nome, email e mensagem).

## 2. Ferramentas Utilizadas

### 2.1 Editor de Codigo

- **Back-end:** `IntelliJ` (Java/Spring).
- **Front-end:** `VS Code / Cursor` (React/TypeScript/Vite).

### 2.2 Navegador para Testes

- **Chrome** (utilizado para testar responsividade no modo mobile e gerar as capturas de evidencias via DevTools).

Evidencia dos passos: [PRINTS-RELATORIO.md](PRINTS-RELATORIO.md).

### 2.3 Front-end (Framework e Bibliotecas)

- **Vite** (build/servidor de desenvolvimento) e **React** com **TypeScript**.
- **Tailwind CSS** para estilo e design responsivo.
- **lucide-react** para icones.

Evidencias no codigo:

- `package.json` (scripts e dependencias): [`package.json`](package.json)
- `vite.config.ts` (config do Vite/Tailwind): [`vite.config.ts`](vite.config.ts)

### 2.4 Back-end (Framework e Persistencia)

- **Spring Boot** (WebMVC), com:
  - **JPA** para persistencia em banco relacional.
  - **Validation** para validar dados recebidos.
- **PostgreSQL** (banco de dados).
- **Maven** para gerenciamento/compilacao do back-end.

Evidencias no codigo:

- `pom.xml` (dependencias e configuracoes do projeto): [`pom.xml`](backend/api/api/pom.xml)
- `application.properties` (banco e porta): [`application.properties`](backend/api/api/src/main/resources/application.properties)

## 3. Justificativa das Escolhas e Boas Praticas (com Evidencias)

### 3.1 Front-end: Componentizacao e Manutenibilidade

- A pagina foi organizada em componentes reutilizaveis (ex.: `Navbar`, `HeroSection`, `ServicesSection`, `CasesSection`, `TeamSection`, `Footer`). Isso melhora a leitura do codigo e facilita evolucoes/ajustes no layout.

Evidencia: [`src\App.tsx`](src/App.tsx).

### 3.2 Front-end: Formularios com feedback ao usuario

- O formulario de contato na secao de rodape controla estado de:
  - erro de validacao (por exemplo, `emailError`),
  - submissao (`isSubmitting`),
  - confirmacao de envio (`submitted`),
  - mensagem de erro geral (`error`).

Evidencia: [`src/components/Footer.tsx`](src/components/Footer.tsx).

### 3.3 Front-end: Acessibilidade (indicadores de validacao)

- O input de e-mail utiliza atributos como `aria-invalid` e `aria-describedby` para reforcar acessibilidade quando ha erro de validacao.

Evidencia: [`src/components/Footer.tsx`](src/components/Footer.tsx).

### 3.4 Back-end: Separacao de responsabilidades (Controller/Service/Repository)

- O back-end separa camadas:
  - `LeadController` recebe a requisicao,
  - `LeadService` aplica a regra de salvamento,
  - `LeadRepository` faz a persistencia via JPA.

Essa separacao melhora testabilidade, manutencao e escalabilidade da logica.

Evidencias:
- [`backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java`](backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java)
- [`backend/api/api/src/main/java/com/jfcode/api/service/LeadService.java`](backend/api/api/src/main/java/com/jfcode/api/service/LeadService.java)
- [`backend/api/api/src/main/java/com/jfcode/api/repository/LeadRepository.java`](backend/api/api/src/main/java/com/jfcode/api/repository/LeadRepository.java)

### 3.5 Back-end: Validacao robusta de entrada (DTO + @Valid)

- O back-end utiliza um DTO com anotacoes de validacao:
  - `@NotBlank` para nome,
  - `@Email` para email,
  - `@Size` para limite de tamanho da mensagem.
- No controller, o parametro e validado com `@Valid` antes do salvamento.

Evidencia:
- [`backend/api/api/src/main/java/com/jfcode/api/dto/LeadRequestDTO.java`](backend/api/api/src/main/java/com/jfcode/api/dto/LeadRequestDTO.java)
- [`backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java`](backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java)

### 3.6 Back-end: Persistencia consistente (JPA Entity + timestamp)

- A entidade `Lead` define campos com restricoes de coluna e registra automaticamente a data de criacao via `@PrePersist`.

Evidencia: [`backend/api/api/src/main/java/com/jfcode/api/entity/Lead.java`](backend/api/api/src/main/java/com/jfcode/api/entity/Lead.java)

### 3.7 CORS (compatibilidade entre origens do front e back)

- Para permitir que o front-end (servido pelo Vite) consiga enviar requisicoes ao back-end (porta `8080`), o controller esta configurado com:
  - `@CrossOrigin(origins = "*")`.

Evidencia: [`backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java`](backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java)

### 3.8 Comparacao rapida (vantagens e limitacoes)

- **Vite**: vantagem em desenvolvimento (HMR e build rapido); limitacao: em projetos mais complexos pode exigir ajustes de configuracao para casos especificos.
- **React + TypeScript**: vantagem na organizacao por componentes e no ganho de seguranca de tipos; limitacao: curva de aprendizado maior e mais codigo comparado a abordagens sem tipos.
- **Tailwind CSS**: vantagem para responsividade e consistencia visual com rapidez; limitacao: markup pode ficar mais "denso" com muitas classes.
- **Spring Boot**: vantagem por padronizar estrutura e acelerar integracoes via Spring; limitacao: maior complexidade inicial (configuracoes, dependencia do ecossistema Java).
- **JPA + PostgreSQL**: vantagem para persistencia relacional e integracao com validacoes; limitacao: exige configuracao e manutencao do banco (scripts, ambiente e massa de dados para testes).
- **CORS via `@CrossOrigin`**: vantagem para resolver bloqueios de origem cruzada no ambiente de desenvolvimento; limitacao: em producao idealmente deve ser mais restrito do que `origins = "*"`.

## 4. Integrantes do Grupo

Conforme exibido na secao de equipe do site:

- Fellipe de Castro
- Jhonathan Magalhaes

Evidencia: [`src/components/TeamSection.tsx`](src/components/TeamSection.tsx)

## 5. Problemas Encontrados e Solucoes Aplicadas

### 5.1 CORS / Comunicacao Front-end com Back-end

Problema (relato baseado no codigo/arquitetura aplicada): requisicoes do front-end para a API podiam ser bloqueadas por politica de origem cruzada.

Solucao aplicada: configuracao explicita de CORS no controller com `@CrossOrigin(origins = "*")`, permitindo o `POST` em `"/api/leads"`.

Evidencia: [`LeadController.java`](backend/api/api/src/main/java/com/jfcode/api/controller/LeadController.java).

### 5.2 Validacao do Formulario (entrada invalida)

Problema (relato baseado no codigo/arquitetura aplicada): usuarios poderiam enviar dados incompletos ou com formato invalido (principalmente e-mail).

Solucao aplicada:
- no front-end, tratamento de erro com `emailError` e feedback ao usuario,
- no back-end, validacao centralizada via `LeadRequestDTO` com `@NotBlank`, `@Email` e `@Size`, garantindo integridade antes de persistir.

Evidencias:
- [`src/components/Footer.tsx`](src/components/Footer.tsx)
- [`LeadRequestDTO.java`](backend/api/api/src/main/java/com/jfcode/api/dto/LeadRequestDTO.java)

### 5.3 Build/Compilacao (config e tipagem)

Problema (relato baseado no codigo/arquitetura aplicada): garantir que o projeto compila com TypeScript e que a build do Vite produz artefatos corretos.

Solucao aplicada:
- script de build do front com `tsc -b && vite build`,
- estrutura tipada em TypeScript para componentes e contratos.

Evidencia:
- [`package.json`](package.json)

## 6. Publicacao / Entrega

O site foi publicado via **Netlify** (conforme combinado pelo grupo). O link do deploy pode ser acessado no repositorio do grupo no GitHub.

## 7. Como Rodar (Referencia)

Instrucao de rodar local esta descrita no arquivo `README.md`.

Evidencia: [`README.md`](README.md)

