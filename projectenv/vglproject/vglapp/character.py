class Character:
    
  def __init__(self,level):
    # character is part of level
    self.level = level
    # position is 1x2 array [x,y]
    self.position = self.level.start
    # initial placement of character position
    self.level.map.layout[self.position[1]][self.position[0]] = "x"
    

   # different movements for the character  
  def moveRight(self):
    x = self.position[0] + 1
    y = self.position[1]
    self.setposition(x,y)

  def moveLeft(self):
    x = self.position[0] - 1
    y = self.position[1]
    self.setposition(x,y)

  def moveUp(self):
    x = self.position[0]
    y = self.position[1] - 1 # inverted due to the display of the array  
    self.setposition(x,y)

  def moveDown(self):
    x = self.position[0] 
    y = self.position[1] + 1 # inverted due to the display of the array  
    self.setposition(x,y)

  def checkmovement(self,position):
    if self.checkboundary(position):
      return 0
    x = self.position[0] + position[0]
    y = self.position[1] + position[1]
    return 0

  def checkblocked(self,position):
    # Checks to see if an object is in the position, if so return true, if not return false
    x = len(self.level.map.layout[0])
    y = len(self.level.map.layout)
  
    if (position[0] < x and position[1] < y):
      if self.level.map.layout[position[1]][position[0]] :
        return True
      else:
        return False
    else:
      return False

  def checkboundary(self,position):
    # if position is out of the boundary of the map return false, else return true
    if position[0] < 0 or position[1] < 0 or position[0] >self.level.map.y or position[1] >self.level.map.x:
      return False
    else:
      return True

  def setposition(self,x,y):
    # puts character into new position if it can, if not then error
    if self.checkboundary([x,y]) and not self.checkblocked([x,y]):
      self.level.map.layout[self.position[1]][self.position[0]] = []
      self.position = [x,y]
      self.level.map.layout[self.position[1]][self.position[0]] = "x"
    else:
      print("Error")

  def checkfinish(self):
    # checks to see if character reached the end goal
    if self.position == self.level.goal:
      self.level.finished = True
      print("Level completed")






