const input = document.getElementById("font-size-control")
const text = document.getElementById("text")

const getTextSize = (e) => {    
    text.style.fontSize = e.target.value + 'px'; }

input.addEventListener("input", getTextSize)