'use strict';

/*
 add event listener on multiple elements
*/

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/*
Send Email
*/

function Mail() {

    const name = document.getElementById('Name').value
    const email = document.getElementById('Email').value
    const msg = document.getElementById('Message').value
    const subject = document.getElementById('Subject').value
    if (!name.length > 0 || !email.length > 0 || !msg.length > 0 || !subject.length > 0) {
        alert("Please fill all the fields")
        return
    }
    Email.send({
        SecureToken :"1d78991f-8dc2-4a9c-ab32-6804ee75afb0",
        To: "keithwesley187@gmail.com",
        From: email,
        Subject: subject,
        Body: msg + "<br>" + name
    }).then(msg => alert("Email was sent successfully!"))
}


/*
 NAVBAR TOGGLE FOR MOBILE
*/

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNavbar);

/*
HEADER
active header when window scroll down to 100px
*/

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
  if (window.scrollY > 100) {
    header.classList.add("active");
  } else {
    header.classList.remove("active");
  }
});

/*
SCROLL REVEAL
*/

const revealElements = document.querySelectorAll("[data-reveal]");
const revealDelayElements = document.querySelectorAll("[data-reveal-delay]");

const reveal = function () {
  for (let i = 0, len = revealElements.length; i < len; i++) {
    if (revealElements[i].getBoundingClientRect().top < window.innerHeight / 1.2) {
      revealElements[i].classList.add("revealed");
    }
  }
}

for (let i = 0, len = revealDelayElements.length; i < len; i++) {
  revealDelayElements[i].style.transitionDelay = revealDelayElements[i].dataset.revealDelay;
}

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);