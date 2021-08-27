$(function () {
$(".elso-oldal-nav").on("click", function () {
        $(".masodik-kartya").removeClass("kartya-animacio");
    });
    $(".masodik-oldal-nav").on("click", function () {
        $(".masodik-kartya").addClass("kartya-animacio");
    });
    $(".harmadik-oldal-nav").on("click", function () {
        $(".masodik-kartya").removeClass("kartya-animacio");
    });
});