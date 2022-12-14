from exercicio02 import Baralho
from collections.abc import Iterator

class ReverseBaralhoIterator(Iterator):
    def __init__(self, baralho):
        self.baralho = baralho
        self.current_card = -1
    
    def get_card(self, card_id):
        return self.baralho[card_id]
    
    def __next__(self):
        try:
            card = self.get_card(self.current_card)
        except IndexError:
            raise StopIteration()
        else:
            self.current_card -= 1
            return card

class BaralhoInverso(Baralho):
    def __iter__(self):
        return ReverseBaralhoIterator(self._cartas)


if __name__ == "__main__":
    baraReverso = BaralhoInverso()
    for carta in baraReverso:
        print(carta)