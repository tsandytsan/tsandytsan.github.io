// var numOfClicks = 0;
//
// function showToast(){
//   numOfClicks = numOfClicks + 1;
//   if (numOfClicks == 1){
//     M.toast({'One cookie for you!'});
//   }
//   else {
//     M.toast({ numOfClicks + ' cookies for you!'});
//   }
// }


let mode_toggle = document.querySelector("#ui")

mode_toggle.addEventListener("click",()=>{
  if (document.body.classList.contains("dark")){
    lightMode()
  } else {
    darkMode()
  }
})

function darkMode(){
  document.body.classList.add("dark")
  var sunmoon = document.querySelector("#ui")
  sunmoon.setAttribute("src","sun.svg")
}

function lightMode(){
  document.body.classList.remove("dark")
  var sunmoon = document.querySelector("#ui")
  sunmoon.setAttribute("src","moon.svg")
}

ScrollReveal().reveal('.typing_div')
ScrollReveal().reveal('.full_name', { delay: 1000 })
ScrollReveal().reveal('.splash_about_box', { delay: 1500 })

ScrollReveal().reveal('.reveal', { delay: 300 })
ScrollReveal().reveal('.yes1', { delay: 300 })
ScrollReveal().reveal('.yes2', { delay: 300 })
ScrollReveal().reveal('.yes3', { delay: 300 })
ScrollReveal().reveal('.yes', { delay: 300 })
ScrollReveal().reveal('.yes1', { delay: 300 })
ScrollReveal().reveal('.yes2', { delay: 300 })
ScrollReveal().reveal('.yes3', { delay: 300 })

// enable the mobile side navigation
$(document).ready(function(){
  $('.sidenav').sidenav();
});
