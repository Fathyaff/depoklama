// Get the modal
var modal = document.getElementById('modalBondan');

// Get the button that opens the modal
var imgbondan = document.getElementById("bondan");
var imgfaradiba = document.getElementById("faradiba");
var imgyano = document.getElementById("yano");


// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
imgbondan.onclick = function() {
    modal.style.display = "block";
}
imgfaradiba.onclick = function() {
  modalFaradiba.style.display = "block";
}
imgyano.onclick = function() {
  modalFaradia.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
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


