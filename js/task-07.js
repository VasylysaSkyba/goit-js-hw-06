const rangeInput = document.querySelector("#font-size-control");
const spanText = document.querySelector("span#text");
rangeInput.addEventListener("input", onInputRange);
function onInputRange(event) {
  spanText.style.fontSize = `${event.currentTarget.value}px`;
}
