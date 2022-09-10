const username = document.querySelector('.username');
const password = document.querySelector('.password');
const signin = document.querySelector('.signin');

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

const validateSubmitInputs = (input, inputRegex) => {
  if (!inputRegex.test(input.value)) throw new Error(`${input.value} is not a valid`);
};

validateInputs(username, usernameRegex);
validateInputs(password, passwordRegex);

signin.addEventListener('click', () => {
  try {
    validateSubmitInputs(username, usernameRegex);
    validateSubmitInputs(password, passwordRegex);
  } catch (err) {
    console.log(err);
  }
  fetch('/api/v1/auth/signin', {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      username: username.value,
      password: password.value,
    }),
  }).then((data) => {
    console.log(data);
    if (data.status === 200) location.href = `/pages/profile/${username.value}`;
    else throw new Error('Wrong Credintials');
  }).catch((err) => alert(err));
});
