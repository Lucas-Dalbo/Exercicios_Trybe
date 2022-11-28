def rigth_triangle_printer(base: int):
    '''Recebe um numero inteiro, base, e imprime um triângulo-retângulo de base equivalente'''
    for numb in range(1, base + 1):
        print("*" * (numb))


rigth_triangle_printer(5)