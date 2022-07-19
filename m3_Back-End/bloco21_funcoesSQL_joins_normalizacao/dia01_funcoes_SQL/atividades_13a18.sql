-- 13. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e ano no qual foi contratado (exiba somente o ano).
SELECT employee_id, first_name, YEAR(hire_date) AS ano_contratado
FROM hr.employees;

-- 14. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e dia do mês no qual foi contratado (exiba somente o dia).
SELECT employee_id, first_name, DAY(hire_date) AS dia_contratado
FROM hr.employees;

-- 15. Escreva uma query que exiba as seguintes informações de cada funcionário: id, primeiro nome e mês no qual foi contratado (exiba somente o mês).
SELECT
	employee_id,
    first_name,
    MONTH(hire_date) AS mês_contratado,
    MONTHNAME(hire_date) mês_nome
FROM hr.employees;

-- 16. Escreva uma query que exiba os nomes dos funcionários em letra maiúscula.
SELECT
	UCASE(first_name) AS nome,
	UCASE(last_name) AS sobrenome
FROM hr.employees;
-- ou:
SELECT UPPER(CONCAT(first_name, " ", last_name)) AS nome_completo
FROM hr.employees;

-- 17: Escreva uma query que exiba o sobrenome e a data de contratação de todos os funcionário contratados em julho de 1987.
SELECT
	last_name AS sobrenome,
    DATE(hire_date) AS ano_contratado
FROM hr.employees
WHERE MONTH(hire_date)=7 AND YEAR(hire_date)=1987;

-- 18: Escreva uma query que exiba as seguintes informações de cada funcionário: nome, sobrenome, tempo que trabalha na empresa (em dias).
SELECT
	first_name AS nome,
	last_name AS sobrenome,
	DATEDIFF(CURRENT_DATE(), hire_date) AS tempo_serviço
FROM hr.employees;

