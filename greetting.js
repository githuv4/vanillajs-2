const form = document.querySelector(".js-form"),
  input = form.querySelector("input"),
  greetting = document.querySelector(".js-greetting");

const USER_LS = "currentUser",
  SHOWING_CN = "showing";

function paintingGreetting(text) {
  form.classList.remove(SHOWING_CN);
  greetting.classList.add(SHOWING_CN);
  greetting.innerText = `Hello, ${text}`;
}

function loadName() {
  const currentUser = localStorage.getItem(USER_LS);
  if (currentUser === null) {
  } else {
    paintingGreetting(currentUser);
  }
}

function init() {
  loadName();
}

init();
