$(document).ready(function () {
    dataLayer.push({
        'pageType': $('head title').text()
    });

    $(document).on('click', '[data-ga-cta]', function () {
        var gaAction = $(this).data('ga-action'),
            gaLabel  = $(this).data('ga-label');

        dataLayer.push({
            'event': 'gaEvent',
            'eventCategory': 'CTA',
            'eventAction': gaAction,
            'eventLabel': gaLabel.replace('</br>', ' ')
        });
    });

    $(document).on('click', '[data-ga-faq]', function () {
        var gaLabel = $(this).data('ga-label');

        dataLayer.push({
            'event': 'gaEvent',
            'eventCategory': 'FAQ',
            'eventAction': 'Click',
            'eventLabel': 'Resposta' + gaLabel
        });
    });

    $(document).on('click', '[data-ga-social]', function () {
        var gaLabel = $(this).data('ga-label');

        dataLayer.push({
            'event': 'gaEvent',
            'eventCategory': 'Interação redes sociais',
            'eventAction': 'Click',
            'eventLabel': gaLabel
        });
    });

    $(window).scroll(function (e) {
        var scrollPercent        = ($(window).scrollTop()) / ($(document).height() - $(window).height()),
            scrollPercentRounded = Math.round(scrollPercent * 100);

        if (scrollPercentRounded === 25 || scrollPercentRounded === 50 || scrollPercentRounded === 75 || scrollPercentRounded === 100) {
            if (!localStorage.getItem('scroll' + scrollPercentRounded)) {
                localStorage.setItem('scroll' + scrollPercentRounded, scrollPercentRounded);

                dataLayer.push({
                    'event': 'gaEvent',
                    'eventCategory': 'Scroll Tracking',
                    'eventAction': scrollPercentRounded + '%',
                    'eventLabel': location.href
                }); 
            }
        }       
    });
});