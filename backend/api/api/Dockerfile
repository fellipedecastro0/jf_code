# syntax=docker/dockerfile:1

### Build stage: compila o Spring Boot gerando o JAR
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# IMPORTANTE:
# O Render geralmente usa o build context como a raiz do repositório.
# Por isso, aqui usamos caminhos explícitos para garantir que os arquivos
# existam no contexto enviado ao Docker.
COPY backend/api/api/pom.xml ./
COPY backend/api/api/mvnw ./
COPY backend/api/api/.mvn .mvn

# Garante que o mvnw rode no container
RUN chmod +x mvnw

# Copia o código-fonte e compila
COPY backend/api/api/src ./src
RUN ./mvnw -DskipTests package

### Runtime stage: roda o JAR gerado
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copia o artefato gerado (assumimos exatamente um .jar em target)
COPY --from=build /app/target/*.jar /app/app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]

