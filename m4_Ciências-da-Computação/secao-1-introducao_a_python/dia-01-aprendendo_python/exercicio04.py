def biggest_name(name_list: 'list[str]'):
    '''Recebe uma lista de nomes como parâmetro e retorna o nome mais longo'''
    # counter = {name: len(name) for name in name_list}
    return max(name_list)


name_list = ["Lucas", "Anne", "Severino"]

print(biggest_name(name_list))
    