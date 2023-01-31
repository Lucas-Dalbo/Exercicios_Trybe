class MainMemory:
    def __init__(self):
      self.clean()
      self.loaded_memory = []


    def load(self, value):
        self.loaded_memory.append(value)


    def get(self, index):
        try:
            value = self.loaded_memory[index]
            return int(value)
        except IndexError:
            return 0


    def clean(self):
        self.loaded_memory = []
