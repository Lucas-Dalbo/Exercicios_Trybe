def fizz_buzz_list(n: int):
    '''Retorna uma lista de n números, na qual os muiltplos de 3 são Fizz, os de 5 são Buzz e os de ambos são FizzBuzz'''
    new_list = []

    try:
      for numb in range(1, n + 1):
          if numb % 5 == 0 and numb % 3 == 0:
              new_list.append('FizzBuzz')
          elif numb % 5 == 0:
              new_list.append("Buzz")
          elif numb % 3 == 0:
              new_list.append("Fizz")
          else:
              new_list.append(numb)
    except TypeError:
        return "Valor inválido. Informe um número inteiro maior que zero."

    return new_list

if __name__ == "__main__":
    try:
        length = (input("Informe o tamanho da lista: "))
        print(fizz_buzz_list(int(length)))
    except:
        print(fizz_buzz_list(length))