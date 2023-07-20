

class University(type):

    def __call__(cls, *args, **kwargs):
        print(f'==== Estes são os argumentos: {args}')
        return type.__call__(cls, *args, **kwargs)

class Geek(metaclass=University):
    
    def __init__(self, valor1, valor2):
        self.valor1 = valor1
        self.valor2 = valor2

obj = Geek(43,45)
print(obj)