$(function () {
    $(".hamburger-menu").on("click", function () {
        $(".nav-bar").toggleClass("change");
        $(".nav-bar").toggleClass("filter");
        $(".reszponziv-nav-tarolo").toggleClass("reszponziv-nav-tarolo-hatter");
    });
    $(".elso-oldal-nav").on("click", function () {
        $(".masodik-kartya").removeClass("kartya-animacio");
    });
    $(".masodik-oldal-nav").on("click", function () {
        $(".masodik-kartya").addClass("kartya-animacio");
    });
    $(".harmadik-oldal-nav").on("click", function () {
        $(".masodik-kartya").removeClass("kartya-animacio");
    });
    $(".elso-kartya-1-cim").css("display","none");
    $(".elso-kartya-1").mouseleave(function(){
        setTimeout(de, 2000);
    })

});
function de(){
    $(".elso-kartya-1-cim").css("display","none");
}

