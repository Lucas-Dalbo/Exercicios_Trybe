def quadrado(lado: int):
    '''Recebe um valor inteiro e imprime um quadrado de * com o tamanho do valor informado'''
    if lado > 0:
        n = 1
        while n <= lado:
            print(lado * '* ')
            n += 1

quadrado(5)
print('---------------')
quadrado(3)