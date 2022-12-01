import random

words = ["casa", "rato", "roda"]

def chose_n_scramble(word_list: list):
    '''Recebe uma lista de strings e retorna a palavra escolhida e sua versão embaralhada'''
    word = random.choice(word_list)
    scrambled = "".join(random.sample(word, len(word)))
    return word, scrambled

def guess_word(word: str, scrambled: str):
    '''Recebe duas strings, uma palavra e sua versão embaralhada, a pessoa usuária tem 3 tentaivas para descobrir qual é a palavra embaralhada'''
    attempts_left = 3

    while attempts_left > 0:
        print(f"Palavra: {scrambled} - Tentaivas: {attempts_left}")
        user_word = input("Qual é a palavra? ")

        if user_word == word:
            print(f"Você acertou! A palavra é {word}")
            break
        elif attempts_left > 1:
            print("Você errou, tente novamente")
        else:
            print(f"Que pena! A palavra era '{word}'")
        
        attempts_left -= 1


if __name__ == "__main__":
    chosen_word, scrambled_word = chose_n_scramble(words)
    guess_word(chosen_word, scrambled_word)