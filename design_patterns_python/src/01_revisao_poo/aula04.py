from abc import ABC, abstractmethod
from uuid import uuid4


class Pessoa(ABC):
    def __init__(self: object, nome: str) -> None:
        self.__nome: str = nome

    @abstractmethod
    def ganhar_dinheiro(self: object) -> None:
        pass


class Aluno(Pessoa):
    def __init__(self: object, nome: str) -> None:
        super().__init__(nome)
        self.__matricula: str = str(uuid4()).split("-")[0].upper()

    def ganhar_dinheiro(self: object) -> None:
        print("Como ganhar dinheiro? ")


# pessoa = Pessoa('JOAO')
aluno1 = Aluno("Angelina")
print(aluno1.__dict__)
