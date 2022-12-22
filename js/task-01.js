const categories = document.querySelectorAll(".item")
console.log("Number of categories:", categories.length)


categories.forEach(e => {
    console.log("Category: " + e.querySelector("h2").textContent)
    console.log("Elements: " + e.querySelectorAll("li").length)   
});



