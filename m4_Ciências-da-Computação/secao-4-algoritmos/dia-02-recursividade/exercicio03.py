def find_biggest(numbs: list):
    """Recebe uma lista de números inteiros e retorna o maior entre eles"""
    if len(numbs) == 1:
        return numbs[0]
    elif numbs[0] <= numbs[1]:
        return find_biggest(numbs[1:])
    else:
        return find_biggest(numbs[::2])
