class Level:
    
  def __init__(self, map, startarray, endarray):
    self.start = startarray
    # start position at [x,y]
    self.goal = endarray
    # end position at [x,y]
    self.map = map
    # map used
    self.finished = False
    

