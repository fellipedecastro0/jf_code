# syntax=docker/dockerfile:1

### Build stage: compila o Spring Boot gerando o JAR
FROM maven:3.9.6-eclipse-temurin-21 AS build
WORKDIR /app

# Copia primeiro os arquivos de build (melhora cache)
COPY pom.xml ./
COPY mvnw ./
COPY .mvn .mvn

# Garante que o mvnw rode no container
RUN chmod +x mvnw

# Copia o código-fonte e compila
COPY src ./src
RUN ./mvnw -DskipTests package

### Runtime stage: roda o JAR gerado
FROM eclipse-temurin:21-jre
WORKDIR /app

# Copia o artefato gerado (assumimos exatamente um .jar em target)
COPY --from=build /app/target/*.jar /app/app.jar

EXPOSE 8080
ENTRYPOINT ["java","-jar","/app/app.jar"]

