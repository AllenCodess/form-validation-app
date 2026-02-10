// dom elements

const btnEl = document.querySelector(".btn");
const formEl = document.querySelector("#contact-form");
const usernameEl = document.querySelector("#username-input");
const emailEl = document.querySelector("#email-input");
const passwordEl = document.querySelector("#password-input");

// error messages divs
const usernameErrorEl = document.querySelector("#username-error");
const emailErrorEl = document.querySelector("#email-error");
const passwordErrorEl = document.querySelector("#password-error");

// Regular Expression (Regex)
const usernamePattern = /^[a-zA-Z0-9]{3,15}$/;
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^.{8,}$/; // makes sure pw is atleast 8 characters long

// Event Listeners
formEl.addEventListener("submit", validateForm);

//functions
function validateForm(e) {
  e.preventDefault();

  // ignore white spaces
  const username = usernameEl.value.trim();
  const email = emailEl.value.trim();
  const password = passwordEl.value.trim();

  // clears errors after successful submit
  clearError(usernameEl, usernameErrorEl);
  clearError(emailEl, emailErrorEl);
  clearError(passwordEl, passwordErrorEl);
  // Check if an error is present
  let hasError = false;

  if (username === "") {
    addError(usernameEl, usernameErrorEl, "Username is required");
    hasError = true;
  } else if (!usernamePattern.test(username)) {
    addError(usernameEl, usernameErrorEl, "Username must be 3-15 characters long");
    hasError = true;
  }

  if (email === "") {
    addError(emailEl, emailErrorEl, "Email is required");
    hasError = true;
  } else if (!emailPattern.test(email)) {
    addError(emailEl, emailErrorEl, "Email must contain @ and domain name");
    hasError = true;
  }

  if (password === "") {
    addError(passwordEl, passwordErrorEl, "Password is required");
    hasError = true;
  } else if (!passwordRegex.test(password)) {
    addError(passwordEl, passwordErrorEl, "Password must be atleast 8 characters.");
    hasError = true;
  }

  //submit form if everything is good
  if (!hasError) {
    alert("form submitted correctly");
  }
}

function addError(input, errorElement, message) {
  input.classList.add("error-border");
  errorElement.classList.add("error-message");
  errorElement.textContent = message;
}

function clearError(input, errorElement) {
  input.classList.remove("error-border");
  errorElement.textContent = "";
}
