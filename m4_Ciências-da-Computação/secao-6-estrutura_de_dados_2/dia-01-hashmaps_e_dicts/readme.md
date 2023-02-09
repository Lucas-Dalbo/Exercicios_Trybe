# Exercícios 

## Exercício 01
Você receberá uma lista de palavras e uma string. Escreva uma função que decida quais palavras podem ser formadas com os caracteres da string (cada caractere só pode ser utilizado uma vez). Retorne a soma do comprimento das palavras escolhidas.

Exemplo:

```python
words = ["cat", "bt", "hat", "tree"], chars = "atach"
# saída: 6
"""Explicação: As palavras que podem ser formadas com os caracteres da string
               são "cat" (tamanho 3) e "hat" (tamanho 3)."""
```

Em seguida, faça a análise de complexidade da sua solução.

---
## Exercício 02
Uma certa empresa tem uma estrutura hierarquizada onde cada pessoa reporta a uma única outra pessoa. Cada pessoa tem um score que é o total de pessoas que estão abaixo dela, incluindo subordinados de seus subordinados, além dela própria. Isso significa que uma pessoa que não tem nenhuma equipe tem score 1. Uma pessoa com apenas um subordinado e esse subordinado não tem equipe, tem score 2.

Escreva um método que calcule o score de uma determinada pessoa.

Exemplo:
```python
staff = {
  1: [2, 3],
  2: [4],
  3: [],
  4: [5, 6],
  5: [7],
  6: [],
  7: [],
}

person = 2

# saida = 5
```

Em seguida, faça a analize de compleixdade.
