
# Da modificare... devo copiare tutto ma non so dove sta....
FROM maven:3.6.0-jdk-11-slim AS build
# Qui V
COPY src /home/app/src
# Qui V
COPY pom.xml /home/app

# mvn non è definito... come si fa ?
RUN mvn clean package

COPY . .
EXPOSE 8080
ENTRYPOINT ["./mvnw","spring-boot:run"]




