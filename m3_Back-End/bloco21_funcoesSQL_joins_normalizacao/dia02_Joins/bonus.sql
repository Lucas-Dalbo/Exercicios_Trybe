-- Bônus: Utilizando o INNER JOIN, selecione todas as informações dos filmes que estão em cartaz (possuem theater_id diferente de NULL) com avaliação maior que 8.
SELECT M.*, T.name, B.rating
FROM pixar.movies AS M
INNER JOIN pixar.theater AS T
	ON M.theater_id = T.id 
INNER JOIN pixar.box_office AS B
	ON M.id = B.movie_id
WHERE B.rating > 8;
