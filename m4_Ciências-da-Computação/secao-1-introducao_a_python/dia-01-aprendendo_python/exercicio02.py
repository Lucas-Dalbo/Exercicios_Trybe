def media_aritimetica(numb_list: 'list[int]'):
    '''Recebe uma lista de números inteiros e retorna a média aritmética da lista'''
    return sum(numb_list)/len(numb_list)


print(media_aritimetica([1, 3, 5]))
print(media_aritimetica([5, 10, 15, 20]))