// Select the button
const btn = document.querySelector("#ui");
// Select the theme preference from localStorage
const currentTheme = localStorage.getItem("theme");

// If the current theme in localStorage is "dark"...
if (currentTheme == "dark") {
  // ...then use the .dark-theme class
    document.body.classList.add("dark");
    document.getElementById("navID").classList.add("navdarkCSS");
    var sunmoon = document.querySelector("#ui");
    sunmoon.setAttribute("src","sun.svg");
}

// Listen for a click on the button
btn.addEventListener("click", function() {
  // Toggle the .dark-theme class on each click
  document.body.classList.toggle("dark");
  document.getElementById("navID").classList.toggle("navdarkCSS");

  // Let's say the theme is equal to light
  let theme = "light";
  // If the body contains the .dark-theme class...
  if (document.body.classList.contains("dark")) {
    // ...then let's make the theme dark
    theme = "dark";
  }
  // Then save the choice in localStorage
  localStorage.setItem("theme", theme);
});

ScrollReveal().reveal('.typing_div');
ScrollReveal().reveal('.full_name', { delay: 500 });
ScrollReveal().reveal('.splash_about_box', { delay: 1000 });

ScrollReveal().reveal('.yes00', { delay: 80 });
ScrollReveal().reveal('.yes01', { delay: 80 });

ScrollReveal().reveal('.yes10', { delay: 80 });
ScrollReveal().reveal('.yes11', { delay: 80 });
ScrollReveal().reveal('.yes12', { delay: 80 });
ScrollReveal().reveal('.yes13', { delay: 80 });

ScrollReveal().reveal('.yes20', { delay: 80 });
ScrollReveal().reveal('.yes21', { delay: 80 });
ScrollReveal().reveal('.yes22', { delay: 80 });
ScrollReveal().reveal('.yes23', { delay: 80 });
ScrollReveal().reveal('.yes24', { delay: 80 });
ScrollReveal().reveal('.yes25', { delay: 80 });
ScrollReveal().reveal('.yes26', { delay: 80 });

// enable the mobile side navigation
$(document).ready(function(){
  $('.sidenav').sidenav();
});
