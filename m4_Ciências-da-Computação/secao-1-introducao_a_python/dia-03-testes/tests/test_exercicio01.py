from exercicio01 import fizz_buzz_list

fizz_buzz_list_15 = [1, 2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']

def test_fizz_buzz_list():
    '''Para uma lista de 15 numeros, deve retornar fizz_buzz_list_15'''
    assert fizz_buzz_list(15) == fizz_buzz_list_15

def test_fizz_buzz_list_float_exception():
    '''Para uma entrada com valor float, deve acusar exceção'''
    assert fizz_buzz_list(5.5) == "Valor inválido. Informe um número inteiro maior que zero."

def test_fizz_buzz_list_string_exception():
    '''Para uma entrada com valor float, deve acusar exceção'''
    assert fizz_buzz_list('invalid') == "Valor inválido. Informe um número inteiro maior que zero."

def test_fizz_buzz_list_negative_exception():
    '''Para uma entrada com valor float, deve acusar exceção'''
    assert fizz_buzz_list(-5) == "Valor inválido. Informe um número inteiro maior que zero."