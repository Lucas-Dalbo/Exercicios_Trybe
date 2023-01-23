def count_evens(n: int):
    """Conta quantos números impares existem numa sequência de n números naturais"""
    if n == 0:
        return 0
    elif n % 2 == 0:
      return 1 +  count_evens(n - 1)
    else:
      return count_evens(n - 1)
