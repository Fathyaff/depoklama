function onHoverNica()
{
    $("#voting-button-nica").attr('src', 'img/asets/voting/circle-hover.png');
}

function offHoverNica()
{
    $("#voting-button-nica").attr('src', 'img/asets/voting/circle.png');
}
function onHoverTkr()
{
    $("#voting-button-tkr").attr('src', 'img/asets/voting/circle-hover.png');
}

function offHoverTkr()
{
    $("#voting-button-tkr").attr('src', 'img/asets/voting/circle.png');
}

function animateAfterClick(nicatkr) {

    var nica = parseInt(document.getElementById("angka-nica").textContent);
    var tkr = parseInt(document.getElementById("angka-tkr").textContent);

    if (nicatkr == "nica"){
        nica = nica + 1;
    } else if (nicatkr == "tkr") {
        tkr = tkr + 1;
    }

    var totalNicaTkr = (nica)+(tkr)+1;
    var tinggi_nica = (nica/totalNicaTkr)*100;
    var tinggi_tkr = (tkr/totalNicaTkr)*100;


    document.getElementById("voting-button-nica").style.display = "none";
    document.getElementById("voting-button-tkr").style.display = "none";
    document.getElementById("hasil-voting-nica").style.display = "block";
    document.getElementById("hasil-voting-tkr").style.display = "block";
    document.getElementById("angka-nica").style.display = "block";
    document.getElementById("angka-tkr").style.display = "block";



    document.getElementById("hasil-voting-nica").style.backgroundImage =
    "linear-gradient(to top, yellow 50%, transparent 50%)";
    document.getElementById("hasil-voting-tkr").style.backgroundImage =
    "linear-gradient(to top, yellow 50%, transparent 50%)";
    document.getElementById("hasil-voting-nica").style.backgroundPosition = "0% "+tinggi_nica+"%";
    document.getElementById("hasil-voting-tkr").style.backgroundPosition = "0% "+tinggi_tkr+"%";
    document.getElementById("hasil-voting-nica").style.transition =
    "background-position 30000000ms, color 30000000ms ease;";
    document.getElementById("hasil-voting-tkr").style.transition =
    "background-position 30000000ms, color 30000000ms ease;";


    document.getElementsByClassName("nica-tkr-row")[0].style.paddingTop = "0%";
    document.getElementById("angka-nica").textContent = nica;
    document.getElementById("angka-tkr").textContent = tkr;

}


