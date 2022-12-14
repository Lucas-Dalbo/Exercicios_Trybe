from exercicio03 import Quadrado, Retangulo, Circulo

def test_quadrado():
    quad = Quadrado(3)
    assert quad.area() == 9
    assert quad.perimetro() == 12


def test_retangulo():
    ret = Retangulo(2.5, 3)
    assert ret.area() == 7.5
    assert ret.perimetro() == 11


def test_circulo():
    circ = Circulo(3)
    assert circ.area() == 28.26
    assert circ.perimetro() == 18.84