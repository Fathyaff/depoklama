$(document).ready(function() {
    var x = document.getElementById("myAudio"); 

    function playAudio() { 
        x.play(); 
    } 

    function pauseAudio() { 
        x.pause(); 
    } 

    $('#toggle').bind("click", function() {
      if ($(this).attr("class") == "play"){
        playAudio();
        $(this).attr("class", "pause");
      } else{
        pauseAudio();
        $(this).attr("class", "play");
      }
         
    });
  });