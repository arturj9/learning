from .app import converte_C_para_F, converte_F_para_C

# Fluxo

# Input
opcao = input("Digite F para Fahrenheit ou C para Celsius: ")
temperatura = float(input("Digite a temperatura: "))

# Processamento
match (opcao):
    case "F":
        resultado = converte_C_para_F(temperatura)
    case "C":
        resultado = converte_F_para_C(temperatura)
    case _:
        print("Digite F ou C. Tá errado!")

# Output
print(f"A temperatura em Celsius é: {celsius}")
