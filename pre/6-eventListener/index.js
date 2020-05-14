const title = document.getElementById("title");
const body = document.querySelector("body");

function handleResize() {
  body.style.backgroundColor = "skyblue";
  console.log("resize");
}

function handleClick() {
  title.style.color = "red";
}

window.addEventListener("resize", handleResize);
title.addEventListener("click", handleClick);
