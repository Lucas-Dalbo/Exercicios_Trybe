def blefe_points_calculation(p1_numbs: set, p2_numbs: set):
    dif = p1_numbs.difference(p2_numbs)
    result = max(dif) - min(dif)
    return result


def blefe_game(players: 'dict[list[int]]'):
    p1, p2 = players.keys()

    p1_set = set(players[p1])
    p2_set = set(players[p2])

    p1_points = blefe_points_calculation(p1_set, p2_set)
    p2_points = blefe_points_calculation(p2_set, p1_set)

    if p2_points > p1_points:
        return p2
    elif p2_points < p1_points:
        return p1
    else:
        return None
        

entrada = {
    'Clara': [0, 1, 5, 9, 10],
    'Marco': [0, 2, 8, 9, 10]
}

resultado = blefe_game(entrada)

if resultado:
    print(f"{resultado} VENCEU!")
else:
    print("EMPATE")

# Analise de complexidade:
# Retornar somente as chaves com dict.keys(): O(n)
# Transformar listas em sets: O(n)
# Calcular a diferença entre dois sets: O(n)
# Calcular a difrença entre o maior e menor elemento: O(n)
# No total temos O(4n).
# Pela regra de simplificação, a complexidade total será O(n).