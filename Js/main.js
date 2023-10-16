// ------------------ Ocultar/Mostrar NavBar ------------------
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))

if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

// ------------------ Ocultar/Mostrar Skills Set ------------------

const skillsBox = document.getElementsByClassName('skills__box')
const skillsHeader = document.querySelectorAll('.skills__header')

function toggleSkills() {
    let itemClass = this.parentNode.className

    for (i = 0; i < skillsBox.length; i++) {
        skillsBox[i].className = 'skills__box skills__close'
    }
    if (itemClass === 'skills__box skills__close') {
        this.parentNode.className = 'skills__box skills__open'
    }
}

skillsHeader.forEach((e) => {
    e.addEventListener('click', toggleSkills)
})

// ------------------ Swiper ------------------

let swiper = new Swiper(".projects__wrapper", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});