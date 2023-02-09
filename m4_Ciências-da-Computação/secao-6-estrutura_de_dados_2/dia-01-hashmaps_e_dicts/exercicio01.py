def alphabet_chars(chars):
    avaliable_chars = {}
    for char in chars:
        if char not in avaliable_chars:
            avaliable_chars[char] = 1
        else:
            avaliable_chars[char] +=1
    print(f"Characteres disponiveis {avaliable_chars.items()}")
    return avaliable_chars


def word_count(words: 'list[str]', chars: str):
    result = 0
    avaliable_chars = alphabet_chars(chars)
    for word in words:
        print(f"Analisando a palavra '{word}'")
        word_chars = {}
        for char in word:
            if char not in avaliable_chars:
                print(f"Letra '{char}' não esta disponivel.")
                break
            
            if char not in word_chars:
                word_chars[char] = 1
            else:
                word_chars[char] += 1
            
            if word_chars[char] > avaliable_chars[char]:
                print(f"Letra '{char}' tem ocorrência maior que a disponivel.")
                break
        else:
            print(f"Palavra '{word}' aceita.")
            result += len(word)

    return result


words = ["hello", "world", "students"]
chars = "welldonehoneyr"

print('Resultado:', word_count(words, chars))

# Analise de complexidade:
# Ao iterar por words temos O(n), como precisamos iterar pelos caracteres da strings de words, temos O(n) também.
# Isso resulta em O(n²).
# Iterar por chars resulta em O(n).
# Logo temos O(n + n²).
# Seguindo a regra de maior complexidade, teremos O(n²) como complexidade total.