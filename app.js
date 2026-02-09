// dom elements

const btnEl = document.querySelector(".btn");
const formEl = document.querySelector("#contact-form");
const usernameEl = document.querySelector("#username-input");
const emailEl = document.querySelector("#email-input");
const passwordEl = document.querySelector("#password-input");

// Regular Expression (Regex)
const usernamePattern = /[^a-zA-Z0-9]+$/;
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

  // Check if an error is present
  let hasError = false;

  if (username === "") {
    alert("username cannot be empty");
    hasError = true;
  }

  if (email === "") {
    alert("email cannot be empty");
    hasError = true;
  }

  if (password === "") {
    alert("password cannot be empty");
    hasError = true;
  }
}
