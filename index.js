const navLinks = document.querySelector(".nav_links");
const myMenuBar = document.querySelector("#nav_toggle-open");
const myCloseBar = document.querySelector("#nav_toggle-close");
const helloME = document.querySelector(".honme");
const bodys = document.querySelector("body");



myMenuBar.onclick = function () {
    navLinks.style.transform = "translateY(0)";
    myMenuBar.style.display = "none";
    myCloseBar.style.display = "block";

}

myCloseBar.onclick = function () {
    navLinks.style.transform = "translateY(-160%)";
    myMenuBar.style.display = "block";
    myCloseBar.style.display = "none";

}

// bodys.onscroll = function () {
//     navLinks.style.transform = "translateY(-160%)";
//     myMenuBar.style.display = "block";
//     myCloseBar.style.display = "none";

// }
// helloME.onclick = function (){
//     navLinks.style.transform ="translateX(110%)";

// }
// bodys.onscroll = function (){
//     navLinks.style.transform ="translateX(110%)";
//     myMenuBar.style.display = "block";
//     myCloseBar.style.display = "none";

// }



//SCROLL REVEAL

ScrollReveal({
    reset: true,
    distance: '60px',
    duration: 2500,
    delay: 400
});
ScrollReveal().reveal('.mine2', { delay: 500, origin: 'left', distance: '70%' });
ScrollReveal().reveal('.deimg', { delay: 500, origin: 'bottom', distance: '70%' });
ScrollReveal().reveal('.zazu', { delay: 500, origin: 'left', distance: '70%' });
ScrollReveal().reveal('.desimg', { delay: 500, origin: 'right', distance: '70%' });
ScrollReveal().reveal('.dotman', { delay: 500, origin: 'bottom', distance: '70%' });
ScrollReveal().reveal('.prog2', { delay: 500, origin: 'right', distance: '70%' });
ScrollReveal().reveal('.dongs', { delay: 500, origin: 'bottom', distance: '70%' });
ScrollReveal().reveal('.klop1', { delay: 500, origin: 'left', distance: '70%' });
ScrollReveal().reveal('.klop2', { delay: 500, origin: 'top', distance: '70%' });
ScrollReveal().reveal('.klop3', { delay: 500, origin: 'right', distance: '70%' });
ScrollReveal().reveal('.klop4', { delay: 500, origin: 'top', distance: '70%' });
ScrollReveal().reveal('.klop5', { delay: 500, origin: 'bottom', distance: '70%' });
ScrollReveal().reveal('.klop6', { delay: 500, origin: 'top', distance: '70%' });
ScrollReveal().reveal('.dedesi', { delay: 500, origin: 'left', distance: '50%' });
ScrollReveal().reveal('.prok', { delay: 500, origin: 'right', distance: '50%' });
ScrollReveal().reveal('.proj2', { delay: 500, origin: 'left', distance: '50%' });







