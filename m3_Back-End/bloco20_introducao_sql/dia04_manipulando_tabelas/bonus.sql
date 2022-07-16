-- Desligando o safe update.
SET sql_safe_updates = 0;

-- 1. Altere a classificação dos filmes que lucraram mais de 400M internamente para 9.
UPDATE Pixar.BoxOffice
SET rating = 9.0
WHERE domestic_sales > 400000000;

-- 2. Altere a classificação para 6.0 de acordo com os lucros.
UPDATE Pixar.BoxOffice
SET rating = 6.0
WHERE domestic_sales > 200000000 AND international_sales < 300000000;

-- 3. Exclua os filmes com menos de 100 minutos de duração.
DELETE FROM Pixar.BoxOffice
WHERE movie_id IN (SELECT id FROM Pixar.Movies WHERE length_minutes < 100);

DELETE FROM Pixar.Movies
WHERE length_minutes < 100;