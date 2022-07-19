-- 1. Escreva uma query que exiba o maior salário da tabela.
SELECT MAX(salary) FROM hr.employees;

-- 2. Escreva uma query que exiba a diferença entre o maior e o menor salário.
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- 3. Escreva uma query que exiba a média salarial de cada job_id, ordenando pela média salarial em ordem decrescente.
SELECT
	job_id,
	AVG(salary) AS media_salarial
FROM hr.employees
GROUP BY job_id
ORDER BY media_salarial DESC;

-- 4. Escreva uma query que exiba a quantidade de dinheiro necessária para realizar o pagamento de todas as pessoas funcionárias.
SELECT SUM(salary) AS salario
FROM hr.employees;

-- 5. Escreva uma query que exiba quatro informações: o maior salário, o menor salário, a soma de todos os salários e a média dos salários. Todos os valores devem ser formatados para ter apenas duas casas decimais.
SELECT
	ROUND(MAX(salary), 2) AS maior_salario,
    ROUND(MIN(salary), 2) AS menor_salario,
    ROUND(SUM(salary), 2) AS soma_salarios,
    ROUND(AVG(salary), 2) AS media_salarios
FROM hr.employees;

-- 6. Escreva uma query que exiba a quantidade de pessoas que trabalham como pessoas programadoras (it_prog).
SELECT COUNT(*) AS pessoas_programadoras
FROM hr.employees WHERE job_id = 'IT_PROG';