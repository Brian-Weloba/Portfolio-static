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