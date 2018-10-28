$(document).ready(function() {
    var modalPeta1 = document.getElementById('modalPeta');
    var modalPadepokan1 = document.getElementById('modalPadepokan');
    var modalAkronim1 = document.getElementById('modalAkronim');

    var modalProklamasi1 = document.getElementById('modalProklamasi');
    var modalAlur1 = document.getElementById('modalAlur');
    var modalPelaku1 = document.getElementById('modalPelaku');
    var modalBangunan1 = document.getElementById('modalBangunan');

    var modalVisi1 = document.getElementById('modalVisi');
    var modalBudak1 = document.getElementById('modalBudak');
    var modalPerkebunan1 = document.getElementById('modalPerkebunan');
    var modalAturan1 = document.getElementById('modalAturan');

    var modalKematian1 = document.getElementById('modalKematian');
    var modalCikal1 = document.getElementById('modalCikal');
    var modalOtonom1 = document.getElementById('modalOtonom');

    var modalKronologi1 = document.getElementById('modalKronologi');
    var modalWdpg1 = document.getElementById('modalWdpg');
    var modalPesan1 = document.getElementById('modalPesan');
    
    var modalSaksiSuzana1 = document.getElementById('modalSaksiSuzana');
    var modalSaksiGovert1 = document.getElementById('modalSaksiGovert');

    var modalKeluarga1 = document.getElementById('modalKeluarga');
    var modalPribadi1 = document.getElementById('modalPribadi');
    var modalKarir1 = document.getElementById('modalKarir');
    var modalTanah1 = document.getElementById('modalTanah');

    // When the user clicks anywhere outside of the modal, close it
    window.onload = function(event){
        window.onclick = function(event) {
            if (event.target == modal) {
                document.getElementById("bondan-modal").style.display = "none";
                document.getElementById("lili-modal").style.display = "none";
                document.getElementById("titi-modal").style.display = "none";
                document.getElementById("ferdy-modal").style.display = "none";
                document.getElementById("govert-modal").style.display = "none";
                document.getElementById("yano-modal").style.display = "none";
                document.getElementById("suzana-modal").style.display = "none";
                document.getElementById("faradiba-modal").style.display = "none";
                document.getElementById("boy-modal").style.display = "none";
                modal.style.display = "none";
                namesuzana.style.display = "none";
                nameboy.style.display = "none";
                nameferdy.style.display = "none";
                namegovert.style.display = "none";
                descbondan.style.display = "none";
                desclili.style.display = "none";
                desctiti.style.display = "none";
                descyano.style.display = "none";
                descgovert.style.display = "none";
                descboy.style.display = "none";
                descsuzana.style.display = "none";
                descferdy.style.display = "none";
                descfaradiba.style.display = "none";
                namebondan.style.display = "none";
                namefaradiba.style.display = "none";
                nameyano.style.display = "none";
                namelili.style.display = "none";
                nametiti.style.display = "none";
            }

            if (event.target == modalPeta1) {
                modalPeta1.style.display = "none";
                document.getElementById("audioPetaTiti").pause(); 
                document.getElementById("audioPetaBondan").pause(); 

                document.getElementById("audioPetaBondan").currentTime = 0; 
                document.getElementById("audioPetaTiti").currentTime = 0; 

                $('#toggle-peta-titi').attr("class", "play-titi");
                $('#toggle-peta-bondan').attr("class", "play-bondan");
            }
            if (event.target == modalPadepokan1) {
                modalPadepokan1.style.display = "none";
                document.getElementById("audioPadepokanLili").pause(); 
                document.getElementById("audioPadepokanTiti").pause(); 

                document.getElementById("audioPadepokanLili").currentTime = 0; 
                document.getElementById("audioPadepokanTiti").currentTime = 0; 

                $('#toggle-padepokan-titi').attr("class", "play-titi");
                $('#toggle-padepokan-lili').attr("class", "play-lili");

            }
            if (event.target == modalAkronim1) {
                modalAkronim1.style.display = "none";
                document.getElementById("audioAkronimYano").pause(); 
                document.getElementById("audioAkronimLili").pause(); 
                document.getElementById("audioAkronimFerdy").pause(); 
                document.getElementById("audioAkronimBoy").pause(); 

                document.getElementById("audioAkronimYano").currentTime = 0; 
                document.getElementById("audioAkronimLili").currentTime = 0; 
                document.getElementById("audioAkronimFerdy").currentTime = 0; 
                document.getElementById("audioAkronimBoy").currentTime = 0; 

                $('#toggle-akronim-yano').attr("class", "play-yano");
                $('#toggle-akronim-ferdy').attr("class", "play-ferdy");
                $('#toggle-akronim-boy').attr("class", "play-boy");
                $('#toggle-akronim-lili').attr("class", "play-lili");

            }

            if (event.target == modalAlur1) {
                modalAlur1.style.display = "none";
                document.getElementById("audioAlurSuzana").pause(); 
                document.getElementById("audioAlurFara").pause();

                document.getElementById("audioAlurSuzana").currentTime = 0; 
                document.getElementById("audioAlurFara").currentTime = 0;

                $('#toggle-alur-suzana').attr("class", "play-suzana");
                $('#toggle-alur-fara').attr("class", "play-fara");
            }
            if (event.target == modalBangunan1) {
                modalBangunan1.style.display = "none";

            }
            if (event.target == modalPelaku1) {
                modalPelaku1.style.display = "none";

                document.getElementById("audioPelakuBoy").pause(); 
                document.getElementById("audioPelakuLili").pause(); 
                document.getElementById("audioPelakuSuzana").pause(); 
                document.getElementById("audioPelakuFara").pause(); 

                document.getElementById("audioPelakuBoy").currentTime = 0; 
                document.getElementById("audioPelakuLili").currentTime = 0; 
                document.getElementById("audioPelakuSuzana").currentTime = 0; 
                document.getElementById("audioPelakuFara").currentTime = 0;
                
                $('#toggle-pelaku-suzana').attr("class", "play-suzana");
                $('#toggle-pelaku-fara').attr("class", "play-fara");
                $('#toggle-pelaku-boy').attr("class", "play-boy");
                $('#toggle-pelaku-lili').attr("class", "play-lili");
            }
            if (event.target == modalProklamasi1) {
                modalProklamasi1.style.display = "none";
                document.getElementById("audioProklamasiBoy").pause(); 
                document.getElementById("audioProklamasiLili").pause(); 
                document.getElementById("audioProklamasiFara").pause(); 

                document.getElementById("audioProklamasiBoy").currentTime = 0; 
                document.getElementById("audioProklamasiLili").currentTime = 0; 
                document.getElementById("audioProklamasiFara").currentTime = 0;
                
                $('#toggle-proklamasi-boy').attr("class", "play-boy");
                $('#toggle-proklamasi-fara').attr("class", "play-fara");
                $('#toggle-proklamasi-lili').attr("class", "play-lili");
                
            }

            if (event.target == modalVisi1) {
                modalVisi1.style.display = "none";               
                document.getElementById("audioVisiBondan").pause();
                document.getElementById("audioVisiLili").pause();
                

                document.getElementById("audioVisiBondan").currentTime = 0;
                document.getElementById("audioVisiLili").currentTime = 0;
                

                $('#toggle-visi-bondan').attr("class", "play-bondan");
                $('#toggle-visi-lili').attr("class", "play-lili");
                
            }
            if (event.target == modalBudak1) {
                modalBudak1.style.display = "none";
                document.getElementById("audioBudakBondan").pause(); 
                document.getElementById("audioBudakSuzana").pause(); 

                document.getElementById("audioBudakBondan").currentTime = 0; 
                document.getElementById("audioBudakSuzana").currentTime = 0;
                
                $('#toggle-budak-suzana').attr("class", "play-suzana");
                $('#toggle-budak-bondan').attr("class", "play-bondan");
            }
            if (event.target == modalPerkebunan1) {
                modalPerkebunan1.style.display = "none";
                document.getElementById("audioPerkebunanYano").pause(); 
                document.getElementById("audioPerkebunanLili").pause(); 

                document.getElementById("audioPerkebunanYano").currentTime = 0;
                document.getElementById("audioPerkebunanLili").currentTime = 0;

                $('#toggle-perkebunan-lili').attr("class", "play-lili");
                $('#toggle-perkebunan-yano').attr("class", "play-yano");
            }
            if (event.target == modalAturan1) {
                modalAturan1.style.display = "none";
                document.getElementById("audioAturanBoy").pause(); 
                document.getElementById("audioAturanBoy").currentTime = 0;
                document.getElementById("audioAturanLili").pause(); 
                document.getElementById("audioAturanLili").currentTime = 0;

                $('#toggle-aturan-lili').attr("class", "play-lili");
                $('#toggle-aturan-boy').attr("class", "play-boy");
            }

            if (event.target == modalKematian1) {
                modalKematian.style.display = "none";
                document.getElementById("audioKematianSuzana").pause();
                document.getElementById("audioKematianSuzana").currentTime = 0;
                $('#toggle-kematian-suzana').attr("class", "play-suzana");
            }
            if (event.target == modalCikal1) {
                modalCikal.style.display = "none";
                document.getElementById("audioCikalYano").pause();
                document.getElementById("audioCikalYano").currentTime = 0;
                document.getElementById("audioCikalLili").pause();
                document.getElementById("audioCikalLili").currentTime = 0;

                $('#toggle-cikal-yano').attr("class", "play-yano");
                $('#toggle-cikal-lili').attr("class", "play-lili");
            }
            if (event.target == modalOtonom1) {
                modalOtonom.style.display = "none";
                document.getElementById("audioOtonomTiti").pause();
                document.getElementById("audioOtonomTiti").currentTime = 0;
                $('#toggle-otonom-titi').attr("class", "play-titi");
            }

            if (event.target == modalKronologi1) {
                modalKronologi.style.display = "none";
                document.getElementById("audioKronologiSuzana").pause();
                document.getElementById("audioKronologiSuzana").currentTime = 0;
                $('#toggle-kronologi-suzana').attr("class", "play-suzana");
            }
            if (event.target == modalWdpg1) {
                modalWdpg.style.display = "none";
                document.getElementById("audioWdpgBoy").pause();
                document.getElementById("audioWdpgBoy").currentTime = 0;
                $('#toggle-wdpg-boy').attr("class", "play-boy");
            }
            if (event.target == modalPesan1) {
                modalPesan.style.display = "none";
                document.getElementById("audioPesanSuzana").pause();
                document.getElementById("audioPesanSuzana").currentTime = 0;
                $('#toggle-pesan-suzana').attr("class", "play-suzana");
            }

            if (event.target == modalSaksiGovert1) {
                modalSaksiGovert.style.display = "none";
                document.getElementById("audioSaksiGovert").pause();
                document.getElementById("audioSaksiGovert").currentTime = 0;
                $('#toggle-saksi-govert').attr("class", "play-govert");
            }
            if (event.target == modalSaksiSuzana1) {
                modalSaksiSuzana.style.display = "none";
                document.getElementById("audioSaksiSuzana").pause();
                document.getElementById("audioSaksiSuzana").currentTime = 0;
                $('#toggle-saksi-suzana').attr("class", "play-suzana");
            }
            if (event.target == modalKeluarga1) {
                modalKeluarga.style.display = "none";
                document.getElementById("audioKeluargaLili").pause();
                document.getElementById("audioKeluargaLili").currentTime = 0;
                $('#toggle-keluarga-lili').attr("class", "play-lili");
            }
            if (event.target == modalPribadi1) {
                modalPribadi.style.display = "none";
                document.getElementById("audioPribadiBondan").pause();
                document.getElementById("audioPribadiBondan").currentTime = 0;
                $('#toggle-pribadi-bondan').attr("class", "play-bondan");
            }
            if (event.target == modalKarir1) {
                modalKarir.style.display = "none";

                document.getElementById("audioKarirLili").pause();
                document.getElementById("audioKarirLili").currentTime = 0;
                
                document.getElementById("audioKarirBondan").pause();
                document.getElementById("audioKarirBondan").currentTime = 0;

                $('#toggle-karir-lili').attr("class", "play-lili");
                $('#toggle-karir-bondan').attr("class", "play-bondan");
            }
            if (event.target == modalTanah1) {
                modalTanah.style.display = "none";
                document.getElementById("audioTanahTiti").pause();
                document.getElementById("audioTanahTiti").currentTime = 0;
                document.getElementById("audioTanahFara").pause();
                document.getElementById("audioTanahFara").currentTime = 0;
                document.getElementById("audioTanahFerdy").pause();
                document.getElementById("audioTanahFerdy").currentTime = 0;

                $('#toggle-tanah-titi').attr("class", "play-titi");
                $('#toggle-tanah-fara').attr("class", "play-fara");
                $('#toggle-tanah-ferdy').attr("class", "play-ferdy");

            }
        }
    }


});