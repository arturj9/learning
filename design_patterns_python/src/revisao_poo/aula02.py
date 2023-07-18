from datetime import datetime

class Pessoa:

    def __init__(self:object, nome:str) -> None:
        self.__nome = nome
        self__nascimento = datetime.now()
    
    def __str__(self:object) -> str:
        return self.__nome
    
    def __repr__(self:object) -> str:
        return self.__nome
    
    def get_nome(self:object) -> str:
        return self.__nome
    

class Carro:

    def __init__(self:object, is_sedan:bool = False) -> None:
        self.__is_sedan: bool = is_sedan
        self.__velocidade: int = 0
        self.__motorista: Pessoa = None
    
    def __str__(self:object) -> str:
        if self.__motorista:
            return f'Carro de {self.__motorista.get_nome()}'
        return 'Carro sem motorista'
    
    def dirigir(self:object, motorista:Pessoa) -> None:
        self.__motorista = motorista
        self.acelerar(1)
    
    def acelerar(self:object, velocidade:int) -> None:
        self.__velocidade += velocidade

    def parar(self:object) -> None:
        self.__velocidade = 0

