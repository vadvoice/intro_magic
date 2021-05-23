function main() {
  $(".blobs").click(function() {
    $("#middle").addClass("animated");     
    $("#blob1").addClass("animated");     
    $("#blob2").addClass("animated");
  })
  
  $("#blob1").bind("webkitAnimationEnd mozAnimationEnd animationend", function(){  
    $("#blob1").removeClass("animatedR");  
    $("#blob2").removeClass("animatedR");  
  })

  $(".animated img").on('click', function() {
    console.log('here');
  })

}

window.addEventListener('load', function () {
  main();
})