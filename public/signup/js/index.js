const username = document.querySelector('.username-input');
const password = document.querySelector('.password-input');
const confirmPassword = document.querySelector('.confirm-password-input');
const avatar = document.querySelector('.avatar-input');

const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
const usernameRegex = /^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
const avatarRegex = /(https?:\/\/.*\.(?:png|jpg))/i;

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

const validateConfirmPassword = () => {
  confirmPassword.addEventListener('input', ()=> {
    if (confirmPassword.value === password.value) {
      confirmPassword.classList.remove('not-valid');
      confirmPassword.classList.add('valid');
    } else {
      confirmPassword.classList.remove('valid');
      confirmPassword.classList.add('not-valid');
    }
  });
};

validateInputs(password, passwordRegex);
validateInputs(username, usernameRegex);
validateInputs(avatar, avatarRegex);
validateConfirmPassword();

if (usernameRegex.test(username.value)) {
  console.log('valid')
  username.classList.add('valid');
}
