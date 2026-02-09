// dom elements

const btnEl = document.querySelector(".btn");
const formEl = document.querySelector("#contact-form");
const usernameEl = document.querySelector("#username-input");
const emailEl = document.querySelector("#email-input");
const passwordEl = document.querySelector("#password-input");

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

  // Check if an error is present
  let hasError = false;

  if (username === "") {
    alert("username cannot be empty");
    hasError = true;
  } else if (!usernamePattern.test(username)) {
    alert("username doesnt match regex");
    hasError = true;
  }

  if (email === "") {
    alert("email cannot be empty");
    hasError = true;
  } else if (!emailPattern.test(email)) {
    alert("email doesnt match regex");
    hasError = true;
  }

  if (password === "") {
    alert("password cannot be empty");
    hasError = true;
  } else if (!passwordRegex.test(password)) {
    alert("password doesnt match regex");
    hasError = true;
  }

  //submit form if everything is good
  if (!hasError) {
    alert("form submitted correctly");
  }
}
