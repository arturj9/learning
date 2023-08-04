from abc import ABCMeta


class EstadoComputador(metaclass=ABCMeta):
    nome = "EstadoComputador"
    permitido = []

    def mudar(self, estado):
        if estado.nome in self.permitido:
            print(f"Atual: {self} => mudado para um novo estado: {estado.nome}")
            self.__class__ = estado
        else:
            print(f"Atual: {self} => não é possível mudar para {estado.nome}")

    def __str__(self):
        return self.nome


class Ligar(EstadoComputador):
    nome = "Ligar"
    permitido = ["Desligar", "Suspender", "Hiberbar"]


class Desligar(EstadoComputador):
    nome = "Desligar"
    permitido = ["Ligar"]


class Suspender(EstadoComputador):
    nome = "Suspender"
    permitido = ["Ligar"]


class Hiberbar(EstadoComputador):
    nome = "Hiberbar"
    permitido = ["Ligar"]


class Computador:
    def __init__(self, modelo="Dell"):
        self.modelo = modelo
        self.estado = Desligar()

    def alterar(self, estado):
        self.estado.mudar(estado)


if __name__ == "__main__":
    computador = Computador()

    # Ligar
    computador.alterar(Ligar)

    # Desligar
    computador.alterar(Desligar)

    # Ligar novamente
    computador.alterar(Ligar)

    # Suspender
    computador.alterar(Suspender)

    # Tentar hibernar - não podemos
    computador.alterar(Hiberbar)

    # Ligar novamente
    computador.alterar(Ligar)

    # Desligar
    computador.alterar(Desligar)
