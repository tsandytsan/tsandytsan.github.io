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
ScrollReveal().reveal('.full_name', { delay: 500 })
ScrollReveal().reveal('.splash_about_box', { delay: 1000 })

ScrollReveal().reveal('.yes00', { delay: 80 })
ScrollReveal().reveal('.yes01', { delay: 80 })

ScrollReveal().reveal('.yes10', { delay: 80 })
ScrollReveal().reveal('.yes11', { delay: 80 })
ScrollReveal().reveal('.yes12', { delay: 80 })
ScrollReveal().reveal('.yes13', { delay: 80 })

ScrollReveal().reveal('.yes20', { delay: 80 })
ScrollReveal().reveal('.yes21', { delay: 80 })
ScrollReveal().reveal('.yes22', { delay: 80 })
ScrollReveal().reveal('.yes23', { delay: 80 })
ScrollReveal().reveal('.yes24', { delay: 80 })
ScrollReveal().reveal('.yes25', { delay: 80 })
ScrollReveal().reveal('.yes26', { delay: 80 })

// enable the mobile side navigation
$(document).ready(function(){
  $('.sidenav').sidenav();
});
