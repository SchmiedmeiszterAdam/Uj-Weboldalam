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
    
var int = setInterval(function() {
    if (img.complete && img2.complete && img3.complete && gif.complete && gif2.complete) {
        clearInterval(int);
        $("#oldal-tartalom").css("display", "block");
        $("#tolto-kep").css("display", "none");
    }
}, 50);
    




