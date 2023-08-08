"""
Este programa faz conversão de Fahrenheit para Celsius
"""
"""
>>> converte(32)
0.0
>>> converte(-40)
-40.0
"""


def converte_F_para_C(temperatura):
    return 5 * ((temperatura - 32) / 9)


def converte_C_para_F(temperatura):
    return temperatura * (9 / 5) + 32
