$(document).on('click', '[data-share]', function (event) {
    event.preventDefault();

    var share = '';

    var type = $(this).data('share'),
        currentUrl = encodeURIComponent($(this).attr('href')),
        postTitle = $('.post__internal__body__header__title').text();

    if (type === 'facebook') {
        share = 'https://www.facebook.com/sharer/sharer.php?u=' + currentUrl;
    } else if (type === 'twitter') {
        share = 'http://twitter.com/share?text=' + postTitle + '&url=' + currentUrl + '&hashtags=granito,granitoblog,granito';
    } else if (type === 'google-plus') {
        share = 'https://plus.google.com/share?url=' + currentUrl;
    } else if (type === 'linkedin') {
        share = 'https://www.linkedin.com/shareArticle?mini=true&url=' + currentUrl;
    }

    window.open(share, 'share-dialog', 'width=626, height=436');
})