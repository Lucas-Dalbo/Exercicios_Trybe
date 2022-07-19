-- 7. Escreva uma query que exiba a quantidade de dinheiro necessária para efetuar o pagamento de cada profissão (job_id).
SELECT 
	job_id,
	SUM(salary) AS pagamento_total
FROM hr.employees
GROUP BY job_id;

-- 8. Utilizando a query anterior, faça as alterações para que seja exibido somente a quantidade de dinheiro necessária para cobrir a folha de pagamento das pessoas programadoras (it_prog).
SELECT 
	job_id,
	SUM(salary) AS pagamento_total
FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- 9. Escreva uma query que exiba em ordem decrescente a média salarial de todos os cargos, exceto das pessoas programadoras (it_prog).
SELECT 
	job_id,
	ROUND(AVG(salary), 2) AS media_salarial
FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY media_salarial DESC;

-- 10. Escreva um query que exiba média salarial e o número de funcionários de todos os departamentos com mais de dez funcionários.
SELECT
	department_id,
	COUNT(department_id) AS funcionarios,
	ROUND(AVG(salary), 2) AS media_salarial
FROM hr.employees
GROUP BY department_id
HAVING funcionarios > 10;

-- 11. Escreva uma query que atualize a coluna phone_number, de modo que todos os telefones iniciados por 515 agora devem iniciar com 777.
UPDATE hr.employees
SET phone_number = REPLACE(phone_number, '515', '777')
WHERE phone_number LIKE '515%';

-- 12. Escreva uma query que só exiba as informações dos funcionários cujo o primeiro nome tenha oito ou mais caracteres.
SELECT * FROM hr.employees
WHERE LENGTH(first_name) >= 8;