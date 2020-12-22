$(document).on('click', '[data-tab-nav]', function(e) {
    const $tab = $('[data-tabs]').find('[data-tab="' + $(this).data('tab-nav') + '"]');

    $('[data-tab]').removeClass('active');
    $('[data-tab-nav]').removeClass('active');

    $tab.addClass('active');
    $(this).addClass('active');
});