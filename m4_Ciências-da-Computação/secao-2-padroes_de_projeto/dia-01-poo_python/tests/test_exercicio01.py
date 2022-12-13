import pytest
from exercicio01 import TV

def test_instance_of_TV():
    test_tv = TV(32)
    assert test_tv.tamanho == 32
    assert test_tv.get_canal() == 1
    assert test_tv.get_volume() == 50
    assert test_tv.get_ligada() == False


def test_aumentar_volume():
    test_tv = TV(32)
    test_tv.aumentar_volume()
    assert test_tv.get_volume() == 51


def test_diminuir_volume():
    test_tv = TV(32)
    test_tv.diminuir_volume()
    assert test_tv.get_volume() == 49

def test_modificar_canal():
    test_tv = TV(32)
    test_tv.modificar_canal(25)
    assert test_tv.get_canal() == 25

    with pytest.raises(ValueError):
        test_tv.modificar_canal(100)

    with pytest.raises(ValueError):
        test_tv.modificar_canal(-1)


def test_ligada_desligada():
    test_tv = TV(32)
    test_tv.ligar_desligar()
    assert test_tv.get_ligada() is True
    test_tv.ligar_desligar()
    assert test_tv.get_ligada() is False