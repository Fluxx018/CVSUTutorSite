const contains = document.querySelectorAll(".contains");
const subjectSection = document.getElementById("subjectSection")

contains.forEach(container => {
    container.addEventListener("click", () => {
        contains.forEach(cont => cont.classList.remove("selected"))
        container.classList.add("selected")

        const id = container.id
        subjectSection.querySelectorAll(".subj").forEach(sub => {
            if (id === "all" || sub.classList.contains(id)){
                sub.style.display = "block"
            } else {
                sub.style.display = "none"
            }
        })
    })
})
