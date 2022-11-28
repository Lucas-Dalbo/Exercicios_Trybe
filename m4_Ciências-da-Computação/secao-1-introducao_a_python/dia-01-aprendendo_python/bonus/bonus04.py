def gas_station(quant: float, type: str):
    '''Recebe um valor float, quant, um valor string, type, e retorna o valor total da compra com base em quant em litros e o type de combustivel'''
    if type == "A":
        price, discount = 1.90, 0.03
        if quant > 20:
            discount = 0.05
    elif type == "G":
        price, discount = 2.50, 0.04
        if quant > 20:
            discount = 0.06
    else:
        return 'Tipo de combustivel indisponivel'
    total = price * quant
    total -= total * discount
    return total

print(gas_station(10, 'A'))
print(gas_station(30, 'A'))
print(gas_station(10, 'G'))
print(gas_station(30, 'G'))
print(gas_station(30, 'D'))