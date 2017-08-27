(function ($) {

    var $btnBack = $("#backToLogin");
    var $btnAdd = $(".show-registration-btn");
    var $sectionSignUp = $("#registration-id");
    var $sectionLogin = $("#login");


    $($btnAdd).click( function () {
        $sectionSignUp.toggleClass("hide-form");
        $sectionLogin.toggleClass("hide-form")
    });

    $($btnBack).click( function () {
        $sectionSignUp.toggleClass("hide-form");
        $sectionLogin.toggleClass("hide-form")
    });


})(jQuery);
