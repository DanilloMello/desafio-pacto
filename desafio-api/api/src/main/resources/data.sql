INSERT INTO usuario (id, nome, email, habilidades, apresentacao, tempo_experiencia, senha, role) VALUES
  (1, 'Empresa A', 'empresaa@gmail.com', NULL, NULL, NULL, '', 'EMPRESA'),
  (2, 'Empresa B', 'empresab@gmail.com', NULL, NULL, NULL, '', 'EMPRESA'),
  (3, 'Empresa C', 'empresac@gmail.com', NULL, NULL, NULL, '', 'EMPRESA'),
  (4, 'Fulano',   'fulano@gmail.com',   'Java, Angular',      'Desenvolvedor backend com experiência em microsserviços.', 2, '', 'CANDIDATO'),
  (5, 'Sicrano',  'sicrano@gmail.com',  'React, Javascript',  'Front-end developer focado em UX.', 3, '', 'CANDIDATO'),
  (6, 'Beltrano', 'beltrano@gmail.com', 'Go, Ruby',           'Engenheiro de software com background em sistemas distribuídos.', 5, '', 'CANDIDATO');

INSERT INTO vaga (id, titulo, descricao, requisitos, empresa_id) VALUES
 (1, 'Desenvolvedor Java Junior', 'Descricao para desenvolvedor java junior', 'Java, Angular, SpringBoot', 1),
 (2, 'Desenvolvedor Java Pleno', 'Descricao para desenvolvedor java Pleno', 'Javascript, Nodejs, Rxjs', 1),
 (3, 'Desenvolvedor Java Junior', 'Descricao para desenvolvedor java junior', 'Java, Angular, SpringBoot', 2),
 (4, 'Desenvolvedor Java Pleno', 'Descricao para desenvolvedor java Pleno', 'Javascript, Nodejs, Rxjs', 2),
 (5, 'Desenvolvedor Java Junior', 'Descricao para desenvolvedor java junior', 'Java, Angular, SpringBoot', 3),
 (6, 'Desenvolvedor Java Pleno', 'Descricao para desenvolvedor java Pleno', 'Javascript, Nodejs, Rxjs', 3);

 INSERT INTO candidatura (id, status, vaga_id, candidato_id) VALUES
 (1, 1, 1, 4),
 (2, 2, 4, 5),
 (3, 3, 6, 6);

INSERT INTO candidatura_feedbacks (candidatura_id, feedback) VALUES
 (1, 'Ótima comunicação'),
 (2, 'Conhecimento sólido em Spring Boot'),
 (3, 'Precisa melhorar testes automatizados');

SELECT setval(pg_get_serial_sequence('usuario', 'id'), (SELECT COALESCE(MAX(id), 1) FROM usuario));
SELECT setval(pg_get_serial_sequence('vaga', 'id'), (SELECT COALESCE(MAX(id), 1) FROM vaga));
SELECT setval(pg_get_serial_sequence('candidatura', 'id'), (SELECT COALESCE(MAX(id), 1) FROM candidatura));