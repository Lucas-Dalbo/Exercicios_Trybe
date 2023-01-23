def count_evens(n: int):
    """Conta quantos números impares existem numa sequência de n números naturais"""
    count = 0
    for numb in range(1, n + 1):
        if numb % 2 == 0:
            count += 1
    return count
