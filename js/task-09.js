function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const changeColorBtn = document.querySelector(".change-color");
const spanColorValue = document.querySelector("span.color");
changeColorBtn.addEventListener("click", onChangeColorButtonClick);
function onChangeColorButtonClick(event) {
  let color = getRandomHexColor();
  body.style.backgroundColor = color;
  spanColorValue.textContent = color;
}
