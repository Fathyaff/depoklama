function onHoverPenjajah()
{
    $("#voting-button-penjajah").attr('src', 'img/asets/voting/circle-hover.png');
}

function offHoverPenjajah()
{
    $("#voting-button-penjajah").attr('src', 'img/asets/voting/circle.png');
}
function onHoverOrangSuci()
{
    $("#voting-button-orang-suci").attr('src', 'img/asets/voting/circle-hover.png');
}

function offHoverOrangSuci()
{
    $("#voting-button-orang-suci").attr('src', 'img/asets/voting/circle.png');
}
function onHoverPebisnis()
{
    $("#voting-button-pebisnis").attr('src', 'img/asets/voting/circle-hover.png');
}

function offHoverPebisnis()
{
    $("#voting-button-pebisnis").attr('src', 'img/asets/voting/circle.png');
}

function animateAfterClickCC(param) {
    var penjajah = parseInt(document.getElementById("angka-penjajah").textContent);
    var orangsuci = parseInt(document.getElementById("angka-orangsuci").textContent);
    var pebisnis = parseInt(document.getElementById("angka-pebisnis").textContent);

    if (param == "penjajah") {
        penjajah = penjajah +1;
    } else if (param == "orangsuci") {
        orangsuci = orangsuci +1;
    } else if (param == "pebisnis") {
        pebisnis = pebisnis +1;
    }

    var total = (penjajah)+(orangsuci)+(pebisnis);
    var tinggi_penjajah = (penjajah/total)*100;
    var tinggi_orangsuci = (orangsuci/total)*100;
    var tinggi_pebisnis = (pebisnis/total)*100;


    document.getElementById("voting-button-penjajah").style.display = "none";
    document.getElementById("voting-button-orang-suci").style.display = "none";
    document.getElementById("voting-button-pebisnis").style.display = "none";
    document.getElementById("hasil-voting-penjajah").style.display = "block";
    document.getElementById("hasil-voting-orangsuci").style.display = "block";
    document.getElementById("hasil-voting-pebisnis").style.display = "block";
    document.getElementById("angka-penjajah").style.display = "block";
    document.getElementById("angka-orangsuci").style.display = "block";
    document.getElementById("angka-pebisnis").style.display = "block";



    document.getElementById("hasil-voting-penjajah").style.backgroundImage =
    "linear-gradient(to top, yellow 50%, transparent 50%)";
    document.getElementById("hasil-voting-orangsuci").style.backgroundImage =
    "linear-gradient(to top, yellow 50%, transparent 50%)";
    document.getElementById("hasil-voting-pebisnis").style.backgroundImage =
    "linear-gradient(to top, yellow 50%, transparent 50%)";

    document.getElementById("hasil-voting-penjajah").style.backgroundPosition = "0% "+tinggi_penjajah+"%";
    document.getElementById("hasil-voting-orangsuci").style.backgroundPosition = "0% "+tinggi_orangsuci+"%";
    document.getElementById("hasil-voting-pebisnis").style.backgroundPosition = "0% "+tinggi_pebisnis+"%";

    document.getElementById("hasil-voting-penjajah").style.transition =
    "background-position 30000000ms, color 30000000ms ease;";
    document.getElementById("hasil-voting-orangsuci").style.transition =
    "background-position 30000000ms, color 30000000ms ease;";
    document.getElementById("hasil-voting-pebisnis").style.transition =
    "background-position 30000000ms, color 30000000ms ease;";

    document.getElementsByClassName("title-button-voting-cc-text")[0].style.marginBottom = "0%";
    document.getElementById("angka-penjajah").textContent = penjajah;
    document.getElementById("angka-orangsuci").textContent = orangsuci;
    document.getElementById("angka-pebisnis").textContent = pebisnis;
}
