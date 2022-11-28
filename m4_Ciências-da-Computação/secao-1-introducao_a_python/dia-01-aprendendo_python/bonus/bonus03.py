def sum_of(number: int):
    '''Receve um número interio, number, e retorna a somatória de 1 até number'''
    numb_list = range(1, number + 1)
    return sum(numb_list)

print(sum_of(5))
print(sum_of(2))