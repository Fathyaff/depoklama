$(document).ready(function() {
    // Get the modal
    var modalSaksiSuzana = document.getElementById('modalSaksiSuzana');
    var modalSaksiGovert = document.getElementById('modalSaksiGovert');

    // Get the button that opens the modal
    var imgSaksiSuzana = document.getElementById("saksiSuzana");
    var imgSaksiGovert = document.getElementById("saksiGovert");
    
    // Get the <span> element that closes the modal
    var span_close_saksi_suzana = document.getElementsByClassName("close-modal-saksi-suzana")[0];
    var span_close_saksi_govert = document.getElementsByClassName("close-modal-saksi-govert")[0];

    // When the user clicks on the button, open the modal
    imgSaksiSuzana.onclick = function() {
        modalSaksiSuzana.style.display = "block";
    }
    
    imgSaksiGovert.onclick = function() {
        modalSaksiGovert.style.display = "block";
    }

    /* ===============================================================
    ==================== PLAY PAUSE SUZANA =============================
    ==================================================================*/
    var audioSaksiSuzana = document.getElementById("audioSaksiSuzana"); 
    
    function playAudioSaksiSuzana() { 
        audioSaksiSuzana.play(); 
    } 

    function pauseAudioSaksiSuzana() { 
        audioSaksiSuzana.pause(); 
    }

    function stopAudioSaksiSuzana(){
        pauseAudioSaksiSuzana();
        audioSaksiSuzana.currentTime = 0;
        $('#toggle-saksi-suzana').attr("class", "play-suzana");
    }

    $('#toggle-saksi-suzana').bind("click", function() {
      if ($(this).attr("class") == "play-suzana"){
        playAudioSaksiSuzana();
        $(this).attr("class", "pause-suzana");
      } else{
        pauseAudioSaksiSuzana();
        $(this).attr("class", "play-suzana");
      }
         
    });


    // When the user clicks on <span> (x), close the modal
    span_close_saksi_suzana.onclick = function() {
        modalSaksiSuzana.style.display = "none";
        stopAudioSaksiSuzana();
    }

    /* ===============================================================
    ==================== PLAY PAUSE OPA GOVERT========================
    ==================================================================*/
    var audioSaksiGovert = document.getElementById("audioSaksiGovert"); 

    function playAudioSaksiGovert() { 
        audioSaksiGovert.play(); 
    } 

    function pauseAudioSaksiGovert() { 
        audioSaksiGovert.pause(); 
    }
    
    function stopAudioSaksiGovert(){
        pauseAudioSaksiGovert();
        audioSaksiGovert.currentTime = 0;
        $('#toggle-saksi-govert').attr("class", "play-govert");
    }

    $('#toggle-saksi-govert').bind("click", function() {
        if ($(this).attr("class") == "play-govert"){
            playAudioSaksiGovert();
          $(this).attr("class", "pause-govert");
        } else{
            pauseAudioSaksiGovert();
          $(this).attr("class", "play-govert");
        }
    });
    

    span_close_saksi_govert.onclick = function() {
        modalSaksiGovert.style.display = "none";
        stopAudioSaksiGovert();
    }

  });




