const moreDiv = document.querySelector(".more-div")
const lessDiv = document.querySelector(".less-div")

const moreP = document.querySelector(".more-p")
const lessP = document.querySelector(".less-p")

const moreI = document.querySelector(".more-i")
const lessI = document.querySelector(".less-i")

const textDisplayNone = document.querySelector(".text-display-none")

lessI.style.display = "none"
lessP.style.display = "none"
textDisplayNone.style.display = "none"

moreDiv.addEventListener('click', ()=>{
    textDisplayNone.style.display = "block"
    moreP.style.display = "none"
    lessP.style.display = "block"
    moreI.style.display = "none"
    lessI.style.display = "block"
})
lessDiv.addEventListener('click', ()=>{
    textDisplayNone.style.display = "none"
    moreP.style.display = "block"
    lessP.style.display = "none"
    moreI.style.display = "block"
    lessI.style.display = "none"
})