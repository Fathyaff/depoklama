$(document).ready(function() {
    // Get the modal
    var modalKeluarga = document.getElementById('modalKeluarga');
    var modalPribadi = document.getElementById('modalPribadi');
    var modalKarir = document.getElementById('modalKarir');
    var modalTanah = document.getElementById('modalTanah');

    // Get the button that opens the modal
    var imgkeluarga = document.getElementById("keluarga");
    var imgpribadi = document.getElementById("pribadi");
    var imgkarir = document.getElementById("karir");
    var imgtanah = document.getElementById("tanah");

    // Get the <span> element that closes the modal
    var span_close_keluarga = document.getElementsByClassName("close-modal-keluarga")[0];
    var span_close_pribadi = document.getElementsByClassName("close-modal-pribadi")[0];
    var span_close_karir = document.getElementsByClassName("close-modal-karir")[0];
    var span_close_tanah = document.getElementsByClassName("close-modal-tanah")[0];

    // When the user clicks on the button, open the modal
    imgkeluarga.onclick = function() {
        modalKeluarga.style.display = "block";
    }
    
    imgpribadi.onclick = function() {
        modalPribadi.style.display = "block";
    }
    
    imgkarir.onclick = function() {
        modalKarir.style.display = "block";
    }
    
    imgtanah.onclick = function() {
        modalTanah.style.display = "block";
    }

    /* ===============================================================
    ==================== PLAY PAUSE KELUARGA =============================
    ==================================================================*/
    var audioKeluargaLili = document.getElementById("audioKeluargaLili"); 
    
    function playAudioKeluargaLili() { 
        audioKeluargaLili.play(); 
    } 

    function pauseAudioKeluargaLili() { 
        audioKeluargaLili.pause(); 
        
    } 

    function stopAudioKeluargaLili() { 
        audioKeluargaLili.pause(); 
        audioKeluargaLili.currentTime =0;
        $('#toggle-keluarga-lili').attr("class", "play-lili toggle-audio");
    }

    $('#toggle-keluarga-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili toggle-audio"){
        playAudioKeluargaLili();
        $(this).attr("class", "pause-lili toggle-audio");
      } else{
        pauseAudioKeluargaLili();
        $(this).attr("class", "play-lili toggle-audio");
      }
         
    });
    
    // When the user clicks on <span> (x), close the modal
    span_close_keluarga.onclick = function() {
        modalKeluarga.style.display = "none";
        stopAudioKeluargaLili();
    }


    /* ===============================================================
    ==================== PLAY PAUSE PRIBADI ========================
    ==================================================================*/
    var audioPribadiBondan = document.getElementById("audioPribadiBondan"); 

    function playAudioPribadiBondan() { 
        audioPribadiBondan.play(); 
    } 

    function pauseAudioPribadiBondan() { 
        audioPribadiBondan.pause(); 
    } 
    
    function stopAudioPribadiBondan() { 
        audioPribadiBondan.pause();
        audioPribadiBondan.currentTime = 0;
        $('#toggle-pribadi-bondan').attr("class", "play-bondan toggle-audio");
    } 

    $('#toggle-pribadi-bondan').bind("click", function() {
      if ($(this).attr("class") == "play-bondan toggle-audio"){
        playAudioPribadiBondan();
        $(this).attr("class", "pause-bondan toggle-audio");
      } else{
        pauseAudioPribadiBondan();
        $(this).attr("class", "play-bondan toggle-audio");
      }
         
    });

    span_close_pribadi.onclick = function() {
        modalPribadi.style.display = "none";
        stopAudioPribadiBondan();
    }
    
    
    
    /* ===============================================================
    ==================== PLAY PAUSE KARIR ========================
    ==================================================================*/
    var audioKarirLili = document.getElementById("audioKarirLili"); 
    var audioKarirBoy = document.getElementById("audioKarirBoy"); 
    var audioKarirBondan = document.getElementById("audioKarirBondan"); 

    function playAudioKarirLili() { 
        audioKarirLili.play(); 
    } 

    function pauseAudioKarirLili() { 
        audioKarirLili.pause(); 
    } 

    function stopAudioKarirLili() { 
        pauseAudioKarirLili();
        audioKarirLili.currentTime = 0;
        $('#toggle-karir-lili').attr("class", "play-lili toggle-audio");
    }

    function playAudioKarirBoy() { 
        audioKarirBoy.play(); 
    } 

    function pauseAudioKarirBoy() { 
        audioKarirBoy.pause(); 
    } 

    function stopAudioKarirBoy() { 
        audioKarirBoy.pause(); 
        audioKarirBoy.currentTime = 0;
        $('#toggle-karir-boy').attr("class", "play-boy toggle-audio");
    } 

    function playAudioKarirBondan() { 
        audioKarirBondan.play(); 
    } 

    function pauseAudioKarirBondan() { 
        audioKarirBondan.pause(); 
    } 

    function stopAudioKarirBondan() { 
        audioKarirBondan.pause();
        audioKarirBondan.currentTime = 0;
        $('#toggle-karir-bondan').attr("class", "play-bondan toggle-audio");
    } 

    $('#toggle-karir-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili toggle-audio"){
        playAudioKarirLili();
        $(this).attr("class", "pause-lili toggle-audio");
      } else{
        pauseAudioKarirLili();
        $(this).attr("class", "play-lili toggle-audio");
      }
         
    });

    $('#toggle-karir-boy').bind("click", function() {
        if ($(this).attr("class") == "play-boy toggle-audio"){
            playAudioKarirBoy();
          $(this).attr("class", "pause-boy toggle-audio");
        } else{
            pauseAudioKarirBoy();
          $(this).attr("class", "play-boy toggle-audio");
        }
      });

      $('#toggle-karir-bondan').bind("click", function() {
        if ($(this).attr("class") == "play-bondan toggle-audio"){
            playAudioKarirBondan();
          $(this).attr("class", "pause-bondan toggle-audio");
        } else{
            pauseAudioKarirBondan();
          $(this).attr("class", "play-bondan toggle-audio");
        }
      });
    
    span_close_karir.onclick = function() {
        modalKarir.style.display = "none";
        stopAudioKarirBondan();
        stopAudioKarirLili();
    }
    
    /* ===============================================================
    ==================== PLAY PAUSE TANAH ========================
    ==================================================================*/
    var audioTanahBuTiti = document.getElementById("audioTanahTiti"); 
    var audioTanahBuFara = document.getElementById("audioTanahFara"); 
    var audioTanahFerdy = document.getElementById("audioTanahFerdy"); 

    function playAudioTanahTiti() { 
        audioTanahBuTiti.play(); 
    } 

    function pauseAudioTanahTiti() { 
        audioTanahBuTiti.pause(); 
    }
    
    function stopAudioTanahTiti() { 
        audioTanahBuTiti.pause(); 
        audioTanahBuTiti.currentTime = 0;
        $('#toggle-tanah-titi').attr("class", "play-titi toggle-audio");
    }

    function playAudioTanahFara() { 
        audioTanahBuFara.play(); 
    } 

    function pauseAudioTanahFara() { 
        audioTanahBuFara.pause(); 
    } 

    function stopAudioTanahFara() { 
        audioTanahBuFara.pause(); 
        audioTanahBuFara.currentTime = 0;
        $('#toggle-tanah-fara').attr("class", "play-fara toggle-audio");
    } 

    function playAudioTanahFerdy() { 
        audioTanahFerdy.play(); 
    } 

    function pauseAudioTanahFerdy() { 
        audioTanahFerdy.pause(); 
    } 

    function stopAudioTanahFerdy() { 
        audioTanahFerdy.pause(); 
        audioTanahFerdy.currentTime = 0;
        $('#toggle-tanah-ferdy').attr("class", "play-ferdy toggle-audio");
    } 

    $('#toggle-tanah-titi').bind("click", function() {
      if ($(this).attr("class") == "play-titi toggle-audio"){
        playAudioTanahTiti();
        $(this).attr("class", "pause-titi toggle-audio");
      } else{
        pauseAudioTanahTiti();
        $(this).attr("class", "play-titi toggle-audio");
      }
         
    });


    $('#toggle-tanah-fara').bind("click", function() {
        if ($(this).attr("class") == "play-fara toggle-audio"){
          playAudioTanahFara();
          $(this).attr("class", "pause-fara toggle-audio");
        } else{
          pauseAudioTanahFara();
          $(this).attr("class", "play-fara toggle-audio");
        }
    });

    $('#toggle-tanah-ferdy').bind("click", function() {
        if ($(this).attr("class") == "play-ferdy toggle-audio"){
            playAudioTanahFerdy();
            $(this).attr("class", "pause-ferdy toggle-audio");
        } else{
            pauseAudioTanahFerdy();
            $(this).attr("class", "play-ferdy toggle-audio");
        }
    });


    span_close_tanah.onclick = function() {
        modalTanah.style.display = "none";
        stopAudioTanahFara();
        stopAudioTanahFerdy();
        stopAudioTanahTiti();
    }

  });




