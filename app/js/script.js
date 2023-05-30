'use strict'

/**
 * Add event listiners
 */

const addEventListinersOnElements = function(elements, eventType, callback) {
    for( let i = 0; i < elements.length; i++ ) {
        elements[i].addEventListener(eventType, callback);
    }
}

/***
 * Navbar for mobile
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");


const toggleNav = function() {
    console.log('Click on the link')
    navbar.classList.toggle('active');
    overlay.classList.toggle('active');
}

addEventListinersOnElements(navTogglers, "click", toggleNav);


/**
 * Header active when scrolling
 */

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function(){
    this.window.scrollY > 100 ? 
        header.classList.add("active") :
        header.classList.remove("active");
});

/**
 * Scroll reveal effect
*/

const sections = document.querySelectorAll("[data-section]");

const reveal = () => {
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].getBoundingClientRect().top < window.innerHeight / 2) {
            sections[i].classList.add("active")
        }
    }
}

// reveal();
window.addEventListener('scroll', reveal)


// Accordion section
const accordionBtn = document.querySelectorAll('[data-accordion-btn]');
const accordion = document.querySelectorAll('[data-accordion]');

for (let i = 0; i < accordionBtn.length; i++) {

    accordionBtn[i].addEventListener('click', function() {

        const clickedBtn = this.nextElementSibling.classList.contains('active');

        for (let i = 0; i < accordion.length; i++) {

            if (clickedBtn) break;

            if(accordion[i].classList.contains('active')) {
                accordion[i].classList.remove('active')
                accordionBtn[i].classList.remove('active')
            }
        }

        this.nextElementSibling.classList.toggle('active');
        this.classList.toggle('active');
    })
}