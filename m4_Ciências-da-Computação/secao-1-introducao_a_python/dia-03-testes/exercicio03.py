def username_validation(user: str):
    if not user[0].isalpha():
        return False

    for char in user:
        if not char.isalnum() and char != '_' and char != '-':
            return False

    return True


def domain_validation(dom: str):
    for char in dom:
        if not char.isalnum():
            return False
    
    return True


def extension_validation(ext: str):
    if len(ext) > 3:
        return False

    for char in ext:
        if not char.isalpha():
            return False
    
    return True
    
    

def email_validation (email: str):
    '''Recebe 'email', e verifica se é um email válido no formato: username@dominio.extensao'''
    try:
        if email.count('@') > 1:
            return "Email Inválido: Somente 1 '@' permitida"

        firt_part, second_part = email.split("@", 1)
        if not username_validation(firt_part):
            return "Email Inválido: Username deve começar com uma letra e só pode conter letras, números, traços e underscores"

        second_part, third_part = second_part.split(".", 1)
        if not domain_validation(second_part):
            return "Email Inválido: Dominio inválido"

        if not extension_validation(third_part):
            return "Email Inválido: Extensão inválida"
    
    except ValueError:
        return "Email Inválido: Formato Inválido"

    return "Email Válido!"

if __name__ == "__main__":
    email = input("Digite seu email: ")
    result = email_validation(email)
    print(result)