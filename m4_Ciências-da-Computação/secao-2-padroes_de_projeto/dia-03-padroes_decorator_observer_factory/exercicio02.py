from abc import ABC, abstractmethod

# Observador Genérico
class Tarefa(ABC):
    @abstractmethod
    def executar(self):
        raise NotImplementedError

# Observador Café
class PrepararCafé(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)
        
    def executar(self):
        print("Preparando o café")

# Observador Luzes
class AcenderLuzes(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def executar(self):
        print("Luzes acessas")

# Observador Cortinas
class AbrirCortinas(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def executar(self):
        print("Abrindo as cortinas")

# Observador Musica
class TocarMusica(Tarefa):
    def __init__(self, alarme):
        self.alarme = alarme
        self.alarme.adicionar_tarefa(self)

    def executar(self):
        print("Tocando musica")


class Alarme():
    def __init__(self):
        self.tarefas = set()

    def adicionar_tarefa(self, tarefa: Tarefa):
        self.tarefas.add(tarefa)

    def remover_tarefa(self, tarefa: Tarefa):
        for task in self.tarefas:
            if isinstance(task, tarefa):
                self.tarefas.remove(task)
                return

    def disparar(self):
        for tarefa in self.tarefas:
            tarefa.executar()


if __name__ == "__main__":
    meu_alarme = Alarme()

    print("4 Tarefas:")
    PrepararCafé(meu_alarme)
    TocarMusica(meu_alarme)
    AbrirCortinas(meu_alarme)
    AcenderLuzes(meu_alarme)
    meu_alarme.disparar()

    print("1 Tarefa:")
    meu_alarme.remover_tarefa(PrepararCafé)
    meu_alarme.remover_tarefa(AbrirCortinas)
    meu_alarme.remover_tarefa(AcenderLuzes)
    meu_alarme.disparar()
