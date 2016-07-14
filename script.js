function setupHandlers(){
  $("#title").on("mouseenter", function() {
    $(this).animate({width: 200}, 2000);
  });
  $("#title").on("mouseleave", function(){
    $(this).animate({width: 50}, 2000);
  });
  $("img").on("click", function(){
      alert("Please don't click on me! >___<")
  });}


$(document).ready(setupHandlers);
