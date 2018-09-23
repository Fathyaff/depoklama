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

// When the user clicks on <span> (x), close the modal
span_close_peta.onclick = function() {
    modalPeta.style.display = "none";
}

span_close_padepokan.onclick = function() {
    modalPadepokan.style.display = "none";
}

span_close_akronim.onclick = function() {
    modalAkronim.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}



