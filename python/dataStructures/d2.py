students = [
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Gerzson', 'age': 10, 'candies': 1},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Zsombor', 'age': 12, 'candies': 5}
]

# create a function that takes a list of students and prints:
# - Who has got more candies than 4 candies
def who_is_the_boss(students):
  the_boss = ''
  for boy in students:
    if(boy['candies'] >= 4):
      the_boss = boy['name']
  return the_boss

print(who_is_the_boss(students))

# create a function that takes a list of students and prints: 
#  - how many candies they have on average

def avarage(students):
  all_candies = 0
  avarage_number_of_candies = 0
  for boy in students:
    all_candies += boy['candies']
  avarage_number_of_candies = all_candies / len(students)
  return avarage_number_of_candies

print(avarage(students))