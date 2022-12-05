from exercicio03 import email_validation

def email_list_validation(email_list: 'list[str]'):
    '''Recebe uma lista de emails e retorna uma nova lista com todos os emails que são válidos'''
    valid_emails = [email
                    for email in email_list
                    if email_validation(email) == "Email Válido!"]
    return valid_emails


if __name__ == "__main__":
    email_list = [
      "lucas042@email.com",
      "ju.ju@email.com",
      "anne@e_mail.com",
      "relampago_maquinhos@fast.com"
    ]
    print(email_list_validation(email_list))
