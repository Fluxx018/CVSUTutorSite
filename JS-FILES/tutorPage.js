const typesSubj = document.querySelectorAll(".type")
const typeTotalPrice = document.getElementById("typeTotalPrice")
const subjects = document.querySelectorAll(".subject")
const subjTotalPrice = document.getElementById("subjTotalPrice")
const totalSubj = document.getElementById("subjectss")
const subTotalPrice = document.getElementById("subTotalPrice")
const totalAmount = document.getElementById("totalAmount")
let partialSubjPrice = 0
let partialTypePrice = 0
let holderSubTotal = partialSubjPrice + partialTypePrice
const bringbackAldub = 400
let voucher = 0
let totalAmountPrice = 0

typesSubj.forEach(typeSubj => {
    typeSubj.addEventListener("click", () => {
        const typPrice = typeSubj.querySelector(".typePrice")
        const typName = typeSubj.querySelector(".typeName").innerText
        const typeprice = parseInt(typPrice.textContent.slice(1))
        const typeStyle = document.getElementById("typeStyle")

        typesSubj.forEach(subj => subj.classList.remove("selected"))
        typeSubj.classList.add("selected")

        typeStyle.textContent = typName
        partialTypePrice = typeprice
        typeTotalPrice.textContent = `₱${partialTypePrice}`    
        holderSubTotal = partialSubjPrice + partialTypePrice
        subTotalPrice.textContent = `₱${holderSubTotal}`
        totalAmountPrice = holderSubTotal - voucher
        totalAmount.textContent = `₱${totalAmountPrice}`
    })
});

subjects.forEach(subject => {
    subject.addEventListener("click", () => {
        const coursePrice = subject.querySelector(".coursePrice")
        const courseName = subject.querySelector(".courseName")
        const subjprice = parseInt(coursePrice.textContent.slice(1))

        subject.classList.toggle("selected")

        if (subject.classList.contains("selected")){
            const subj1 = document.createElement("div")
            subj1.classList.add("subj1")
            subj1.innerHTML = `                                
                                <h1>${courseName.textContent}</h1>
                                <h2>${coursePrice.textContent}/Course</h2>
                                `

            totalSubj.appendChild(subj1)
            partialSubjPrice += subjprice
        } else {
            const items = totalSubj.querySelectorAll(".subj1");
            items.forEach(item => {
                if (item.textContent.includes(courseName.textContent)) {
                    item.remove();
                    partialSubjPrice -= subjprice
                }
            });
        }
        subjTotalPrice.textContent = `₱${partialSubjPrice}`;
        holderSubTotal = partialSubjPrice + partialTypePrice
        subTotalPrice.textContent = `₱${holderSubTotal}`
        totalAmountPrice = holderSubTotal - voucher
        totalAmount.textContent = `₱${totalAmountPrice}`
    })
});

document.getElementById("btnApply").addEventListener("click", () => {
    const codeText = document.getElementById("codeText")
    const voucherPrice = document.getElementById("voucherPrice")
    if (codeText.value.trim() == "bringbackAldub") {
        voucherPrice.textContent = `₱${bringbackAldub}`
        voucher = bringbackAldub 
        totalAmountPrice = holderSubTotal - voucher
        totalAmount.textContent = `₱${totalAmountPrice}`
    }
})