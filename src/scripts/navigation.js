const menuIcon = document.querySelector("#menu")
const closeIcon = document.querySelector("#close")
const backdrop = document.querySelector("#backdrop")
const nav = document.querySelector(".nav")
const navElements = document.querySelectorAll(".nav__element")

const deviceBreakpoint = 768

if(window.innerWidth < deviceBreakpoint) {
    nav.classList.add("hidden")
}

navElements.forEach(el => {
    el.addEventListener("click", () => {
        changeIcon()
        closeNav()
        document.body.style.overflow = "auto"
    })
})

menuIcon.addEventListener("click", () => {
    changeIcon()
    openNav()
    document.body.style.overflow = "hidden"
})

closeIcon.addEventListener("click", () => {
    changeIcon()
    closeNav()
    document.body.style.overflow = "auto"
})

const changeIcon = () => {
    menuIcon.classList.toggle("hidden")
    closeIcon.classList.toggle("hidden")
}

const openNav = () => {
    backdrop.classList.remove("hidden")
    nav.classList.remove("hidden")
}

const closeNav = () => {
    backdrop.classList.add("hidden")
    nav.classList.add("hidden")
}