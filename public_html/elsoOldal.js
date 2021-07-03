var nev = "Schmiedmeiszter Ádám";
j = 0;
$(function () {
    $('.nev').append("i");
    $('.nev').addClass("nev-valtozas");
    setTimeout(kesleltet, 1500);
    setTimeout(nevUjra, 5510);
    setTimeout(nevFrissites, 5600);
});
function kesleltet() {
    setInterval(nevLetrehozas, 200);
}
function nevFrissites() {
    setInterval(nevUjra, 1000);
}

function nevLetrehozas() {
    if (j < nev.length) {
        adottBetu = nev.charAt(j);
        $('.nev').append(adottBetu);
        j++;
    }
}

function nevUjra() {
    $('.nev').empty();
    $('.nev').removeClass("nev-valtozas");
    $('.nev').append(nev);
    $('.nev').append("<span aria-hidden='true'>" + nev + "</span><span aria-hidden='true'>" + nev + "</span>");
    $('.nev').css("text-shadow", "0.05em 0 0 rgba(255, 0, 0, .75), -0.025em -0.05em 0 rgba(0, 255, 0, .75), 0.025em 0.05em 0 rgba(0, 0, 255, .75)");
    $('.nev').css("animation", "nev-glitch 500ms infinite");
}

