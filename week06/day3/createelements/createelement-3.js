const kids = [{ "pet_name": "Wattled crane", "owner": "Bryant" },
{ "pet_name": "Devil, tasmanian", "owner": "Alejandro" },
{ "pet_name": "Mynah, common", "owner": "Nelie" },
{ "pet_name": "Dolphin, common", "owner": "Mariele" },
{ "pet_name": "Gray duiker", "owner": "Maddalena" },
{ "pet_name": "Crab (unidentified)", "owner": "Lucine" },
{ "pet_name": "Ant (unidentified)", "owner": "Lorianna" },
{ "pet_name": "Bison, american", "owner": "Tommie" },
{ "pet_name": "Yellow mongoose", "owner": "Vivyan" },
{ "pet_name": "Carpet snake", "owner": "Veda" },
{ "pet_name": "Lesser mouse lemur", "owner": "Isidor" }];
let main = document.querySelector('#pets');
console.log(main);
for (let i = 0; i < kids.length; i++) {
  let element = document.createElement('article');
  let heads = document.createElement('h3');
  heads.textContent = kids[i].owner;
  let pets = document.createElement('p');
  pets.textContent = kids[i].pet_name;
  element.appendChild(heads);
  element.appendChild(pets);
  main.appendChild(element);
}
