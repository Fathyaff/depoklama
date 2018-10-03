$(document).ready(function() {
    // Get the modal
    var modalVisi = document.getElementById('modalVisi');
    var modalBudak = document.getElementById('modalBudak');
    var modalPerkebunan = document.getElementById('modalPerkebunan');
    var modalAturan = document.getElementById('modalAturan');

    // Get the button that opens the modal
    var imgvisi = document.getElementById("visi");
    var imgbudak = document.getElementById("budak");
    var imgperkebunan = document.getElementById("perkebunan");
    var imgaturan = document.getElementById("aturan");

    // Get the <span> element that closes the modal
    var span_close_visi = document.getElementsByClassName("close-modal-visi")[0];
    var span_close_budak = document.getElementsByClassName("close-modal-budak")[0];
    var span_close_perkebunan = document.getElementsByClassName("close-modal-perkebunan")[0];
    var span_close_aturan = document.getElementsByClassName("close-modal-aturan")[0];

    // When the user clicks on the button, open the modal
    imgvisi.onclick = function() {
        modalVisi.style.display = "block";
    }
    
    imgbudak.onclick = function() {
        modalBudak.style.display = "block";
    }
    
    imgperkebunan.onclick = function() {
        modalPerkebunan.style.display = "block";
    }
    
    imgaturan.onclick = function() {
        modalAturan.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span_close_visi.onclick = function() {
        modalVisi.style.display = "none";
    }

    span_close_budak.onclick = function() {
        modalBudak.style.display = "none";
    }

    span_close_perkebunan.onclick = function() {
        modalPerkebunan.style.display = "none";
    }
    
    span_close_aturan.onclick = function() {
        modalAturan.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    /* ===============================================================
    ==================== PLAY PAUSE VISI =============================
    ==================================================================*/
    var audioVisiLili = document.getElementById("audioVisiLili"); 
    
    function playAudioVisiLili() { 
        audioVisiLili.play(); 
    } 

    function pauseAudioVisiLili() { 
        audioVisiLili.pause(); 
    } 


    $('#toggle-visi-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili"){
        playAudioVisiLili();
        $(this).attr("class", "pause-lili");
      } else{
        pauseAudioVisiLili();
        $(this).attr("class", "play-lili");
      }
         
    });

    var audioVisiBondan = document.getElementById("audioVisiBondan"); 

    function playAudioVisiBondan() { 
        audioVisiBondan.play(); 
    } 

    function pauseAudioVisiBondan() { 
        audioVisiBondan.pause(); 
    } 

    $('#toggle-visi-bondan').bind("click", function() {
      if ($(this).attr("class") == "play-bondan"){
        playAudioVisiBondan();
        $(this).attr("class", "pause-bondan");
      } else{
        pauseAudioVisiBondan();
        $(this).attr("class", "play-bondan");
      }
         
    });

    var audioVisiSuzana = document.getElementById("audioVisiSuzana"); 

    function playAudioVisiSuzana() { 
        audioVisiSuzana.play(); 
    } 

    function pauseAudioVisiSuzana() { 
        audioVisiSuzana.pause(); 
    } 

    $('#toggle-visi-suzana').bind("click", function() {
      if ($(this).attr("class") == "play-suzana"){
        playAudioVisiSuzana();
        $(this).attr("class", "pause-suzana");
      } else{
        pauseAudioVisiSuzana();
        $(this).attr("class", "play-suzana");
      }
         
    });

    /* ===============================================================
    ==================== PLAY PAUSE BUDAK ========================
    ==================================================================*/
    var audioBudakBondan = document.getElementById("audioBudakBondan"); 

    function playAudioBudakBondan() { 
        audioBudakBondan.play(); 
    } 

    function pauseAudioBudakBondan() { 
        audioBudakBondan.pause(); 
    } 

    $('#toggle-budak-bondan').bind("click", function() {
      if ($(this).attr("class") == "play-bondan"){
        playAudioBudakBondan();
        $(this).attr("class", "pause-bondan");
      } else{
        pauseAudioBudakBondan();
        $(this).attr("class", "play-bondan");
      }
         
    });

    var audioBudakSuzana = document.getElementById("audioBudakSuzana"); 

    function playAudioBudakSuzana() { 
        audioBudakSuzana.play(); 
    } 

    function pauseAudioBudakSuzana() { 
        audioBudakSuzana.pause(); 
    } 

    $('#toggle-budak-suzana').bind("click", function() {
      if ($(this).attr("class") == "play-suzana"){
        playAudioBudakSuzana();
        $(this).attr("class", "pause-suzana");
      } else{
        pauseAudioBudakSuzana();
        $(this).attr("class", "play-suzana");
      }
         
    });
    
    /* ===============================================================
    ==================== PLAY PAUSE PERKEBUNAN ========================
    ==================================================================*/
    var audioPerkebunanYano = document.getElementById("audioPerkebunanYano"); 
    var audioPerkebunanLili = document.getElementById("audioPerkebunanLili"); 

    function playAudioPerkebunanLili() { 
        audioPerkebunanLili.play(); 
    } 

    function pauseAudioPerkebunanLili() { 
        audioPerkebunanLili.pause(); 
    } 

    function playAudioPerkebunanYano() { 
        audioPerkebunanYano.play(); 
    } 

    function pauseAudioPerkebunanYano() { 
        audioPerkebunanYano.pause(); 
    } 

    $('#toggle-perkebunan-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili"){
        playAudioPerkebunanLili();
        $(this).attr("class", "pause-lili");
      } else{
        pauseAudioPerkebunanLili();
        $(this).attr("class", "play-lili");
      }
         
    });

    $('#toggle-perkebunan-yano').bind("click", function() {
        if ($(this).attr("class") == "play-yano"){
            playAudioPerkebunanYano();
          $(this).attr("class", "pause-yano");
        } else{
            pauseAudioPerkebunanYano();
          $(this).attr("class", "play-yano");
        }
      });


    /* ===============================================================
    ==================== PLAY PAUSE ATURAN ========================
    ==================================================================*/
    var audioAturanBoy = document.getElementById("audioAturanBoy"); 
    var audioAturanLili = document.getElementById("audioAturanLili"); 

    function playAudioAturanLili() { 
        audioAturanLili.play(); 
    } 

    function pauseAudioAturanLili() { 
        audioAturanLili.pause(); 
    } 

    function playAudioAturanBoy() { 
        audioAturanBoy.play(); 
    } 

    function pauseAudioAturanBoy() { 
        audioAturanBoy.pause(); 
    } 

    $('#toggle-aturan-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili"){
        playAudioAturanLili();
        $(this).attr("class", "pause-lili");
      } else{
        pauseAudioAturanLili();
        $(this).attr("class", "play-lili");
      }
         
    });

    $('#toggle-aturan-boy').bind("click", function() {
        if ($(this).attr("class") == "play-boy"){
            playAudioAturanBoy();
          $(this).attr("class", "pause-boy");
        } else{
            pauseAudioAturanBoy();
          $(this).attr("class", "play-boy");
        }
      });

  });




