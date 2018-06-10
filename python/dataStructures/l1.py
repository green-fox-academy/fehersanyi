# Saturn is missing from the planet_list
# Insert it into the correct position

planet_list = ["Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune"]
# Expected output: "Mercury", "Venus", "Earth", "Mars", "Jupiter", "Uranus", "Neptune", "Saturn"

def put_saturn(list):
  list[6] = 'Saturn'
  return list



print(put_saturn(planet_list))