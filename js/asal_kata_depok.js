$(document).ready(function() {
    // Get the modal
    var modalPeta = document.getElementById('modalPeta');
    var modalPadepokan = document.getElementById('modalPadepokan');
    var modalAkronim = document.getElementById('modalAkronim');

    // Get the button that opens the modal
    var imgpeta = document.getElementById("peta");
    var imgpadepokan = document.getElementById("padepokan");
    var imgakronim = document.getElementById("akronim");

    // Get the <span> element that closes the modal
    var span_close_peta = document.getElementsByClassName("close-modal-peta")[0];
    var span_close_padepokan = document.getElementsByClassName("close-modal-padepokan")[0];
    var span_close_akronim = document.getElementsByClassName("close-modal-akronim")[0];

    // When the user clicks on the button, open the modal
    imgpeta.onclick = function() {
        modalPeta.style.display = "block";
    }
    imgpadepokan.onclick = function() {
    modalPadepokan.style.display = "block";
    }
    imgakronim.onclick = function() {
    modalAkronim.style.display = "block";
    }
    
    /* ===============================================================
    ==================== PLAY PAUSE PETA =============================
    ==================================================================*/
    var audioPetaTiti = document.getElementById("audioPetaTiti"); 
    var audioPetaBondan = document.getElementById("audioPetaBondan"); 

    function playAudioPetaTiti() { 
        audioPetaTiti.play(); 
    } 

    function pauseAudioPetaTiti() { 
        audioPetaTiti.pause(); 
    } 

    function playAudioPetaBondan() { 
        audioPetaBondan.play(); 
    } 

    function pauseAudioPetaBondan() { 
        audioPetaBondan.pause(); 
    } 


    $('#toggle-peta-titi').bind("click", function() {
      if ($(this).attr("class") == "play-titi"){
        playAudioPetaTiti();
        $(this).attr("class", "pause-titi");
      } else{
        pauseAudioPetaTiti();
        $(this).attr("class", "play-titi");
      }
         
    });

    $('#toggle-peta-bondan').bind("click", function() {
        if ($(this).attr("class") == "play-bondan"){
          playAudioPetaBondan();
          $(this).attr("class", "pause-bondan");
        } else{
          pauseAudioPetaBondan();
          $(this).attr("class", "play-bondan");
        }
      });

    function closeModalPeta(){
        modalPeta.style.display = "none";
        audioPetaTiti.pause();
        audioPetaTiti.currentTime = 0;
        $('#toggle-peta-titi').attr("class", "play-titi");
        
        audioPetaBondan.pause();
        audioPetaBondan.currentTime = 0;
        $('#toggle-peta-bondan').attr("class", "play-bondan");
    }
    // When the user clicks on <span> (x), close the modal
    span_close_peta.onclick = function() {
        closeModalPeta();        
    }
    /* ===============================================================
    ==================== PLAY PAUSE PADEPOKAN ========================
    ==================================================================*/
    var audioPadepokanTiti = document.getElementById("audioPadepokanTiti"); 
    var audioPadepokanLili = document.getElementById("audioPadepokanLili"); 

    function playAudioPadepokanTiti() { 
        audioPadepokanTiti.play(); 
    } 

    function pauseAudioPadepokanTiti() { 
        audioPadepokanTiti.pause(); 
    } 

    function playAudioPadepokanLili() { 
        audioPadepokanLili.play(); 
    } 

    function pauseAudioPadepokanLili() { 
        audioPadepokanLili.pause(); 
    } 


    $('#toggle-padepokan-titi').bind("click", function() {
      if ($(this).attr("class") == "play-titi"){
        playAudioPadepokanTiti();
        $(this).attr("class", "pause-titi");
      } else{
        pauseAudioPadepokanTiti();
        $(this).attr("class", "play-titi");
      }
         
    });

    $('#toggle-padepokan-lili').bind("click", function() {
        if ($(this).attr("class") == "play-lili"){
            playAudioPadepokanLili();
          $(this).attr("class", "pause-lili");
        } else{
            pauseAudioPadepokanLili();
          $(this).attr("class", "play-lili");
        }
      });
    
    span_close_padepokan.onclick = function() {
        modalPadepokan.style.display = "none";
        pauseAudioPadepokanTiti();
        audioPadepokanTiti.currentTime = 0;
        $('#toggle-padepokan-titi').attr("class", "play-titi");
        
        pauseAudioPadepokanLili();
        audioPadepokanLili.currentTime = 0;
        $('#toggle-padepokan-lili').attr("class", "play-lili");
        
    }
    /* ===============================================================
    ==================== PLAY PAUSE AKRONIM ========================
    ==================================================================*/
    var audioAkronimYano = document.getElementById("audioAkronimYano"); 
    var audioAkronimLili = document.getElementById("audioAkronimLili"); 
    var audioAkronimFerdy = document.getElementById("audioAkronimFerdy"); 
    var audioAkronimBoy = document.getElementById("audioAkronimBoy"); 

    function playAudioAkronimYano() { 
        audioAkronimYano.play(); 
    } 

    function pauseAudioAkronimYano() { 
        audioAkronimYano.pause(); 
    } 

    function playAudioAkronimLili() { 
        audioAkronimLili.play(); 
    } 

    function pauseAudioAkronimLili() { 
        audioAkronimLili.pause(); 
    } 

    function playAudioAkronimFerdy() { 
        audioAkronimFerdy.play(); 
    } 

    function pauseAudioAkronimFerdy() { 
        audioAkronimFerdy.pause(); 
    } 

    function playAudioAkronimBoy() { 
        audioAkronimBoy.play(); 
    } 

    function pauseAudioAkronimBoy() { 
        audioAkronimBoy.pause(); 
    } 

    $('#toggle-akronim-yano').bind("click", function() {
      if ($(this).attr("class") == "play-yano"){
        playAudioAkronimYano();
        $(this).attr("class", "pause-yano");
      } else{
        pauseAudioAkronimYano();
        $(this).attr("class", "play-yano");
      }
         
    });

    $('#toggle-akronim-ferdy').bind("click", function() {
        if ($(this).attr("class") == "play-ferdy"){
            playAudioAkronimFerdy();
          $(this).attr("class", "pause-ferdy");
        } else{
            pauseAudioAkronimFerdy();
          $(this).attr("class", "play-ferdy");
        }
      });

      $('#toggle-akronim-lili').bind("click", function() {
        if ($(this).attr("class") == "play-lili"){
            playAudioAkronimLili();
          $(this).attr("class", "pause-lili");
        } else{
            pauseAudioAkronimLili();
        }      
      });

      $('#toggle-akronim-boy').bind("click", function() {
        if ($(this).attr("class") == "play-boy"){
            playAudioAkronimBoy();
          $(this).attr("class", "pause-boy");
        } else{
            pauseAudioAkronimBoy();
          $(this).attr("class", "play-boy");
        }
      });

    span_close_akronim.onclick = function() {
        modalAkronim.style.display = "none";
        
        $('#toggle-akronim-yano').attr("class", "play-yano");
        $('#toggle-akronim-boy').attr("class", "play-boy");
        $('#toggle-akronim-ferdy').attr("class", "play-ferdy");
        $('#toggle-akronim-lili').attr("class", "play-lili");
        
        pauseAudioAkronimYano();
        pauseAudioAkronimFerdy();
        pauseAudioAkronimLili();
        pauseAudioAkronimBoy();

        audioAkronimYano.currentTime = 0;
        audioAkronimBoy.currentTime =0;
        audioAkronimFerdy.currentTime = 0;
        audioAkronimLili.currentTime = 0;
    }
  });




