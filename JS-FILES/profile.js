const btnEdit = document.getElementById("btnEdit")
const addProf = document.getElementById("addProf")
const fileSelect = document.getElementById("fileSelect")
const pic = document.getElementById("pic")
const removeProf = document.getElementById("removeProf")
btnEdit.addEventListener("click", () => {
    const main = document.getElementById("main")
    const inputs = main.querySelectorAll("input:not(#role)")
    
    if (btnEdit.textContent == " Change Information"){
        inputs.forEach(input => {
            input.disabled = false
            input.classList.add("global-inputLight")
        })
        btnEdit.innerHTML = `<i class="fa-solid fa-pencil" style="color: #ffffff;"></i> Save`
    } else {
        inputs.forEach(input => {
            input.disabled = true
            input.classList.remove("global-inputLight")
        })
        btnEdit.innerHTML = `<i class="fa-solid fa-pencil" style="color: #ffffff;"></i> Change Information`
    }

})

addProf.addEventListener("click", () => {
    fileSelect.click();
});

fileSelect.addEventListener("change", (event) => {
    const profile = event.target.files[0];
    if (!profile) return;

    const profileUrl = URL.createObjectURL(profile)

    pic.style.backgroundImage = `url(${profileUrl})`
});

removeProf.addEventListener("click", () => {
    pic.style.backgroundImage = `url(/images/profile.png)`
})