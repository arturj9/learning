from unittest import TestCase
from app.app import converte_F_para_C, converte_C_para_F


class TesteConverteFParaC(TestCase):
    def test_do_ze(self):
        valores = [(32, 0), (-40, -40)]

        for input_, output_ in valores:
            with self.subTest(input=input_, output=output_):
                self.assertEqual(converte_F_para_C(input_), output_)

    def test_converte_deve_retornar_0_quando_receber_32(self):
        assert converte_F_para_C(32) == 0

    def test_converte_deve_retornar_menos40_quando_receber_menos40(self):
        assert converte_F_para_C(-40) == -40

    def test_converte_deve_retornar_xxx_quando_receber_0(self):
        self.assertAlmostEqual(converte_F_para_C(0), -17.77, places=1)


class TesteConverteCParaF(TestCase):
    def test_converte_deve_retornar_menos40_quando_receber_menos40(self):
        self.assertEqual(converte_C_para_F(-40), -40)
