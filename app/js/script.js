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