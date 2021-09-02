var helyezes = 1;
var tomb = [0,0,0,0,0]

var img = new Image();
    img.src = "kepek/hatter2.jpg";
var img2 = new Image();
    img2.src = "kepek/hatter3.jpg";
var img3 = new Image();
img3.src = "kepek/hatter4.jpg";

var gif = new Image();
    gif.src = "kepek/program.gif";
var gif2 = new Image();
    gif2.src = "kepek/gaming2.gif";
var gif3 = new Image();
    gif3.src = "kepek/hatter2.jpg";

var int = setInterval(function() {
    if(img.complete && tomb[0] === 0){
        $("#tolto-vonal-2").addClass("proba"+helyezes + "");
        helyezes++;
        tomb[0] = 1;
    }
    if(img2.complete && tomb[1] === 0){
        $("#tolto-vonal-2").addClass("proba"+helyezes + "");
        helyezes++;
        tomb[1] = 1;
    }
    if(img3.complete && tomb[2] === 0){
        $("#tolto-vonal-2").addClass("proba"+helyezes + "");
        helyezes++;
        tomb[2] = 1;
    }
    if(gif.complete && tomb[3] === 0){
        $("#tolto-vonal-2").addClass("proba"+helyezes + "");
        helyezes++;
        tomb[3] = 1;
    }
    if(gif2.complete && tomb[4] === 0){
        $("#tolto-vonal-2").addClass("proba"+helyezes + "");
        helyezes++;
        tomb[4] = 1;
    }
    if(gif3.complete){
        $("#tolto-vonal-2").addClass("proba"+helyezes + "");
        helyezes++;
    }
    if (img.complete && img2.complete && img3.complete && gif.complete && gif2.complete) {
        clearInterval(int);
        $("#oldal-tartalom").css("display", "block");
        $("#tolto-kep").css("display", "none");
    }
}, 1000);
    




