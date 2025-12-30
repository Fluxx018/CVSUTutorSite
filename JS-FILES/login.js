const login = true
const btn = document.getElementById("btn")
const signUpFooter = document.getElementById("signUpFooter")

if (login) {
    btn.innerHTML = "Profile"
} else {
    btn.innerHTML = "Sign In"
}

btn.addEventListener("click", () => {
    if(login) {
        window.location.href = "../HTML-FILES/profile.html"
    } else {
        window.location.href = "../HTML-FILES/signIn.html"
    }
})


document.getElementById("subscribe").addEventListener("click", () => {
    const emailSubscription = document.getElementById("emailSubscription")

    if (emailSubscription.value.trim() !== "" && emailSubscription.value.includes("@gmail.com")) {
        alert("Thank you for subscribing!")
        emailSubscription.value = ""
    } else {
        alert("Please type your email!")
    }
})

if (login) {
    signUpFooter.addEventListener("click", (e) => {
        e.preventDefault()
    })
}