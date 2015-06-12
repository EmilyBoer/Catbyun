$(document).ready(function () {

    if ((screen.width > 757)) {
        $(".navbar-collapse.collapse").css('display','none');
    }
    elseif ((screen.width < 991)) {

        $(".navbar-collapse.collapse").css('display', 'block');
    }

});