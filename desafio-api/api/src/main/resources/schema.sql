-- Create table
CREATE TABLE IF NOT EXISTS usuario (
    id SERIAL PRIMARY KEY,
    nome TEXT,
    email TEXT UNIQUE NOT NULL,
    habilidades TEXT NULL,
    apresentacao TEXT NULL,
    tempo_experiencia INTEGER NULL,
    senha TEXT NOT NULL,
    role TEXT NOT NULL
);

CREATE TABLE IF NOT EXISTS vaga (
    id SERIAL PRIMARY KEY,
    titulo VARCHAR(255) NOT NULL,
    descricao TEXT NOT NULL,
    requisitos TEXT NOT NULL,
    empresa_id BIGINT,
    CONSTRAINT fk_empresa FOREIGN KEY (empresa_id) REFERENCES usuario(id)
);

CREATE TABLE IF NOT EXISTS candidatura (
    id BIGSERIAL PRIMARY KEY,
    status INTEGER NOT NULL,
    vaga_id BIGINT NOT NULL,
    candidato_id BIGINT NOT NULL,
    CONSTRAINT fk_candidatura_vaga FOREIGN KEY (vaga_id) REFERENCES vaga(id),
    CONSTRAINT fk_candidatura_usuario FOREIGN KEY (candidato_id) REFERENCES usuario(id),
    CONSTRAINT uq_usuario_vaga UNIQUE (candidato_id, vaga_id)
);

CREATE TABLE IF NOT EXISTS candidatura_feedbacks (
    candidatura_id BIGINT NOT NULL,
    feedback VARCHAR(2000),
    FOREIGN KEY (candidatura_id) REFERENCES candidatura(id)
);