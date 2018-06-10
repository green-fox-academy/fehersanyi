students = [
        {'name': 'Teodor', 'age': 3, 'candies': 2},
        {'name': 'Rezso', 'age': 9.5, 'candies': 2},
        {'name': 'Zsombor', 'age': 12, 'candies': 5},
        {'name': 'Aurel', 'age': 7, 'candies': 3},
        {'name': 'Olaf', 'age': 12, 'candies': 7},
        {'name': 'Gerzson', 'age': 10, 'candies': 1}
]

# create a function that takes a list of students and prints: 
# - how many candies are owned by students
def number_of_candies(dictionary):
  allOfEm = 0
  for boyas in dictionary:
    allOfEm += boyas['candies']
  return allOfEm

print(number_of_candies(students))
# create a function that takes a list of students and prints:
# - Sum of the age of people who have lass than 5 candies

def sum_dem_ages(dictionary):
  ages = 0
  for kids in dictionary:
    if (kids['candies'] < 5):
      ages += kids['age']
  return ages

print(sum_dem_ages(students))