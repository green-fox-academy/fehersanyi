# Write function that joins the two lists by matching one girl with one boy in a new list
# Exepected output: ["Eve", "Joe", "Ashley", "Fred"...]

girls = ['Eve', 'Ashley', 'Bozsi', 'Kat', 'Jane']
boys = ["Joe", "Fred", "Bela", "Todd", "Neef", "Jeff"]

def make_matches(girls, boys):
  new_list = []
  rounds = 0
  while (rounds < len(girls)):
    new_list.append(girls[rounds])
    new_list.append(boys[rounds])
    rounds += 1
  return new_list

print(make_matches(girls, boys))