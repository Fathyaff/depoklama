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
  modal.style.display = "block";
}
imgyano.onclick = function() {
  modal.style.display = "block";
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
