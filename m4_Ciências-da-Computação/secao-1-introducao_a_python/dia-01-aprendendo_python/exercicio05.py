lata_por_metro_quad = 18 * 3
preco_lata = 80.00

print("Uma lata pinta", lata_por_metro_quad, "metros²")


def latas_por_metro_quad(m: float):
    '''Recebe um valor int que representa metros² e retorna a quantidade de latas de tinta necessárias para pintar a área e o valor total da compra'''
    q = (m // lata_por_metro_quad) + 1
    tp = q * preco_lata
    return (q, tp)


print(latas_por_metro_quad(50))
print(latas_por_metro_quad(109))
