const clockContainer = document.querySelector(".js-clock"),
  clockTitle = clockContainer.querySelector("h1");

function getTime() {
  const date = new Date(),
    hours = date.getHours(),
    minutes = date.getMinutes(),
    seconds = date.getSeconds();
  clockTitle.innerText = `${hours}:${minutes}:${seconds}`;
}

function init() {
  getTime();
}

init();
