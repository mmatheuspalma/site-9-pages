$(document).on("click", "[data-accordeon]", function (e) {
    if ($(this).hasClass('active')) {
        $(this).removeClass('active');
    } else {
        $('[data-accordeon]').removeClass('active');
        $(this).addClass('active');
    }
});