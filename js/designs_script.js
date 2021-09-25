// let mode_toggle = document.querySelector("#ui")
//
// mode_toggle.addEventListener("click",()=>{
//   if (document.body.classList.contains("dark")){
//     lightMode()
//   } else {
//     darkMode()
//   }
// })
//
// function darkMode(){
//   document.body.classList.add("dark")
//   var sunmoon = document.querySelector("#ui")
//   sunmoon.setAttribute("src","sun.svg")
// }
//
// function lightMode(){
//   document.body.classList.remove("dark")
//   var sunmoon = document.querySelector("#ui")
//   sunmoon.setAttribute("src","moon.svg")
// }
//

// enable the parallax
$(document).ready(function(){
  $('.parallax').parallax();
});

// enable the mobile side navigation
$(document).ready(function(){
  $('.sidenav').sidenav();
});

//
// document.addEventListener('DOMContentLoaded', function() {
//   var elems = document.querySelectorAll('.materialboxed');
//   var instances = M.Materialbox.init(elems, options);
// });

// Or with jQuery

$(document).ready(function(){
  $('.materialboxed').materialbox();
});
