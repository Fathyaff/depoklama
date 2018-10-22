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

    // When the user clicks on <span> (x), close the modal
    span_close_keluarga.onclick = function() {
        modalKeluarga.style.display = "none";
    }

    span_close_pribadi.onclick = function() {
        modalPribadi.style.display = "none";
    }

    span_close_karir.onclick = function() {
        modalKarir.style.display = "none";
    }
    
    span_close_tanah.onclick = function() {
        modalTanah.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
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


    $('#toggle-keluarga-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili"){
        playAudioKeluargaLili();
        $(this).attr("class", "pause-lili");
      } else{
        pauseAudioKeluargaLili();
        $(this).attr("class", "play-lili");
      }
         
    });

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

    $('#toggle-pribadi-bondan').bind("click", function() {
      if ($(this).attr("class") == "play-bondan"){
        playAudioPribadiBondan();
        $(this).attr("class", "pause-bondan");
      } else{
        pauseAudioPribadiBondan();
        $(this).attr("class", "play-bondan");
      }
         
    });
    
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

    function playAudioKarirBoy() { 
        audioKarirBoy.play(); 
    } 

    function pauseAudioKarirBoy() { 
        audioKarirBoy.pause(); 
    } 

    function playAudioKarirBondan() { 
        audioKarirBondan.play(); 
    } 

    function pauseAudioKarirBondan() { 
        audioKarirBondan.pause(); 
    } 

    $('#toggle-karir-lili').bind("click", function() {
      if ($(this).attr("class") == "play-lili"){
        playAudioKarirLili();
        $(this).attr("class", "pause-lili");
      } else{
        pauseAudioKarirLili();
        $(this).attr("class", "play-lili");
      }
         
    });

    $('#toggle-karir-boy').bind("click", function() {
        if ($(this).attr("class") == "play-boy"){
            playAudioKarirBoy();
          $(this).attr("class", "pause-boy");
        } else{
            pauseAudioKarirBoy();
          $(this).attr("class", "play-boy");
        }
      });

      $('#toggle-karir-bondan').bind("click", function() {
        if ($(this).attr("class") == "play-bondan"){
            playAudioKarirBondan();
          $(this).attr("class", "pause-bondan");
        } else{
            pauseAudioKarirBondan();
          $(this).attr("class", "play-bondan");
        }
      });

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

    function playAudioTanahFara() { 
        audioTanahBuFara.play(); 
    } 

    function pauseAudioTanahFara() { 
        audioTanahBuFara.pause(); 
    } 

    function playAudioTanahFerdy() { 
        audioTanahFerdy.play(); 
    } 

    function pauseAudioTanahFerdy() { 
        audioTanahFerdy.pause(); 
    } 

    $('#toggle-tanah-titi').bind("click", function() {
      if ($(this).attr("class") == "play-titi"){
        playAudioTanahTiti();
        $(this).attr("class", "pause-titi");
      } else{
        pauseAudioTanahTiti();
        $(this).attr("class", "play-titi");
      }
         
    });


    $('#toggle-tanah-fara').bind("click", function() {
        if ($(this).attr("class") == "play-fara"){
          playAudioTanahFara();
          $(this).attr("class", "pause-fara");
        } else{
          pauseAudioTanahFara();
          $(this).attr("class", "play-fara");
        }
    });

    $('#toggle-tanah-ferdy').bind("click", function() {
        if ($(this).attr("class") == "play-ferdy"){
            playAudioTanahFerdy();
            $(this).attr("class", "pause-ferdy");
        } else{
            pauseAudioTanahFerdy();
            $(this).attr("class", "play-ferdy");
        }
    });

  });




