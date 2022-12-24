const textInput = document.getElementById("validation-input")
const maxSym = textInput.dataset.length



function checkLength() {
    if (this.selectionEnd >= maxSym)
        {this.classList.add("valid")
      if (this.classList.contains("invalid")) this.classList.remove("invalid")}
        
    else {this.classList.add("invalid")
        if (this.classList.contains("valid")) this.classList.remove("valid")}
}

textInput.addEventListener("blur", checkLength )
