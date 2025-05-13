FROM maven:3.9.6-eclipse-temurin-21 AS builder

WORKDIR /api

COPY pom.xml .
COPY src ./src



RUN mvn clean package -DskipTests

FROM eclipse-temurin:21-jdk-alpine

WORKDIR /api

COPY --from=builder /api/target/*.jar api.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "api.jar"]