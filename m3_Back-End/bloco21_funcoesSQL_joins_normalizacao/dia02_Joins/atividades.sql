-- Exercício 1: Utilizando o INNER JOIN, encontre as vendas nacionais (domestic_sales) e internacionais (international_sales) de cada filme.
SELECT
	M.title, BO.domestic_sales, BO.international_sales
FROM pixar.box_office AS BO
INNER JOIN pixar.movies AS M
ON BO.movie_id = M.id;

-- Exercício 2: Utilizando o INNER JOIN, faça uma busca que retorne o número de vendas para cada filme que possui um número maior de vendas internacionais (international_sales) do que vendas nacionais (domestic_sales).
SELECT
	M.title, BO.domestic_sales, BO.international_sales,
    (BO.domestic_sales + BO.international_sales) AS total_sales
FROM pixar.box_office AS BO
INNER JOIN pixar.movies AS M
ON BO.movie_id = M.id
WHERE BO.international_sales > BO.domestic_sales;

-- Exercício 3: Utilizando o INNER JOIN, faça uma busca que retorne os filmes e sua avaliação (rating) em ordem decrescente.
SELECT
	M.title, BO.rating
FROM pixar.box_office AS BO
INNER JOIN pixar.movies AS M
ON BO.movie_id = M.id
ORDER BY BO.rating DESC;

-- Exercício 4: Utilizando o LEFT JOIN, faça uma busca que retorne todos os dados dos cinemas, mesmo os que não possuem filmes em cartaz e, adicionalmente, os dados dos filmes que estão em cartaz nestes cinemas. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	T.*, M.*
FROM pixar.theater AS T
LEFT JOIN pixar.movies AS M
ON M.theater_id = T.id
ORDER BY T.name ASC;

-- Exercício 5: Utilizando o RIGHT JOIN, faça uma busca que retorne todos os dados dos filmes, mesmo os que não estão em cartaz e, adicionalmente, os dados dos cinemas que possuem estes filmes em cartaz. Retorne os nomes dos cinemas em ordem alfabética.
SELECT 
	M.*, T.*
FROM pixar.theater AS T
RIGHT JOIN pixar.movies AS M
ON M.theater_id = T.id
ORDER BY T.name ASC;