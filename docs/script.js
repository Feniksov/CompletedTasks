const form = document.querySelector('form');
const submitButton = document.querySelector('input[type="submit"]');
const usernameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

function toggleSubmitButton() {
  if (usernameInput.value.trim().length > 0 && passwordInput.value.trim().length > 0) {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

usernameInput.addEventListener('input', toggleSubmitButton);
passwordInput.addEventListener('input', toggleSubmitButton);