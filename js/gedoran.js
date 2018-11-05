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

    function stopAudioProklamasiBoy(){
        pauseAudioProklamasiBoy();
        audioProklamasiBoy.currentTime = 0;
        $('#toggle-proklamasi-boy').attr("class", "play-boy toggle-audio");
    }
    
    function playAudioProklamasiLili() { 
        audioProklamasiLili.play(); 
    } 

    function pauseAudioProklamasiLili() { 
        audioProklamasiLili.pause(); 
    }

    function stopAudioProklamasiLili(){
        pauseAudioProklamasiLili();
        audioProklamasiLili.currentTime = 0;
        $('#toggle-proklamasi-lili').attr("class", "play-lili toggle-audio");

    }

    function playAudioProklamasiFara() { 
        audioProklamasiFara.play(); 
    } 

    function pauseAudioProklamasiFara() { 
        audioProklamasiFara.pause(); 
    }

    function stopAudioProklamasiFara(){
        pauseAudioProklamasiFara();
        audioProklamasiFara.currentTime = 0;
        $('#toggle-proklamasi-fara').attr("class", "play-fara toggle-audio");
    }

    $('#toggle-proklamasi-boy').bind("click", function() {
      if ($(this).attr("class") == "play-boy toggle-audio"){
        playAudioProklamasiBoy();
        $(this).attr("class", "pause-boy toggle-audio");
      } else{
        pauseAudioProklamasiBoy();
        $(this).attr("class", "play-boy toggle-audio");
      }
         
    });

    $('#toggle-proklamasi-lili').bind("click", function() {
        if ($(this).attr("class") == "play-lili toggle-audio"){
            playAudioProklamasiLili();
          $(this).attr("class", "pause-lili toggle-audio");
        } else{
          pauseAudioProklamasiLili();
          $(this).attr("class", "play-lili toggle-audio");
        }
           
    });

    $('#toggle-proklamasi-fara').bind("click", function() {
        if ($(this).attr("class") == "play-fara toggle-audio"){
            playAudioProklamasiFara();
          $(this).attr("class", "pause-fara toggle-audio");
        } else{
          pauseAudioProklamasiFara();
          $(this).attr("class", "play-fara toggle-audio");
        }
           
    });

    // When the user clicks on <span> (x), close the modal
    span_close_proklamasi.onclick = function() {
        modalProklamasi.style.display = "none";
        stopAudioProklamasiBoy();
        stopAudioProklamasiLili();
        stopAudioProklamasiFara();
    }


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

    function stopAudioAlurSuzana(){
        pauseAudioAlurSuzana();
        audioAlurSuzana.currentTime = 0;
        $('#toggle-alur-suzana').attr("class", "play-suzana toggle-audio");
    }

    function playAudioAlurFara() { 
        audioAlurFara.play(); 
    } 

    function pauseAudioAlurFara() { 
        audioAlurFara.pause(); 
    } 

    function stopAudioAlurFara(){
        pauseAudioAlurFara();
        audioAlurFara.currentTime = 0;
        $('#toggle-alur-fara').attr("class", "play-fara toggle-audio");
    }

    $('#toggle-alur-suzana').bind("click", function() {
        if ($(this).attr("class") == "play-suzana toggle-audio"){
          playAudioAlurSuzana();
          $(this).attr("class", "pause-suzana toggle-audio");
        } else{
          pauseAudioAlurSuzana();
          $(this).attr("class", "play-suzana toggle-audio");
        }
           
      });
    
    $('#toggle-alur-fara').bind("click", function() {
      if ($(this).attr("class") == "play-fara toggle-audio"){
        playAudioAlurFara();
        $(this).attr("class", "pause-fara toggle-audio");
      } else{
        pauseAudioAlurFara();
        $(this).attr("class", "play-fara toggle-audio");
      }
         
    });
    

    span_close_alur.onclick = function() {
        modalAlur.style.display = "none";
        stopAudioAlurSuzana();
        stopAudioAlurFara();
    }

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

    function stopAudioPelakuBoy(){
        pauseAudioPelakuBoy()
        audioPelakuBoy.currentTime = 0;
        $('#toggle-pelaku-boy').attr("class", "play-boy toggle-audio");
    }

    function playAudioPelakuLili() { 
        audioPelakuLili.play(); 
    } 

    function pauseAudioPelakuLili() { 
        audioPelakuLili.pause(); 
    } 

    function stopAudioPelakuLili(){
        pauseAudioPelakuLili();
        audioPelakuLili.currentTime = 0;
        $('#toggle-pelaku-lili').attr("class", "play-lili toggle-audio");
    }

    function playAudioPelakuSuzana() { 
        audioPelakuSuzana.play(); 
    } 

    function pauseAudioPelakuSuzana() { 
        audioPelakuSuzana.pause(); 
    } 

    function stopAudioPelakuSuzana(){
        pauseAudioPelakuSuzana();
        audioPelakuSuzana.currentTime = 0;
        $('#toggle-pelaku-suzana').attr("class", "play-suzana toggle-audio");
    }

    function playAudioPelakuFara() { 
        audioPelakuFara.play(); 
    } 

    function pauseAudioPelakuFara() { 
        audioPelakuFara.pause(); 
    } 

    function stopAudioPelakuFara(){
        pauseAudioPelakuFara();
        audioPelakuFara.currentTime = 0;
        $('#toggle-pelaku-fara').attr("class", "play-fara toggle-audio");
    }

    $('#toggle-pelaku-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili toggle-audio"){
        playAudioPelakuLili();
        $(this).attr("class", "pause-lili toggle-audio");
      } else{
        pauseAudioPelakuLili();
        $(this).attr("class", "play-lili toggle-audio");
      }
         
    });

    $('#toggle-pelaku-boy').bind("click", function() {
        if ($(this).attr("class") == "play-boy toggle-audio"){
            playAudioPelakuBoy();
          $(this).attr("class", "pause-boy toggle-audio");
        } else{
            pauseAudioPelakuBoy();
        $(this).attr("class", "play-boy toggle-audio");
    }
    });

    $('#toggle-pelaku-suzana').bind("click", function() {
    if ($(this).attr("class") == "play-suzana toggle-audio"){
        playAudioPelakuSuzana();
        $(this).attr("class", "pause-suzana toggle-audio");
    } else{
        pauseAudioPelakuSuzana();
        $(this).attr("class", "play-suzana toggle-audio");
    }
    });

    $('#toggle-pelaku-fara').bind("click", function() {
        if ($(this).attr("class") == "play-fara toggle-audio"){
            playAudioPelakuFara();
            $(this).attr("class", "pause-fara toggle-audio");
        } else{
            pauseAudioPelakuFara();
            $(this).attr("class", "play-fara toggle-audio");
        }
    });

    span_close_pelaku.onclick = function() {
        modalPelaku.style.display = "none";

        stopAudioPelakuFara();
        stopAudioPelakuSuzana();        
        stopAudioPelakuBoy();
        stopAudioPelakuLili();
    }
    
    span_close_bangunan.onclick = function() {
        modalBangunan.style.display = "none";
    }
  });




