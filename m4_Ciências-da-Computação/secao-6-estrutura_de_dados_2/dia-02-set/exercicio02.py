def maior_sub(string: str):
    maior = ""

    crr_string = ""
    for letter in string:
        if letter not in crr_string:
            crr_string += letter
        else:
            cut_at = crr_string.index(letter) + 1
            crr_string = crr_string[cut_at:]
            crr_string += letter
        
        if len(crr_string) > len(maior):
            maior = crr_string
    
    return len(maior), maior


string = "serdevemuitolegalmasehprecisoestudarbastante"
print(maior_sub(string))
