-- 1. Insira novos filmes na tabela Movies.
INSERT INTO Pixar.Movies (title, director, year, length_minutes)
VALUES
	('Monstros SA', 'Pete Docter', 2001, 92),
    ('Procurando Nemo', 'John Lasseter', 2003, 107),
    ('Os Incríveis', 'Brad Bird', 2004, 116),
    ('WALL-E', 'Pete Docter', 2008, 104);

-- 2. Insira as informações na tabela BoxOffice.
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
SELECT
	id, 6.8, 450000000, 370000000
FROM Pixar.Movies
WHERE title = 'Procurando Nemo';

-- 3. Altera o nome do diretor de Procurando Nemo.
UPDATE Pixar.Movies
SET director = 'Andrew Staton'
WHERE id = 9;

-- 4. Altere as informações incorretas do filme Ratatouille.
UPDATE Pixar.Movies
SET
	title = 'Ratatouille',
    year = 2007
WHERE id = 3;

-- 5. Insira novas informações na tablea BoxOffice.
INSERT INTO Pixar.BoxOffice (movie_id, rating, domestic_sales, international_sales)
VALUES
	((SELECT id FROM Pixar.Movies WHERE title = 'Monstros SA'), 8.5, 300000000, 250000000),
	((SELECT id FROM Pixar.Movies WHERE title = 'Os Incríveis'), 7.4, 460000000, 510000000),
	((SELECT id FROM Pixar.Movies WHERE title = 'WALL-E'), 9.9, 290000000, 280000000);

-- 6. Exclua o filme WALL-E.
SET sql_safe_updates = 0;
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN ((SELECT id FROM Pixar.Movies WHERE title = 'WALL-E'));

DELETE FROM Pixar.Movies
WHERE title = 'WALL-E';

-- 7. Exclua os filmes dirigidos por Andrew Staton.
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN ((SELECT id FROM Pixar.Movies WHERE director = 'Andrew Staton'));

DELETE FROM Pixar.Movies
WHERE director = 'Andrew Staton';

