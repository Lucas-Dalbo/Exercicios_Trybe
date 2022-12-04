numb_to_letter = {
  2: ["A", "B", "C"],
  3: ["D", "E", "F"],
  4: ["G", "H", "I"],
  5: ["J", "K", "L"],
  6: ["M", "N", "O"],
  7: ["P", "Q", "R", "S"],
  8: ["T", "U", "V"],
  9: ["W", "X", "Y", "Z"],
}

def convert_letters (string: str):
    new_string = string.upper()
    for key, value in numb_to_letter.items():
        for l in value:
            new_string = new_string.replace(l, str(key))

    return new_string

if __name__ == "__main__":
    text01 = "1-HOME-SWEET-HOME"
    print(convert_letters(text01))