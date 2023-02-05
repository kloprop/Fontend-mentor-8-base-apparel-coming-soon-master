let inputGroup = document.querySelector(".input-group");
let button = document.querySelector("button");
let email = document.querySelector("#email");
let text = document.querySelector(".error-text");
let errorIcon = document.querySelector(".error-icon");
button.addEventListener("click", showError);

function showError(e) {
  if (email.validity.typeMismatch) {
    e.preventDefault();
    text.textContent = "Please provide a valid email!";
    errorIcon.classList.add("active");
    inputGroup.classList.add("active");
  }
  if (email.validity.valueMissing) {
    e.preventDefault();
    text.textContent = "Please enter an email!";
    errorIcon.classList.add("active");
    inputGroup.classList.add("active");
  }
}
email.addEventListener("focus", () => {
  errorIcon.classList.remove("active");
  inputGroup.classList.remove("active");
  text.textContent = "";
});
