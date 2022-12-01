def inverted_string_ladder(string):
    '''Recebe uma string e retorna uma impressão de uma escada invertida vertical'''
    while len(string) > 0:
        print(string)
        string = string[:-1]
    # Os dois pontos, nesse contexto, significam um slice na string que remove apenas o ultimo elemento.

if __name__ == "__main__":
    name = input('Digite seu nome: ').upper()
    inverted_string_ladder(name)


#----------------------------------------------------


# Resolução do Gabarito:

# def vertical_inverted_ladder(word):
#     for removed_letters in range(len(word)):
#         for index in range(len(word) - removed_letters):
#             print(word[index], end="")
#         print()

# if __name__ == "__main__":
#     name = input("Digite um nome: ")
#     vertical_inverted_ladder(name)


# Explicação:
# Usando um loop for em um range de letras removidas e um range para a palavra ele imprime cada letra separadamente.
# Como usa o parametro "end" em print, todas as letras são imprimidas na mesma linha.
# Ao final de cada loop, um print vazio quebra a sequência de impressões na mesma linha.

