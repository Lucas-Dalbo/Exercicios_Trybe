from exercicio02 import Baralho
from collections.abc import Iterator


class BaralhoIteratorSupremo(Iterator):
    _types = {
      "reverse": [-1, -1],
      "normal": [0 , 1],
    }

    def __init__(self, baralho, style):
        self.baralho = baralho
        self.style = self._types[style]
        self.current_card = self.style[0]
    
    def get_card(self, card_id):
        return self.baralho[card_id]
    
    def __next__(self):
        try:
            card = self.get_card(self.current_card)
        except IndexError:
            raise StopIteration()
        else:
            self.current_card += self.style[1]
            return card

class BaralhoSupremo(Baralho):
    def __init__(self, style):
        super().__init__()
        self.style = style

    def __iter__(self):
        return BaralhoIteratorSupremo(self._cartas, self.style)


if __name__ == "__main__":
    baralhoReverso = BaralhoSupremo("reverse")
    for carta in baralhoReverso:
        print(carta, end=" ")
    
    print('')

    baralhoNormal = BaralhoSupremo("normal")
    for carta in baralhoNormal:
        print(carta, end=" ")