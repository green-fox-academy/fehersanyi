function postMaster(poBox, dispatchFunction) {
  return (targetBox, message) => {
    if (targetBox === poBox) {
        dispatchFunction(message);
    }
  }
}

function myAction( message ) {
  console.log('The message says:', message);
}


// Create a private box with a poBox identifier
const myPrivateBox = postMaster('false_alarm', myAction);

myPrivateBox('super_secret_box', 'The eagle has landed!'); // logs the message
myPrivateBox('false_alarm', 'The eagle has landed! Heeeeloooooo!'); // nothing is logged
