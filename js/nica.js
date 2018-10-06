$(document).ready(function() {
    // Get the modal
    var modalKronologi = document.getElementById('modalKronologi');
    var modalWdpg = document.getElementById('modalWdpg');
    var modalPesan = document.getElementById('modalPesan');

    // Get the button that opens the modal
    var imgkronologi = document.getElementById("kronologi");
    var imgwdpg = document.getElementById("wdpg");
    var imgpesan = document.getElementById("pesan");

    // Get the <span> element that closes the modal
    var span_close_kronologi = document.getElementsByClassName("close-modal-kronologi")[0];
    var span_close_wdpg = document.getElementsByClassName("close-modal-wdpg")[0];
    var span_close_pesan = document.getElementsByClassName("close-modal-pesan")[0];

    // When the user clicks on the button, open the modal
    imgkronologi.onclick = function() {
        modalKronologi.style.display = "block";
    }
    
    imgwdpg.onclick = function() {
        modalWdpg.style.display = "block";
    }
    
    imgpesan.onclick = function() {
        modalPesan.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span_close_kronologi.onclick = function() {
        modalKronologi.style.display = "none";
    }

    span_close_wdpg.onclick = function() {
        modalWdpg.style.display = "none";
    }

    span_close_pesan.onclick = function() {
        modalPesan.style.display = "none";
    }
    
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    /* ===============================================================
    ==================== PLAY PAUSE KRONOLOGI =============================
    ==================================================================*/
    var audioKronologiSuzana = document.getElementById("audioKronologiSuzana"); 
    
    function playAudioKronologiSuzana() { 
        audioKronologiSuzana.play(); 
    } 

    function pauseAudioKronologiSuzana() { 
        audioKronologiSuzana.pause(); 
    } 

    $('#toggle-kronologi-suzana').bind("click", function() {
      if ($(this).attr("class") == "play-suzana"){
        playAudioKronologiSuzana();
        $(this).attr("class", "pause-suzana");
      } else{
        pauseAudioKronologiSuzana();
        $(this).attr("class", "play-suzana");
      }
         
    });

    /* ===============================================================
    ==================== PLAY PAUSE WDPG ========================
    ==================================================================*/
    var audioWdpgBoy = document.getElementById("audioWdpgBoy"); 

    function playAudioWdpgBoy() { 
        audioWdpgBoy.play(); 
    } 

    function pauseAudioWdpgBoy() { 
        audioWdpgBoy.pause(); 
    } 

    $('#toggle-wdpg-boy').bind("click", function() {
      if ($(this).attr("class") == "play-boy"){
        playAudioWdpgBoy();
        $(this).attr("class", "pause-boy");
      } else{
        pauseAudioWdpgBoy();
        $(this).attr("class", "play-boy");
      }
         
    });
    
    /* ===============================================================
    ==================== PLAY PAUSE PESAN ========================
    ==================================================================*/
    var audioPesanSuzana = document.getElementById("audioPesanSuzana"); 

    function playAudioPesanSuzana() { 
        audioPesanSuzana.play(); 
    } 

    function pauseAudioPesanSuzana() { 
        audioPesanSuzana.pause(); 
    } 

    $('#toggle-pesan-suzana').bind("click", function() {
      if ($(this).attr("class") == "play-suzana"){
        playAudioPesanSuzana();
        $(this).attr("class", "pause-suzana");
      } else{
        pauseAudioPesanSuzana();
        $(this).attr("class", "play-suzana");
      }
         
    });
  });




