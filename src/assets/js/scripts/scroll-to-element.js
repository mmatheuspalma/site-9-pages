var scrollElement = {
    to : function(element) {
        var $header = this.getHeaderHeight();

        $('html, body').stop().animate({
            scrollTop: ($(element).offset().top + 1) - $header
        }, 500);
    },
    all : function () {
        return $('[data-scroll-to]');
    },
    getHeaderHeight : function () {
        return $('header').length ? $('header').innerHeight() : 0;
    },
    setFirstAsActive : function () {
        return this.setActive('[data-scroll-to=1]');
    },
    setActive : function (element) {
        return $('[data-scroll-to]').removeClass('active') && $(element).addClass('active') 
    },
    setCurrent : function() {
        var $this = this;

        $this.all().each((index, element) => {
            var $element       = $(element);
            var elementScroll  = $element.data('scroll-to');
            var $elementTarget = $('[data-scroll-order=' + elementScroll + ']');

            var scrollTop = $(window).scrollTop() + $this.getHeaderHeight();

            if (scrollTop >= ($elementTarget.offset().top + 1) && scrollTop <= $elementTarget.offset().top + $elementTarget.innerHeight()) { 
                $this.setActive($element);                
            }            
        });
    },
    enumerateSections : (mainSection) => {
        var totalSections = $(mainSection).find('>');

        totalSections.each((index, element) => {
            $(element).attr('data-scroll-order', index);
        });
    }
}

$(document).on('click', '[scroll-to]', function (event) {
    event.preventDefault();

    var element = $(this).attr('scroll-to') || '[data-scroll-order=' + $(this).data('scroll-to') + ']';
    
    setTimeout(() => {
        $(element).find('input:first').focus();    
    }, 500);

    scrollElement.to($(element));
});

$(window).scroll(() => { 
    scrollElement.setCurrent();
});

$(document).ready(() => {
    scrollElement.setFirstAsActive();
    scrollElement.enumerateSections('.body-container');
});