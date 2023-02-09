def score_of(staff, person):
    score = 1
    if len(staff[person]) == 0:
        return score

    for emp in staff[person]:
        score += score_of(staff, emp)
    
    return score

staff = {
    1: [2, 3],
    2: [4],
    3: [],
    4: [],
}

print(score_of(staff, 1))

# Analise de compelxidade:
# A função itera por todos os membros de uma lista correspondente a chave informada.
# Logo, a complexidade é O(n1 + n2 + ... + nx), cada n o tamanho da lista que sera iterada.
# Seguindo a regra de simplificação, teremos O(n).