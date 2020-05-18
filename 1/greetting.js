const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetting = document.querySelector(".js-greetting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function saveName(text) {
  localStorage.setItem(USER_LS, text);
}

function handleSubmit(e) {
  event.preventDefault();
  const currentValue = input.value;
  paintingGreetting(currentValue);
  saveName(currentValue);
}

function askForName() {
  form.classList.add(SHOWING_CN);
  form.addEventListener("submit", handleSubmit);
}

function paintingGreetting(text) {
  form.classList.remove(SHOWING_CN);
  greetting.classList.add(SHOWING_CN);
  greetting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
    askForName();
  } else {
    paintingGreetting(currentUser);
  }
}

function init() {
  loadName();
}

init();
