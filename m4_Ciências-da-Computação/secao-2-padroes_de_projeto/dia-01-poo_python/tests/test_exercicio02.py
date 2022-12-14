from exercicio02 import Estatistica

def test_media():
    result = Estatistica.media([1, 2, 3])
    assert result == 2


def test_mediana_impar():
    result = Estatistica.mediana([1, 4, 7])
    assert result == 4


def test_mediana_par():
    result = Estatistica.mediana([1, 2, 3, 5])
    assert result == 2.5


def test_moda():
    result = Estatistica.moda([1, 9, 7, 9, 2, 7, 9])
    assert result == 9