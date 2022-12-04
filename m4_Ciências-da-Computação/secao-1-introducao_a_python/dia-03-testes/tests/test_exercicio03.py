from exercicio03 import email_validation

def test_return_error_with_2_arrobas():
    '''Se possuir mais de uma @ deve retornar: Email Inválido: Somente 1 '@' permitida'''
    assert email_validation('inv@alid@.email.com') == "Email Inválido: Somente 1 '@' permitida"


def test_return_error_invalid_user():
    '''Se o username não for válido: Email Inválido: Username deve começar com uma letra e só pode conter letras, números, traços e underscores'''
    assert email_validation('7nvalid@email.com') == "Email Inválido: Username deve começar com uma letra e só pode conter letras, números, traços e underscores"


def test_return_error_invalid_domain():
    '''Se o dominio for inválido deve retornar: Email Inválido: Dominio inválido'''
    assert email_validation('valid@e_mail.com') == "Email Inválido: Dominio inválido"


def test_return_error_invalid_extension():
    '''Se a extensão for inválida deve retornar: Email Inválido: Extensão inválida'''
    assert email_validation('valid@email.invalid') == "Email Inválido: Extensão inválida"


def test_return_error_invalid_format():
    '''Se o formato for inválido, retorna: Email Inválido: Formato Inválido'''
    assert email_validation('invalid@email') == "Email Inválido: Formato Inválido"


def test_email_validation_success():
    '''Se tudo for válido, retorna: Email Válido!'''
    assert email_validation('valid@email.com') == "Email Válido!"