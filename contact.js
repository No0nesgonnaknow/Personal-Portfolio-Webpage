// Regular expressions for validation
const patterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
  };

  // validation function
  function validate(field, regex) {
    field.classList.remove('valid-input', 'invalid-input'); // Remove existing classes first
    if (regex.test(field.value)) {
      field.classList.add('valid-input');
    } else {
      field.classList.add('invalid-input');
    }
  }

  // attach keyup events to inputs
  const inputs = document.querySelectorAll('input');
  inputs.forEach((input) => {
    input.addEventListener('keyup', (e) => {
      validate(e.target, patterns[e.target.name]);
    });
  });