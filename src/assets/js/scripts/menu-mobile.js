$(document).on("click", ".header__nav ul li", function (e) {
    e.stopPropagation();
});

$(document).on("click", "body", function (e) {
    $('.header__menu__mobile').removeClass('active');
    $('.header__nav').removeClass('open');

    if (!$('header').hasClass('__fixed') && !$('header').hasClass('__blog')) {
        $('.header').addClass('__transparent');
    }
});

$(document).on("click", ".header__menu__mobile", function (e) {
    e.stopPropagation();

    $(this).toggleClass('active');

    $('.header__nav').toggleClass('open');
    $('.header').toggleClass('__transparent');
});

$(document).on("click", ".__has-submenu", function (e) {
    $(this).toggleClass('active');
});