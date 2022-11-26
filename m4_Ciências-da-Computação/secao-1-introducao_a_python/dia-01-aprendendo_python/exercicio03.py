def quadrado(lado: int):
    if lado > 0:
        n = 1
        while n <= lado:
            print(lado * '* ')
            n += 1

quadrado(5)
print('---------------')
quadrado(3)