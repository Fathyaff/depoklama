// Get the modal
var modal = document.getElementById('modalBondan');

// Get the button that opens the modal
var imgbondan = document.getElementById("bondan");
var imgfaradiba = document.getElementById("faradiba");
var imgyano = document.getElementById("yano");
var imglili = document.getElementById("lili");
var imgtiti = document.getElementById("titi");
var imgsuzana = document.getElementById("suzana");
var imgferdy = document.getElementById("ferdy");
var imggovert = document.getElementById("govert");
var imgboy = document.getElementById("boy");

var namebondan = document.getElementById("bondan-name");
var namefaradiba = document.getElementById("faradiba-name");
var nameyano = document.getElementById("yano-name");
var namelili = document.getElementById("lili-name");
var nametiti = document.getElementById("titi-name");
var namesuzana = document.getElementById("suzana-name");
var nameferdy = document.getElementById("ferdy-name");
var namegovert = document.getElementById("govert-name");
var nameboy = document.getElementById("boy-name");

var descbondan = document.getElementById("bondan-desc");
var descfaradiba = document.getElementById("faradiba-desc");
var descyano = document.getElementById("yano-desc");
var desclili = document.getElementById("lili-desc");
var desctiti = document.getElementById("titi-desc");
var descboy = document.getElementById("boy-desc");
var descgovert = document.getElementById("govert-desc");
var descferdy = document.getElementById("ferdy-desc");
var descsuzana = document.getElementById("suzana-desc");

var imgfaradibaslider = document.getElementById("faradiba-slider");
var imgbondanslider = document.getElementById("bondan-slider");
var imgtitislider = document.getElementById("titi-slider");
var imglilislider = document.getElementById("lili-slider");
var imggovertslider = document.getElementById("govert-slider");
var imgboyslider = document.getElementById("boy-slider");
var imgyanoslider = document.getElementById("yano-slider");
var imgferdyslider = document.getElementById("ferdy-slider");
var imgsuzanaslider = document.getElementById("suzana-slider");


// var imgbondanmodalcontent

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
imgbondan.onclick = function() {
    modal.style.display = "block";
    document.getElementById("bondan-modal").style.display = "block";
    descbondan.style.display = "block";
    namebondan.style.display = "block";
}
imgfaradiba.onclick = function() {
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "block";
    descfaradiba.style.display = "block";
    namefaradiba.style.display = "block";
}
imgyano.onclick = function() {
    modal.style.display = "block";
    document.getElementById("yano-modal").style.display = "block";
    descyano.style.display = "block";
    nameyano.style.display = "block";
}
imglili.onclick = function() {
    modal.style.display = "block";
    document.getElementById("lili-modal").style.display = "block";
    desclili.style.display = "block";
    namelili.style.display = "block";
}
imgtiti.onclick = function() {
    modal.style.display = "block";
    document.getElementById("titi-modal").style.display = "block";
    desctiti.style.display = "block";
    nametiti.style.display = "block";
}
imgferdy.onclick = function() {
    modal.style.display = "block";
    document.getElementById("ferdy-modal").style.display = "block";
    descferdy.style.display = "block";
    nameferdy.style.display = "block";
}
imggovert.onclick = function() {
    modal.style.display = "block";
    document.getElementById("govert-modal").style.display = "block";
    descgovert.style.display = "block";
    namegovert.style.display = "block";
}
imgsuzana.onclick = function() {
    modal.style.display = "block";
    document.getElementById("suzana-modal").style.display = "block";
    descsuzana.style.display = "block";
    namesuzana.style.display = "block";
}
imgboy.onclick = function() {
    modal.style.display = "block";
    document.getElementById("boy-modal").style.display = "block";
    descboy.style.display = "block";
    nameboy.style.display = "block";
}

$('.multi-item-carousel .carousel-inner .item #faradiba-slider').bind("click",  function() {
    console.log("FARADIBA");
    modal.style.display = "block";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";

    descbondan.style.display = "none";
    desclili.style.display = "none";
    desctiti.style.display = "none";
    descyano.style.display = "none";
    descgovert.style.display = "none";
    descboy.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namebondan.style.display = "none";
    nameyano.style.display = "none";
    namelili.style.display = "none";
    nametiti.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namegovert.style.display = "none";
    nameboy.style.display = "none";

    document.getElementById("faradiba-modal").style.display = "block";
    descfaradiba.style.display = "block";
    namefaradiba.style.display = "block";
});

imgbondanslider.onclick = function() {
    console.log("BONDAN");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desclili.style.display = "none";
    desctiti.style.display = "none";
    descyano.style.display = "none";
    descgovert.style.display = "none";
    descboy.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namefaradiba.style.display = "none";
    nameyano.style.display = "none";
    namelili.style.display = "none";
    nametiti.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namegovert.style.display = "none";
    nameboy.style.display = "none";

    document.getElementById("bondan-modal").style.display = "block";
    descbondan.style.display = "block";
    namebondan.style.display = "block";
}


