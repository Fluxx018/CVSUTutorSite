const contains = document.querySelectorAll(".contains");

contains.forEach(container => {
    container.addEventListener("click", () => {
        contains.forEach(cont => cont.classList.remove("selected"))
        container.classList.add("selected")
    })
})