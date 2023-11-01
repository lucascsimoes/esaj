const possibleYears = document.querySelectorAll("#calendar header h1")
const months = document.querySelectorAll("#calendar main > div")
const next = document.querySelector('#calendar .next');
const prev = document.querySelector('#calendar .prev');


window.onload = () => {
    const year = new Date().getFullYear()
    const elementYear = document.querySelector(`#calendar h1[data-year="${year}"]`);
    document.querySelector(`#calendar main > div[data-year="${year}"]`).classList.add("active")
    elementYear.classList.add("active");
    checkIfDisabled()
}

next.addEventListener("click", () => {
    const currentYear = document.querySelector("#calendar header h1.active").attributes[0].value
    resetYearDisplay()
    document.querySelector(`#calendar h1[data-year="${Number(currentYear) + 1}"]`).classList.add("active")
    document.querySelector(`#calendar main > div[data-year="${Number(currentYear) + 1}"]`).classList.add("active")
    checkIfDisabled()
})

prev.addEventListener("click", () => {
    const currentYear = document.querySelector("#calendar header h1.active").attributes[0].value
    resetYearDisplay()
    document.querySelector(`#calendar h1[data-year="${Number(currentYear) - 1}"]`).classList.add("active")
    document.querySelector(`#calendar main > div[data-year="${Number(currentYear) - 1}"]`).classList.add("active")
    checkIfDisabled()
})

function resetYearDisplay() {
    for (let index = 0; index < possibleYears.length; index++) {
        possibleYears[index].classList.remove("active");
        months[index].classList.remove("active");
    }
}

function checkIfDisabled() {
    const currentYear = document.querySelector("#calendar header h1.active").attributes[0].value
    
    if (currentYear == possibleYears[0].attributes[0].value) {
        next.setAttribute("disabled", "disabled")
    } else {
        next.removeAttribute("disabled")
    }
    
    if (currentYear == possibleYears[possibleYears.length - 1].attributes[0].value) {
        prev.setAttribute("disabled", "disabled")
    } else {
        prev.removeAttribute("disabled")
    }
}