from app.app import converte_F_para_C


def test_converte_deve_retornar_0_quando_receber_32():
    assert converte_F_para_C(32) == 0

def test_converte_deve_retornar_menos40_quando_receber_menos40():
    assert converte_F_para_C(-40) == -40
