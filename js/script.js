// const navSlide = () => {
//     const burger = document.querySelector('.burger');
//     const nav = document.querySelector('.nav-links');
//     const navLinks = document.querySelectorAll('.nav-links li');

//     //Toggle nav
//     burger.addEventListener('click', () => {
//         nav.classList.toggle('nav-active');

//         //Animate links
//         navLinks.forEach((link, index) => {
//             if (link.style.animation) {
//                 link.style.animation = '';
//             } else {
//                 link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + 0.4}s`;
//             }
//         });

//         //burger animation
//         burger.classList.toggle('toggle');
//     });
// }

// navSlide();

// $(document).ready(function () {
//     $(window).scroll(function () {
//         if ($(window).scrollTop() > $(window).height() - 70) {
//             $("nav, .nav-active").css({ "background-color": "#932432" });
//             $(".nav-links a, .logo").css({ "color": "#f3f3f3" })
//         } else if ($(window).scrollTop() > ($(window).height() * 2) - 70) {
//             $("nav, .nav-active").css({ "background-color": "#283747" });
//             $(".nav-links a, .logo").css({ "color": "#f3f3f3" })
//         } else if ($(window).scrollTop() < $(window).height() - 70) {
//             $("nav, .nav-active").css({ "background-color": "#f3f3f3" });
//             $(".nav-links a, .logo").css({ "color": "#932432" })
//         } else {
//             $("nav, .nav-active").css({ "background-color": "#f3f3f3" });
//             $(".nav-links a, .logo").css({ "color": "#932432" })
//         }

//     })
// })

// When the user scrolls the page, execute progressBar
window.onscroll = function() { progressBar() };

function progressBar() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    document.getElementById("myBar").style.width = scrolled + "%";
}


const card = document.querySelector(".inner");
const container = document.querySelector("#container");

//items 
const card2 = document.querySelector(".card2");
const circle = document.querySelector(".circle");
const card1 = document.querySelector(".card1");
const name2 = document.querySelector(".name2");
const name21 = document.querySelector("#name2");
const name1 = document.querySelector(".name1");
// const location = document.querySelector(".location");

//moving animation
container.addEventListener('mousemove', (e) => {
    // console.log(e.pageX);
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;
    // console.log(xAxis, yAxis);
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});
//ani out
container.addEventListener('mouseenter', (e) => {
        card.style.transition = "none";
        //popout
        card2.style.transform = "translateZ(10px) rotate(30deg)";
        name1.style.transform = "translateZ(200px)";
        name2.style.transform = "translateZ(125px)";
        name21.style.transform = "translateZ(125px)";
        circle.style.transform = "translateZ(100px) translate(-5vw, -10vh)";
    })
    //ani in
container.addEventListener('mouseleave', (e) => {
    card.style.transition = "all 0.8s ease"
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //popback
    card2.style.transform = "translateZ(0px) rotate(0deg)";
    name1.style.transform = "translateZ(0px)";
    name2.style.transform = "translateZ(0px)";
    name21.style.transform = "translateZ(0px)";
    circle.style.transform = "translateZ(0px)";
});