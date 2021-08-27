$(function () {
    $(".hamburger-menu").on("click", function () {
        $(".nav-bar").toggleClass("change");
        $(".nav-bar").toggleClass("filter");
        $(".reszponziv-nav-tarolo").toggleClass("reszponziv-nav-tarolo-hatter");
    });
});

