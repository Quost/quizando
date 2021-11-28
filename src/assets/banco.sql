CREATE TABLE IF NOT EXISTS quiz(id INTEGER PRIMARY KEY AUTOINCREMENT, title);

INSERT
    or IGNORE INTO quiz (title)
VALUES
    ('Conhecimentos gerais da Bíblia');

CREATE TABLE IF NOT EXISTS question (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    explanation TEXT,
    quizId INTEGER
);

INSERT
    or IGNORE INTO question (title, explanation, quizId)
VALUES
    (
        'Qual o nome do primeiro casal criado por Deus?',
        'Adão e Eva foram os primeiros seres humanos criados por Deus. A história da criação desse 1º casal aparece no livro de Gênesis, capítulo 1 e 2.',
        1
    );

INSERT
    or IGNORE INTO question (title, explanation, quizId)
VALUES
    (
        'Qual foi o sinal que Deus deu a Noé, como promessa de não mais destruir a terra com água?',
        'Deus mostrou um arco-íris no céu, como sinal da sua aliança com todos seres vivos. Ver Gênesis 9:11-17.',
        1
    );

INSERT
    or IGNORE INTO question (title, explanation, quizId)
VALUES
    (
        'Qual o nome do rapazinho que venceu o gigante Golias?',
        'Davi venceu o gigante Golias com apenas uma pedra e uma atiradeira (estilingue) - Ver 1 Samuel 17:38-58.',
        1
    );

INSERT
    or IGNORE INTO question (title, explanation, quizId)
VALUES
    (
        'Qual o nome do primeiro casal criado por Deus?',
        'Adão e Eva foram os primeiros seres humanos criados por Deus. A história da criação desse 1º casal aparece no livro de Gênesis, capítulo 1 e 2.',
        1
    );

INSERT
    or IGNORE INTO question (title, explanation, quizId)
VALUES
    (
        'Quais alimentos foram multiplicados por Jesus num dos seus milagres?',
        'Pães e peixes foram multiplicados por Jesus. Neste milagre da multiplicação, 5 pães e 2 peixes abençoados alimentaram mais de 5 mil pessoas (Ver: Lucas 9:16-17).',
        1
    );

CREATE TABLE IF NOT EXISTS answer(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    isCorrect BIT, -->>  0=false & 1=true
    questionId NUMBER
);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('João e Maria', 0 ,1);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Abrão e Sara', 0 ,1);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Adão e Eva', 1 ,1);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Moisés e Isabel', 0 ,1);