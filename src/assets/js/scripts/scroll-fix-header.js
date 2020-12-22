$(window).scroll(function(t){
    var $header = $('.header'),
        $firstChild = $('body').find('> section:first');

    var topDistance = 90;

    if ($header.length) {
        if ($(window).scrollTop() > topDistance) {
            $firstChild.addClass('fixed-header');
            $header.addClass('__fixed');
        } else {
            $firstChild.removeClass('fixed-header');
            $header.removeClass('__fixed');
        }
    }

    if ($(window).scrollTop() > topDistance + 60) {
        $('.posts__container__title.__category').addClass('__fixed');
    } else {
        $('.posts__container__title.__category').removeClass('__fixed');
    }
});

$(window).scroll(function(t){
    // var $header = $('.header.__blog'),
    //     $firstChild = $('body').find('> div:first');

    // var topDistance = 110;

    // if ($(window).scrollTop() > topDistance) {
    //     $firstChild.addClass('__fixed__header__blog');
    //     $header.addClass('__fixed');
    // } else {
    //     $firstChild.removeClass('__fixed__header__blog');
    //     $header.removeClass('__fixed');
    // }

    // if ($('.posts__container__title.__category').length) {
    //     if ($(window).scrollTop() > topDistance + 60 + 40) {
    //         $('.posts__container__title.__category').addClass('__fixed');

    //         $firstChild.removeClass('__fixed__header__blog');
    //         $firstChild.addClass('__fixed__header__blog__category');

    //         $('.posts__container__title.__category').css({ transform: 'translateY(' + $header.height() + 'px)' });
    //     } else {              
    //         $('.posts__container__title.__category').css({ transform: 'translateY(0px)' });        

    //         $('.posts__container__title.__category').removeClass('__fixed');

    //         $firstChild.removeClass('__fixed__header__blog__category'); 
    //     }
    // }

    if ($(window).width() > 768) {
        if ($('.post__internal__share').length) {
            if ($(window).scrollTop() > 510) {
                $('.post__internal__share ul').css({ 
                    position: 'absolute',
                    top: '0px',
                    left: '0px',
                    margin: '0px',
                    marginTop: $(window).scrollTop() - 490 +  'px'
                })
            } else {
                $('.post__internal__share ul').css({
                    position: 'relative',
                    marginTop: '0px'
                })
            }
        }

        if ($('.ad.__internal').length) {
            if ($(window).scrollTop() > 585 ) {
                $('.ad.__internal .ad__body').css({
                    position: 'absolute',
                    top: '0px',
                    left: '68px',
                    margin: '0px',
                    marginTop: $(window).scrollTop() - 585 + 'px'
                })
            } else {
                $('.ad.__internal .ad__body').css({
                    position: 'relative',
                    marginTop: '0px'
                })
            }
        }
    }
});