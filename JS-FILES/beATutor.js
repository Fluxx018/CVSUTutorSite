const right = document.getElementById("right")
const subjCont = document.getElementById("subjCont")
const subjPrice = document.getElementById("subjPrice")
const subjName = document.getElementById("subjName")
const srvcName = document.getElementById("srvcName")
const bsnEmail = document.getElementById("bsnEmail")
const srvNum = document.getElementById("srvNum")
const bio = document.getElementById("bio")

document.getElementById("addSubj").addEventListener("click", () => {
    if (subjName.value.trim() !== "" && subjPrice.value.trim() !== "") {
        const subj1 = document.createElement("div")
        subj1.classList.add("subj1")
        subj1.classList.add("global-container1")
        subj1.innerHTML = `                            
            <h1 class="subjName open-sans-font">${subjName.value}</h1>
            <h1 class="subjPrice open-sans-font">₱${subjPrice.value}</h1>
            <button class="global-button"><i class="fa-solid fa-x" style="color: #ff0000;"></i></button>
            `
        subjCont.appendChild(subj1)
        subjName.value= ""
        subjPrice.value = ""

        const deleteBtn = subj1.querySelector("button")
        deleteBtn.addEventListener("click", () => {
            subj1.remove()
        })
    } else {
        alert("Please fill out the all the forms")
    } 
})

document.getElementById("addService").addEventListener("click", () => {
    if (srvcName.value.trim() !== "" &&
        bsnEmail.value.trim() !== "" &&
        srvNum.value.trim() !== "" &&
        bio.value.trim() !== "") {

            alert("Tutor Application Sent")
            subjPrice.value = ""
            subjName.value = ""
            srvcName.value = ""
            bsnEmail.value = ""
            subjPrice.value = ""
            srvNum.value = ""
            bio.value = ""

            subjCont.querySelectorAll(".subj1").forEach(sub => sub.remove())

    } else {
        alert("Please fill out the all the forms")
    }

})