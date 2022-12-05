from exercicio04 import email_list_validation

invalid_list = ["invalid@e_mail.com", "invalid.d@email.com", "invalid@email"]
one_valid_list = ["valid@email.com", "invalid.d@email.com", "invalid@email"]
two_valid_list = ["valid@email.com", "valid02@email.com", "invalid@email"]
all_valid_list = ["valid@email.com", "valid02@email.com", "valid03@email.com"]

def test_for_all_invalid_return_empty():
    '''Para uma lista de emails inválidos, deve retornar uma lista vazia'''
    result = email_list_validation(invalid_list)
    assert len(result) == 0


def test_for_one_valid_return_one():
    '''Para uma lista com 1 email válido, deve retornar uma lista com 1 elemento'''
    result = email_list_validation(one_valid_list)
    assert len(result) == 1


def test_for_two_valid_return_two():
    '''Para uma lista com 2 emails válidos, deve retornar uma lista com 2 elementos'''
    result = email_list_validation(two_valid_list)
    assert len(result) == 2


def test_for_all_valid_return_all():
    '''Para uma lista com todos os emails válidos, deve retornar uma lista com todos os elementos'''
    result = email_list_validation(all_valid_list)
    assert len(result) == len(all_valid_list)