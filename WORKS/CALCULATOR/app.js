let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName('button'));
let operators = ['+', '-', '*', '/'];
let lastInput = '';

buttons.map(button => {
  button.addEventListener('click', (e) => {
    let buttonText = e.target.innerText;

    switch (buttonText) {
      case 'C':
        display.innerText = '0';
        break;

      case '←':
        if (display.innerText) {
          display.innerText = display.innerText.slice(0, -1);
        }
        break;

      case '=':
        try {
          display.innerText = eval(display.innerText);
        } catch {
          display.innerText = 'SYNTAX ERROR!';
        }
        break;

      case '.':
        if (!display.innerText.includes('.') && !lastInput.includes('.')) {
          display.innerText += buttonText;
        }
        break;

      default:
        if (
          (display.innerText === '0' && buttonText !== '0') ||
          (!operators.includes(buttonText) &&
            display.innerText === '0' &&
            buttonText === '0')
        ) {
          display.innerText = buttonText;
        } else {
          if (
            operators.includes(buttonText) &&
            operators.includes(lastInput) &&
            lastInput !== '-'
          ) {
            display.innerText = display.innerText.slice(0, -1) + buttonText;
          } else {
            display.innerText += buttonText;
          }
        }
    }

    lastInput = buttonText;
  });
});
