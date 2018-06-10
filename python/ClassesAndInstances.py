class Employee:
  def __init__(self, first, last, email):
    self.first = first
    self.last = last
    self.email = email
  pass

empl_1 = Employee('corey', 'taylor', 'shit@head.com')

print(empl_1.first)
