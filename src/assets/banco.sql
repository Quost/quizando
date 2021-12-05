drop table if exists quiz;
drop table if exists question;
drop table if exists answer;

CREATE TABLE IF NOT EXISTS quiz(id INTEGER PRIMARY KEY AUTOINCREMENT, title);

INSERT
    or IGNORE INTO quiz (id, title)
VALUES
    (1, 'Conhecimentos gerais da Bíblia');

CREATE TABLE IF NOT EXISTS question (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    explanation TEXT,
    quizId INTEGER
);

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        1,
        'Qual o nome do primeiro casal criado por Deus?',
        'Adão e Eva foram os primeiros seres humanos criados por Deus. A história da criação desse 1º casal aparece no livro de Gênesis, capítulo 1 e 2.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        2,
        'Qual foi o sinal que Deus deu a Noé, como promessa de não mais destruir a terra com água?',
        'Deus mostrou um arco-íris no céu, como sinal da sua aliança com todos seres vivos. Ver Gênesis 9:11-17.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        3,
        'Qual o nome do rapazinho que venceu o gigante Golias?',
        'Davi venceu o gigante Golias com apenas uma pedra e uma atiradeira (estilingue) - Ver 1 Samuel 17:38-58.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        4,
        'O que Deus disse para Noé construir?',
        'Deus ordenou a Noé que construísse um brande barco para sobreviver ao Dilúvio (Ver Gênesis 6:14-16).',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        5,
        'Quais alimentos foram multiplicados por Jesus num dos seus milagres?',
        'Pães e peixes foram multiplicados por Jesus. Neste milagre da multiplicação, 5 pães e 2 peixes abençoados alimentaram mais de 5 mil pessoas (Ver: Lucas 9:16-17).',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        6,
        'Quantos eram os discípulos de Jesus?',
        'Jesus escolheu 12 discípulos mais próximos. Ver: Lucas 6:13-16.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        7,
        'Qual é o primeiro livro da Bíblia?',
        'O 1º livro da Bíblia é Gênesis, que significa "início" em hebraico.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        8,
        'Em qual livro bíblico está escrito o versículo: "O Senhor é o meu pastor, nada me faltará"?',
        'Este é o conhecido Salmo 23, versículo 1.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        9,
        'Qual é o último livro da Bíblia?',
        'O livro de Apocalipse é o último livro da Bíblia. Apocalipse significa "revelação" em grego.',
        1
    );

INSERT
    or IGNORE INTO question (id, title, explanation, quizId)
VALUES
    (
        10,
        'Que profeta foi engolido por um grande peixe?',
        'Jonas foi o profeta engolido por um peixe. Esteve 3 dias dentro do animal, até ser cuspido na praia. Ver Jonas 1:17.',
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

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Um arco-íris', 1 ,2);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Uma cruz', 0 ,2);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Um castiçal com sete luzes', 0 ,2);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Um anel de ouro', 0 ,2);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Samuel', 0 ,3);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Daniel', 0 ,3);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Davi', 1 ,3);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Levi', 0 ,3);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Um altar em honra a Deus', 0 ,4);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Uma torre muito alta, chamada Torre de Babel', 0 ,4);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Um Templo onde todos pudessem adorar a Deus', 0 ,4);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Uma arca (grande embarcação) onde seriam salvos do dilúvio', 1 ,4);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Pães e vinho', 0 ,5);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Bolos e pasta de figos', 0 ,5);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Azeite e mel silvestre', 0 ,5);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Pães e peixes', 1 ,5);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('12', 1 ,6);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('7', 0 ,6);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('14', 0 ,6);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('40', 0 ,6);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Isaías', 0 ,7);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Mateus', 0 ,7);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Salmos', 0 ,7);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Gênesis', 1 ,7);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Provérbios', 0 ,8);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Mateus', 0 ,8);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Salmos', 1 ,8);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Eclesiastes', 0 ,8);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Malaquias', 0 ,9);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Apocalipse', 1 ,9);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Provérbios', 0 ,9);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Gênesis', 0 ,9);

--

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Jó', 0 ,10);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('José', 0 ,10);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Jonas', 1 ,10);

INSERT
    or IGNORE INTO answer (title, isCorrect, questionId)
Values
('Joel', 0 ,10);

--