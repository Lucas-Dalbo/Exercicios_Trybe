class TV():
    def __init__(self, tamanho):
        self.tamanho = tamanho
        self.__volume = 50
        self.__canal = 1
        self.__ligada = False

    
    def __str__(self):
        return(f"""
        tamanho: {self.tamanho},
        volume: {self.__volume},
        canal: {self.__canal},
        ligada: {self.__ligada},
        """)


    def get_canal(self):
        return self.__canal


    def get_volume(self):
        return self.__volume


    def get_ligada(self):
        return self.__ligada


    def aumentar_volume(self):
        if self.__volume <= 99:
            self.__volume += 1

    
    def diminuir_volume(self):
        if self.__volume >= 0:
            self.__volume -= 1


    def modificar_canal(self, novo_canal: int):
        if  1 <= novo_canal <= 99:
            self.__canal = novo_canal
        else:
            raise ValueError(f"O canal {novo_canal} é invalido")

    
    def ligar_desligar(self):
        self.__ligada = not self.__ligada