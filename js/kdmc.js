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

    function stopAudioVisiLili(){
        pauseAudioVisiLili();
        audioVisiLili.currentTime= 0;
        $('#toggle-visi-lili').attr("class", "play-lili");
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

    function stopAudioVisiBondan(){
        pauseAudioVisiBondan();
        audioVisiBondan.currentTime = 0;
        $('#toggle-visi-bondan').attr("class", "play-bondan");
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
 // When the user clicks on <span> (x), close the modal
    span_close_visi.onclick = function() {
        modalVisi.style.display = "none";
        stopAudioVisiLili();
        stopAudioVisiBondan();
    }

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

    function stopAudioBudakBondan(){
        pauseAudioBudakBondan();
        audioBudakBondan.currentTime = 0;
        $('#toggle-budak-bondan').attr("class", "play-bondan");
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

    function stopAudioBudakSuzana(){
        pauseAudioBudakSuzana();
        audioBudakSuzana.currentTime = 0;
        $('#toggle-budak-suzana').attr("class", "play-suzana");
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
    
    span_close_budak.onclick = function() {
        modalBudak.style.display = "none";

        stopAudioBudakSuzana();
        stopAudioBudakBondan();
        
        
    }

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

    function stopAudioPerkebunanLili(){
        pauseAudioPerkebunanLili();
        audioPerkebunanLili.currentTime = 0;
        $('#toggle-perkebunan-lili').attr("class", "play-lili");
    }

    function playAudioPerkebunanYano() { 
        audioPerkebunanYano.play(); 
    } 

    function pauseAudioPerkebunanYano() { 
        audioPerkebunanYano.pause(); 
    } 

    function stopAudioPerkebunanYano(){
        pauseAudioPerkebunanYano();
        audioPerkebunanYano.currentTime = 0;
        $('#toggle-perkebunan-yano').attr("class", "play-yano");
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


      span_close_perkebunan.onclick = function() {
        modalPerkebunan.style.display = "none";
        stopAudioPerkebunanYano();
        stopAudioPerkebunanLili();
    }
    
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

    function stopAudioAturanLili() { 
        pauseAudioAturanLili();
        audioAturanLili.currentTime = 0;
        $('#toggle-aturan-lili').attr("class", "play-lili");
    } 

    function playAudioAturanBoy() { 
        audioAturanBoy.play(); 
    } 

    function pauseAudioAturanBoy() { 
        audioAturanBoy.pause(); 
    } 

    function stopAudioAturanBoy(){
        pauseAudioAturanBoy();
        audioAturanBoy.currentTime = 0;
        $('#toggle-aturan-boy').attr("class", "play-boy");
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

    span_close_aturan.onclick = function() {
        modalAturan.style.display = "none";
        stopAudioAturanBoy();
        stopAudioAturanLili();
    }
  });




