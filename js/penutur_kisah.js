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

var descbondan = document.getElementsByClassName("bondan-desc");
var descfaradiba = document.getElementsByClassName("faradiba-desc");
var descyano = document.getElementsByClassName("yano-desc");
var desclili = document.getElementsByClassName("lili-desc");
var desctiti = document.getElementsByClassName("titi-desc");
var descboy = document.getElementsByClassName("boy-desc");
var descgovert = document.getElementsByClassName("govert-desc");
var descferdy = document.getElementsByClassName("ferdy-desc");
var descsuzana = document.getElementsByClassName("suzana-desc");



var imgbondanmodalcontent

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
imgbondan.onclick = function() {
    modal.style.display = "block";
    document.getElementById("bondan-modal").style.display = "block";
    descbondan.style.display = "block";
}
imgfaradiba.onclick = function() {
    modal.style.display = "block";
    document.getElementById("faradiba-modal").style.display = "block";
    descfaradiba.style.display = "block";
}
imgyano.onclick = function() {
    modal.style.display = "block";
    document.getElementById("yano-modal").style.display = "block";
    descyano.style.display = "block";
}
imglili.onclick = function() {
    modal.style.display = "block";
    document.getElementById("lili-modal").style.display = "block";
    desclili.style.display = "block";
}
imgtiti.onclick = function() {
    modal.style.display = "block";
    document.getElementById("titi-modal").style.display = "block";
    desctiti.style.display = "block";
}
imgferdy.onclick = function() {
    modal.style.display = "block";
    document.getElementById("ferdy-modal").style.display = "block";
    descferdy.style.display = "block";
}
imggovert.onclick = function() {
    modal.style.display = "block";
    document.getElementById("govert-modal").style.display = "block";
    descgovert.style.display = "block";
}
imgsuzana.onclick = function() {
    modal.style.display = "block";
    document.getElementById("suzana-modal").style.display = "block";
    descsuzana.style.display = "block";
}
imgboy.onclick = function() {
    modal.style.display = "block";
    document.getElementById("boy-modal").style.display = "block";
    descboy.style.display = "block";
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
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
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

    }
}

// Instantiate the Bootstrap carousel
// $('.multi-item-carousel').carousel({
//     interval: 2000
// });

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


