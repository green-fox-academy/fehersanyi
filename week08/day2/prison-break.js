function prison(fugitive) {
  this.fugitive = 'Sanyi';
  let x = 0;
  return {
    visit() {
      if (fugitive !== undefined) {
        x++;
        console.log(`${fugitive} visited ${x} times`);
      } else {
        console.log('nobody is here anymore.');
      }
    },
    escape() {
      console.log(`BREAKING NEWS, ${fugitive} escaped from prison`);
      fugitive = undefined;
    }
  }
}

const alcatraz = prison('Sad Panda');

alcatraz.visit(); // Sad Panda is visited 1 time(s)
alcatraz.visit(); // Sad Panda is visited 2 time(s)
alcatraz.escape(); // BREAKING NEWS, Sad Panda escaped the prison
alcatraz.visit(); // Nobody is here anymore