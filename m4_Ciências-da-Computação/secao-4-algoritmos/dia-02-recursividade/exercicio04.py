def mdc(a, b):
    print(a, b)
    if b == 0:
        return a
    return mdc(a % b, b)