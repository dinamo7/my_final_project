(function ($) {
    var $btnTouch = $("#touch-menu");
    var $menu = $("#menu");

    $($btnTouch).click( function () {
        $menu.toggleClass("margin-left-none");
    })
});