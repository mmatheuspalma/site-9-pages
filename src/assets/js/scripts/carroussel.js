$(document).ready(function () {
    if ($('.carousel-functions').length) {
        var swiper = new Swiper('.carousel-functions', {
            slidesPerView: 1,
            slidesPerColumn: 1,
            spaceBetween: 0,
            draggable:  true,
            speed: 1000,
            autoplay: {
                delay: 1000
            },
            pagination: {
                el: '.swiper-pagination',
                clickable: true
            },
            breakpoints: {
                600: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 15
                },
                770: {
                    slidesPerView: 1,
                    slidesPerColumn: 1,
                    spaceBetween: 20
                },
                800: {
                    slidesPerView: 1,
                    spaceBetween: 30
                },
                1000: {
                    slidesPerView: 1,
                    spaceBetween: 40
                }
            }
        });
    }
});
