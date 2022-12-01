import exercicio_02

def read_lines(file: str):
    '''Recebe o nome de um arquivo e retorna uma lista com todas as linhas do arquivo. Caso o arquivo não exista, imprime 'Arquivo não encontrado'''
    try:
        with open(file, 'r') as file:
            words = [line.replace('\n', '') for line in file.readlines()]
        return words
    except FileNotFoundError:
        print("Arquivo não encontrado.")


if __name__ == "__main__":
    word_list = read_lines("palavras.txt")
    if (type(word_list) == list):
        chosen, scrambled = exercicio_02.chose_n_scramble(word_list)
        exercicio_02.guess_word(chosen, scrambled)
