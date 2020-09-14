const { body } = document;
let count = 0
const ourMemory = {
    [count]: Array(1000).fill('*')
}
function changeBackground(number) {
    count ++
    ourMemory[count] = Array(1000).fill('*')
  // Check if background already showing
  let previousBackground;
  if (body.className) {
    previousBackground = body.className;
  }
  // Reset background
  body.className = '';
  // If background already on, turn off, else turn on background
  switch (number) {
    case '1':
      return (previousBackground === 'background-1' ? false : body.classList.add('background-1'));
    case '2':
      return (previousBackground === 'background-2' ? false : body.classList.add('background-2'));
    case '3':
      return (previousBackground === 'background-3' ? false : body.classList.add('background-3'));
    case '4':
      return (previousBackground === 'background-4' ? false : body.classList.add('background-4'));
    default:
      break;
  }
}
