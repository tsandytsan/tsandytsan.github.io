// Select the button
const btn = document.querySelector("#ui");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
    document.body.classList.add("dark")
}

// enable the parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

// enable the mobile side navigation
$(document).ready(function(){
  $('.sidenav').sidenav();
});

ScrollReveal().reveal('.d1', { delay: 80 })
ScrollReveal().reveal('.d2', { delay: 80 })
ScrollReveal().reveal('.d3', { delay: 80 })
ScrollReveal().reveal('.d4', { delay: 80 })

//enable icon zoom
// $(document).ready(function(){
//   $('.materialboxed').materialbox();
// });
