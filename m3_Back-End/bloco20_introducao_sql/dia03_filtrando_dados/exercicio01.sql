USE PecasFornecedores;

-- 1.  Faça uma consulta que retorne todas as peças que começam com as letras GR.
	SELECT * FROM Pecas
    WHERE name LIKE 'gr%'; 

-- 2. Escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2.
-- Organize o resultado por ordem alfabética de fornecedor.
	SELECT * FROM Fornecimentos
    WHERE peca = 2
    ORDER BY fornecedor ASC;

-- 3. Faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
	SELECT peca, Preco, fornecedor FROM Fornecimentos
    WHERE fornecedor LIKE '%n%';

-- 4. Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA).
-- Ordene esses resultados em ordem alfabética decrescente.
	SELECT * FROM Fornecedores
    WHERE name LIKE '%LTDA'
    ORDER BY name DESC;

-- 5. Faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
	SELECT COUNT(*) FROM Fornecedores
    WHERE code LIKE '%F%';
    
-- 6. escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00.
-- Ordene os resultados por ordem crescente.
	SELECT * FROM Fornecimentos
    WHERE Preco BETWEEN 15 AND 40
    ORDER BY Preco ASC;

-- 7. Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
	SELECT COUNT(*) FROM Vendas
    WHERE DATE(order_date) BETWEEN '2018-04-15' AND '2019-07-30';