imgtitislider.onclick = function() {
    console.log("TITI");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desclili.style.display = "none";
    descbondan.style.display = "none";
    descyano.style.display = "none";
    descgovert.style.display = "none";
    descboy.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namefaradiba.style.display = "none";
    nameyano.style.display = "none";
    namelili.style.display = "none";
    namebondan.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namegovert.style.display = "none";
    nameboy.style.display = "none";

    document.getElementById("titi-modal").style.display = "block";
    desctiti.style.display = "block";
    nametiti.style.display = "block";
}


imglilislider.onclick = function() {
    console.log("LILI");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desctiti.style.display = "none";
    descbondan.style.display = "none";
    descyano.style.display = "none";
    descgovert.style.display = "none";
    descboy.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namefaradiba.style.display = "none";
    nameyano.style.display = "none";
    nametiti.style.display = "none";
    namebondan.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namegovert.style.display = "none";
    nameboy.style.display = "none";

    document.getElementById("lili-modal").style.display = "block";
    desclili.style.display = "block";
    namelili.style.display = "block";
}


imggovertslider.onclick = function() {
    console.log("GIVERT");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desctiti.style.display = "none";
    descbondan.style.display = "none";
    descyano.style.display = "none";
    desclili.style.display = "none";
    descboy.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namefaradiba.style.display = "none";
    nameyano.style.display = "none";
    nametiti.style.display = "none";
    namebondan.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namelili.style.display = "none";
    nameboy.style.display = "none";

    document.getElementById("govert-modal").style.display = "block";
    descgovert.style.display = "block";
    namegovert.style.display = "block";
}

imgboyslider.onclick = function() {
    console.log("BOY");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desctiti.style.display = "none";
    descbondan.style.display = "none";
    descyano.style.display = "none";
    desclili.style.display = "none";
    descgovert.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namefaradiba.style.display = "none";
    nameyano.style.display = "none";
    nametiti.style.display = "none";
    namebondan.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namelili.style.display = "none";
    namegovert.style.display = "none";

    document.getElementById("boy-modal").style.display = "block";
    descboy.style.display = "block";
    nameboy.style.display = "block";
}


imgyanoslider.onclick = function() {
    console.log("YANO");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desctiti.style.display = "none";
    descbondan.style.display = "none";
    descboy.style.display = "none";
    desclili.style.display = "none";
    descgovert.style.display = "none";
    descsuzana.style.display = "none";
    descferdy.style.display = "none";

    namefaradiba.style.display = "none";
    nameboy.style.display = "none";
    nametiti.style.display = "none";
    namebondan.style.display = "none";
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namelili.style.display = "none";
    namegovert.style.display = "none";

    document.getElementById("yano-modal").style.display = "block";
    descyano.style.display = "block";
    nameyano.style.display = "block";
}


imgferdyslider.onclick = function() {
    console.log("FERDY");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desctiti.style.display = "none";
    descbondan.style.display = "none";
    descboy.style.display = "none";
    desclili.style.display = "none";
    descgovert.style.display = "none";
    descsuzana.style.display = "none";
    descyano.style.display = "none";

    namefaradiba.style.display = "none";
    nameboy.style.display = "none";
    nametiti.style.display = "none";
    namebondan.style.display = "none";
    namesuzana.style.display = "none";
    nameyano.style.display = "none";
    namelili.style.display = "none";
    namegovert.style.display = "none";

    document.getElementById("ferdy-modal").style.display = "block";
    descferdy.style.display = "block";
    nameferdy.style.display = "block";
}


imgsuzanaslider.onclick = function() {
    console.log("SUZANA");
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";

    descfaradiba.style.display = "none";
    desctiti.style.display = "none";
    descbondan.style.display = "none";
    descboy.style.display = "none";
    desclili.style.display = "none";
    descgovert.style.display = "none";
    descferdy.style.display = "none";
    descyano.style.display = "none";

    namefaradiba.style.display = "none";
    nameboy.style.display = "none";
    nametiti.style.display = "none";
    namebondan.style.display = "none";
    nameferdy.style.display = "none";
    nameyano.style.display = "none";
    namelili.style.display = "none";
    namegovert.style.display = "none";

    document.getElementById("suzana-modal").style.display = "block";
    descsuzana.style.display = "block";
    namesuzana.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
    document.getElementById("bondan-modal").style.display = "none";
    document.getElementById("lili-modal").style.display = "none";
    document.getElementById("titi-modal").style.display = "none";
    document.getElementById("ferdy-modal").style.display = "none";
    document.getElementById("govert-modal").style.display = "none";
    document.getElementById("yano-modal").style.display = "none";
    document.getElementById("suzana-modal").style.display = "none";
    document.getElementById("faradiba-modal").style.display = "none";
    document.getElementById("boy-modal").style.display = "none";

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
    namesuzana.style.display = "none";
    nameferdy.style.display = "none";
    namegovert.style.display = "none";
    nameboy.style.display = "none";
}


// Instantiate the Bootstrap carousel
$('.multi-item-carousel').carousel({
    interval: 2000
});

// for every slide in carousel, copy the next slide's item in the slide.
// Do the same for the next, next item.
$('.multi-item-carousel .item').each(function(){
    var next = $(this).next();
    if (!next.length) {
        next = $(this).siblings(':first');
    }
    next.children(':first-child').clone().appendTo($(this));

    if (next.next().length>0) {
        next.next().children(':first-child').clone().appendTo($(this));
    } else {
        $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
    }
});


