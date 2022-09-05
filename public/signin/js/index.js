const username = document.querySelector('.username-input');
const password = document.querySelector('.password-input');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;

const validateInputs = (input, inputRegex) => {
  input.addEventListener('input', () => {
    if (inputRegex.test(input.value)) {
      input.classList.remove('not-valid');
      input.classList.add('valid');
    } else {
      input.classList.remove('valid');
      input.classList.add('not-valid');
    }
  });
};
validateInputs(username, usernameRegex);
validateInputs(password, passwordRegex);
