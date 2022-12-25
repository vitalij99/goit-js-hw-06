function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createColor = document.querySelector(".change-color")


createColor.addEventListener("click", () => {
  document.body.style.backgroundColor = getRandomHexColor();
})