// dom elements

const btnEl = document.querySelector(".btn");
const usernameEl = document.querySelector("#username-input");
const emailEl = document.querySelector("#email-input");
const passwordEl = document.querySelector("#password-input");
btnEl.addEventListener("click", function (e) {
  e.preventDefault();
  console.log("btn working");
});
