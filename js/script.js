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
  mode_toggle.setAttribute("src","sun.svg")
}

function lightMode(){
  document.body.classList.remove("dark")
  mode_toggle.setAttribute("src","moon.svg")
}
