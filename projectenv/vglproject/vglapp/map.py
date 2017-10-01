import numpy as np

class Map:
  def __init__(self, x, y):
    # map layout is xxy
    self.x = x
    self.y = y
    self.layout = [[[] for i in range(x)] for i in range(y)]
    

