def can_be_triangle(side_A: float, side_B: float, side_C: float):
    '''Recebe 3 números float e retorna se seria possivel construir um triângulo com estas medidas'''
    sides = [side_A, side_B, side_C]
    biggest_side = max(sides)
    other_sides = [side for side in sides if side != biggest_side]

    if sum(other_sides) < biggest_side:
        return "Não é triângulo"

    return "É triângulo"


print(can_be_triangle(2.3, 3.8, 4.9))
print(can_be_triangle(5.5, 8.3, 13.9))
    