from exercicio02 import convert_letters

def test_letters_must_become_numbers():
    '''Para casa letra, deve retornar um numero'''
    for element in convert_letters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'):
        assert element.isdigit() is True


def test_letter_group_return_same_number():
    '''Cada conjunto de letras esta relacionado a apenas um número'''
    assert convert_letters("ABC") == "222"
    assert convert_letters("DEF") == "333"
    assert convert_letters("GHI") == "444"
    assert convert_letters("JKL") == "555"
    assert convert_letters("MNO") == "666"
    assert convert_letters("PQRS") == "7777"
    assert convert_letters("TUV") == "888"
    assert convert_letters("WXYZ") == "9999"


def test_number_1_returns_1():
    '''O digito 1, se relaciona apenas consigo mesmo'''
    assert convert_letters("1") == "1"
    for element in convert_letters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'):
        assert element != "1"


def test_number_0_returns_0():
    '''O digito 0, se relaciona apenas consigo mesmo'''
    assert convert_letters("0") == "0"
    for element in convert_letters('ABCDEFGHIJKLMNOPQRSTUVWXYZ'):
        assert element != "0"