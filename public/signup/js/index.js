const username = document.querySelector('.username');
const password = document.querySelector('.password');
const confirmPassword = document.querySelector('.confirm-password');
const avatar = document.querySelector('.avatar');
const registerBtn = document.querySelector('.register');
const errorContainer = document.querySelector('.error');

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
  confirmPassword.addEventListener('input', () => {
    if (confirmPassword.value === password.value) {
      confirmPassword.classList.remove('not-valid');
      confirmPassword.classList.add('valid');
    } else {
      confirmPassword.classList.remove('valid');
      confirmPassword.classList.add('not-valid');
    }
  });
};
const validateSubmitInputs = (input, inputRegex) => {
  if (!inputRegex.test(input.value)) throw new Error(`${input.value} is not a valid`);
};

const printValidationError = (error) => {
  const errorMessage = document.querySelector('p');
  errorMessage.textContent = `${error.message}`;
  errorContainer.appendChild(errorMessage);
};

validateInputs(password, passwordRegex);
validateInputs(username, usernameRegex);
validateInputs(avatar, avatarRegex);
validateConfirmPassword();

if (usernameRegex.test(username.value)) {
  console.log('valid')
  username.classList.add('valid');
}

registerBtn.addEventListener('click', () => {
  try {
    validateSubmitInputs(username, usernameRegex);
    validateSubmitInputs(password, passwordRegex);
    validateSubmitInputs(avatar, avatarRegex);
  } catch (err) {
    console.log(object);
  }
  fetch('/api/v1/auth/signup', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
      avatar: avatar.value,
    }),
  }).then((data) => {
    if (data.status === 201) location.href = '/pages/signin';
    else throw new Error('User Name Already Exists');
  }).catch((err) => alert(err));
});
