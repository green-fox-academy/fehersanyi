# Create a function called 'create_new_verbs()' which takes a list of verbs and a string as parameters
# The string shouldf be a preverb
# The function appends every verb to the preverb and returns the list of the new verbs

verbs = ["megy", "ver", "kapcsol", "rak", "nez"]
preverb = "be"

def create_new_verbs(preverb, verbs):
  new_list = []
  for words in verbs:
    new_list.append(preverb + words)
  return new_list
print(create_new_verbs(preverb, verbs))
# The output should be: "bemegy", "bever", "bekapcsol", "berak", "benez"