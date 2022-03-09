
""" Questo Database verrà utilizzato per contenere i dati degli utenti registrati e associare ad ogni utente il sensore Acquistato """

CREATE DATABASE IF NOT EXISTS `synapse`;
USE `synapse`;

--- Tabella Dedita al contenimento dei dati degli utenti per il Login --- 
CREATE TABLE "users" (
    "email" VARCHAR(30) NOT NULL,
    "username" VARCHAR(30) NOT NULL,
    "password" VARCHAR(255) NOT NULL,
    primary key ("email", "username")
);

-- Tabella dedita all'associare ad ogni utente il sensore Acquistato --- 
CREATE TABLE "user_sensors" (
    "username" VARCHAR(30) NOT NULL,
    "sensor_id" VARCHAR(30) NOT NULL,
    "location" VARCHAR(30) NOT NULL,
    "alarm_height" INT NOT NULL,
    foreign key ("username") references "users" ("username")
);

-- In questa Tabella Verranno Salvati tutti dati Acquisti dai Sensori (Per fare Analisi ecc) -- 
CREATE TABLE "sensors_data" (
    "sensor_id" VARCHAR(30) NOT NULL,
    "data" VARCHAR(255) NOT NULL,
    "timestamp" VARCHAR(30) NOT NULL,
    foreign key ("sensor_id") references "user_sensors" ("sensor_id")
)
