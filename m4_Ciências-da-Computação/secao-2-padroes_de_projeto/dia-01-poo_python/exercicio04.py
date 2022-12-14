from abc import ABC, abstractmethod
from datetime import datetime

class ManipuladorDeLog(ABC):
    @classmethod
    @abstractmethod
    def log(cls, msg):
        raise NotImplementedError


class LogEmArquivo(ManipuladorDeLog):
    @classmethod
    def log(cls, msg: str):
        content = ""
        try:
            with open("log.txt", "r") as file:
                content = f"{file.read()}\n"
        except FileNotFoundError:
            print("Criando novo log.txt")     
        finally:
            with open("log.txt", "w") as file:
                file.write(content)
                file.write(f"{msg}\n")


class LogEmTela(ManipuladorDeLog):
    @classmethod
    def log(cls, msg: str):
        print(msg)


class Log():
    def __init__(self, manipuladores: 'list[ManipuladorDeLog]'):
        self.manipuladores = set(manipuladores)

    def adicionar_manipulador(self, manipulador: ManipuladorDeLog):
        self.manipuladores.add(manipulador)

    def __log(self, nivel, msg):
        for manipuador in self.manipuladores:
            manipuador.log(self.__formatar(nivel, msg))

    def __formatar(self, nivel, msg):
        data = datetime.now().strftime("%d/%m/%Y %H:%M:%S")
        return f"[{nivel} - {data}]: {msg}"

    def info(self, msg):
        self.__log("INFO", msg)
    
    def alerta(self, msg):
        self.__log("ALERTA", msg)

    def erro(self, msg):
        self.__log("ERRO", msg)

    def debug(self, msg):
        self.__log("DEBUG", msg)


loger = Log([LogEmTela()])
loger.adicionar_manipulador(LogEmArquivo())
loger.alerta("To alertando")
loger.debug("To debugando")
loger.erro("To errando")
loger.info("To informando")