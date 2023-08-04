from abc import ABCMeta, abstractmethod


class State(metaclass=ABCMeta):
    @abstractmethod
    def manipular(self):
        pass


class StateConcretaA(State):
    def manipular(self):
        print("StateConcretaA")


class StateConcretaB(State):
    def manipular(self):
        print("StateConcretaB")


class Context(State):
    def __init__(self):
        self.state = None

    def get_state(self):
        return self.state

    def set_state(self, state):
        self.state = state

    def manipular(self):
        self.state.manipular()


if __name__ == "__main__":
    contexto = Context()
    state_a = StateConcretaA()
    state_b = StateConcretaB()

    contexto.set_state(state_a)
    contexto.manipular()

    contexto.set_state(state_b)
    contexto.manipular()
