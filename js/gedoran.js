$(document).ready(function() {
    // Get the modal
    var modalProklamasi = document.getElementById('modalProklamasi');
    var modalAlur = document.getElementById('modalAlur');
    var modalPelaku = document.getElementById('modalPelaku');
    var modalBangunan = document.getElementById('modalBangunan');

    // Get the button that opens the modal
    var imgproklamasi = document.getElementById("proklamasi");
    var imgalur = document.getElementById("alur");
    var imgpelaku = document.getElementById("pelaku");
    var imgbangunan = document.getElementById("bangunan");

    // Get the <span> element that closes the modal
    var span_close_proklamasi = document.getElementsByClassName("close-modal-proklamasi")[0];
    var span_close_alur = document.getElementsByClassName("close-modal-alur")[0];
    var span_close_pelaku = document.getElementsByClassName("close-modal-pelaku")[0];
    var span_close_bangunan = document.getElementsByClassName("close-modal-bangunan")[0];

    // When the user clicks on the button, open the modal
    imgproklamasi.onclick = function() {
        modalProklamasi.style.display = "block";
    }
    
    imgalur.onclick = function() {
        modalAlur.style.display = "block";
    }
    
    imgpelaku.onclick = function() {
        modalPelaku.style.display = "block";
    }
    
    imgbangunan.onclick = function() {
        modalBangunan.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span_close_proklamasi.onclick = function() {
        modalProklamasi.style.display = "none";
    }

    span_close_alur.onclick = function() {
        modalAlur.style.display = "none";
    }

    span_close_pelaku.onclick = function() {
        modalPelaku.style.display = "none";
    }
    
    span_close_bangunan.onclick = function() {
        modalBangunan.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }

    /* ===============================================================
    ==================== PLAY PAUSE PROKLAMSI =============================
    ==================================================================*/
    var audioProklamasiBoy = document.getElementById("audioProklamasiBoy"); 
    var audioProklamasiLili = document.getElementById("audioProklamasiLili"); 
    var audioProklamasiFara = document.getElementById("audioProklamasiFara"); 
    
    function playAudioProklamasiBoy() { 
        audioProklamasiBoy.play(); 
    } 

    function pauseAudioProklamasiBoy() { 
        audioProklamasiBoy.pause(); 
    } 

    function playAudioProklamasiLili() { 
        audioProklamasiLili.play(); 
    } 

    function pauseAudioProklamasiLili() { 
        audioProklamasiLili.pause(); 
    }

    function playAudioProklamasiFara() { 
        audioProklamasiFara.play(); 
    } 

    function pauseAudioProklamasiFara() { 
        audioProklamasiFara.pause(); 
    }

    $('#toggle-proklamasi-boy').bind("click", function() {
      if ($(this).attr("class") == "play-boy"){
        playAudioProklamasiBoy();
        $(this).attr("class", "pause-boy");
      } else{
        pauseAudioProklamasiBoy();
        $(this).attr("class", "play-boy");
      }
         
    });

    $('#toggle-proklamasi-lili').bind("click", function() {
        if ($(this).attr("class") == "play-lili"){
            playAudioProklamasiLili();
          $(this).attr("class", "pause-lili");
        } else{
          pauseAudioProklamasiLili();
          $(this).attr("class", "play-lili");
        }
           
    });

    $('#toggle-proklamasi-fara').bind("click", function() {
        if ($(this).attr("class") == "play-fara"){
            playAudioProklamasiFara();
          $(this).attr("class", "pause-fara");
        } else{
          pauseAudioProklamasiFara();
          $(this).attr("class", "play-fara");
        }
           
    });

    /* ===============================================================
    ==================== PLAY PAUSE ALUR KEJADIAN ========================
    ==================================================================*/
    var audioAlurSuzana = document.getElementById("audioAlurSuzana"); 
    var audioAlurFara = document.getElementById("audioAlurFara"); 

    function playAudioAlurSuzana() { 
        audioAlurSuzana.play(); 
    } 

    function pauseAudioAlurSuzana() { 
        audioAlurSuzana.pause(); 
    } 

    function playAudioAlurFara() { 
        audioAlurFara.play(); 
    } 

    function pauseAudioAlurFara() { 
        audioAlurFara.pause(); 
    } 

    $('#toggle-alur-suzana').bind("click", function() {
        if ($(this).attr("class") == "play-suzana"){
          playAudioAlurSuzana();
          $(this).attr("class", "pause-suzana");
        } else{
          pauseAudioAlurSuzana();
          $(this).attr("class", "play-suzana");
        }
           
      });
    
    $('#toggle-alur-fara').bind("click", function() {
      if ($(this).attr("class") == "play-fara"){
        playAudioAlurFara();
        $(this).attr("class", "pause-fara");
      } else{
        pauseAudioAlurFara();
        $(this).attr("class", "play-fara");
      }
         
    });
    
    /* ===============================================================
    ==================== PLAY PAUSE PELAKU ========================
    ==================================================================*/
    var audioPelakuBoy = document.getElementById("audioPelakuBoy"); 
    var audioPelakuLili = document.getElementById("audioPelakuLili"); 
    var audioPelakuSuzana = document.getElementById("audioPelakuSuzana"); 
    var audioPelakuFara = document.getElementById("audioPelakuFara"); 

    function playAudioPelakuBoy() { 
        audioPelakuBoy.play(); 
    } 

    function pauseAudioPelakuBoy() { 
        audioPelakuBoy.pause(); 
    } 

    function playAudioPelakuLili() { 
        audioPelakuLili.play(); 
    } 

    function pauseAudioPelakuLili() { 
        audioPelakuLili.pause(); 
    } 

    function playAudioPelakuSuzana() { 
        audioPelakuSuzana.play(); 
    } 

    function pauseAudioPelakuSuzana() { 
        audioPelakuSuzana.pause(); 
    } 

    function playAudioPelakuFara() { 
        audioPelakuFara.play(); 
    } 

    function pauseAudioPelakuFara() { 
        audioPelakuFara.pause(); 
    } 

    $('#toggle-pelaku-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili"){
        playAudioPelakuLili();
        $(this).attr("class", "pause-lili");
      } else{
        pauseAudioPelakuLili();
        $(this).attr("class", "play-lili");
      }
         
    });

    $('#toggle-pelaku-boy').bind("click", function() {
        if ($(this).attr("class") == "play-boy"){
            playAudioPelakuBoy();
          $(this).attr("class", "pause-boy");
        } else{
            pauseAudioPelakuBoy();
        $(this).attr("class", "play-boy");
    }
    });

    $('#toggle-pelaku-suzana').bind("click", function() {
    if ($(this).attr("class") == "play-suzana"){
        playAudioPelakuSuzana();
        $(this).attr("class", "pause-suzana");
    } else{
        pauseAudioPelakuSuzana();
        $(this).attr("class", "play-suzana");
    }
    });

    $('#toggle-pelaku-fara').bind("click", function() {
        if ($(this).attr("class") == "play-fara"){
            playAudioPelakuFara();
            $(this).attr("class", "pause-fara");
        } else{
            pauseAudioPelakuFara();
            $(this).attr("class", "play-fara");
        }
    });

  });




