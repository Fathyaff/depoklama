$(document).ready(function() {
    // Get the modal
    var modalKematian = document.getElementById('modalKematian');
    var modalCikal = document.getElementById('modalCikal');
    var modalOtonom = document.getElementById('modalOtonom');

    // Get the button that opens the modal
    var imgkematian = document.getElementById("kematian");
    var imgcikal = document.getElementById("cikal");
    var imgotonom = document.getElementById("otonom");

    // Get the <span> element that closes the modal
    var span_close_kematian = document.getElementsByClassName("close-modal-kematian")[0];
    var span_close_cikal = document.getElementsByClassName("close-modal-cikal")[0];
    var span_close_otonom = document.getElementsByClassName("close-modal-otonom")[0];

    // When the user clicks on the button, open the modal
    imgkematian.onclick = function() {
        modalKematian.style.display = "block";
    }
    
    imgcikal.onclick = function() {
        modalCikal.style.display = "block";
    }
    
    imgotonom.onclick = function() {
        modalOtonom.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span_close_kematian.onclick = function() {
        modalKematian.style.display = "none";
    }

    span_close_cikal.onclick = function() {
        modalCikal.style.display = "none";
    }

    span_close_otonom.onclick = function() {
        modalOtonom.style.display = "none";
    }
    
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    /* ===============================================================
    ==================== PLAY PAUSE KEMATIAN =============================
    ==================================================================*/
    var audioKematianSuzana = document.getElementById("audioKematianSuzana"); 
    
    function playAudioKematianSuzana() { 
        audioKematianSuzana.play(); 
    } 

    function pauseAudioKematianSuzana() { 
        audioKematianSuzana.pause(); 
    } 

    $('#toggle-kematian-suzana').bind("click", function() {
      if ($(this).attr("class") == "play-suzana"){
        playAudioKematianSuzana();
        $(this).attr("class", "pause-suzana");
      } else{
        pauseAudioKematianSuzana();
        $(this).attr("class", "play-suzana");
      }
         
    });

    /* ===============================================================
    ==================== PLAY PAUSE CIKAL ========================
    ==================================================================*/
    var audioCikalYano = document.getElementById("audioCikalYano"); 
    var audioCikalLili = document.getElementById("audioCikalLili"); 

    function playAudioCikalYano() { 
        audioCikalYano.play(); 
    } 

    function pauseAudioCikalYano() { 
        audioCikalYano.pause(); 
    } 

    function playAudioCikalLili() { 
        audioCikalLili.play(); 
    } 

    function pauseAudioCikalLili() { 
        audioCikalLili.pause(); 
    } 

    $('#toggle-cikal-yano').bind("click", function() {
      if ($(this).attr("class") == "play-yano"){
        playAudioCikalYano();
        $(this).attr("class", "pause-yano");
      } else{
        pauseAudioCikalYano();
        $(this).attr("class", "play-yano");
      }
         
    });

    $('#toggle-cikal-lili').bind("click", function() {
        if ($(this).attr("class") == "play-lili"){
            playAudioCikalLili();
          $(this).attr("class", "pause-lili");
        } else{
            pauseAudioCikalLili();
          $(this).attr("class", "play-lili");
        }
           
      });

    
    /* ===============================================================
    ==================== PLAY PAUSE OTONOM ========================
    ==================================================================*/
    var audioOtonomTiti = document.getElementById("audioOtonomTiti"); 

    function playAudioOtonomTiti() { 
        audioOtonomTiti.play(); 
    } 

    function pauseAudioOtonomTiti() { 
        audioOtonomTiti.pause(); 
    } 

    $('#toggle-otonom-titi').bind("click", function() {
      if ($(this).attr("class") == "play-titi"){
        playAudioOtonomTiti();
        $(this).attr("class", "pause-titi");
      } else{
        pauseAudioOtonomTiti();
        $(this).attr("class", "play-titi");
      }
         
    });
  });




