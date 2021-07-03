$(function () {
    $(".hamburger-menu").on("click", function () {
        $(".nav-bar").toggleClass("change");
        $(".nav-bar").toggleClass("filter");
        $(".reszponziv-nav-tarolo").toggleClass("reszponziv-nav-tarolo-hatter");
    });
    $(".elso-oldal-nav").on("click", function () {
        $(".masodik-kartya").removeClass("kartya-animacio");
        $(".harmadik-kartya").removeClass("kartya-animacio");
    });
    $(".masodik-oldal-nav").on("click", function () {
        $(".harmadik-kartya").removeClass("kartya-animacio");
        $(".masodik-kartya").addClass("kartya-animacio");
    });
    $(".harmadik-oldal-nav").on("click", function () {
        $(".harmadik-kartya").addClass("kartya-animacio");
        $(".masodik-kartya").removeClass("kartya-animacio");
    });
});


