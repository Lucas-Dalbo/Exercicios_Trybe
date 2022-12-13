from collections import Counter

class Estatistica():
    def media(lista: 'list[float or int]'):
        return sum(lista) / len(lista)


    def mediana(lista: 'list[float or int]'):
        tamanho = len(lista)
        if tamanho % 2 == 0:
            central = int(tamanho / 2)
            return (lista[central] + lista[central - 1]) / 2
        else:
            central = int((tamanho + 1 / 2) - 1) 
            return lista[central]

    
    def moda(lista: 'list[float or int]'):
        contagem = Counter(lista)
        moda, quant = contagem.most_common(1)[0]
        return moda
