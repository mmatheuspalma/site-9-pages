$(document).on('click', '[data-load-more-posts]', function(event) {
    event.preventDefault();

    var formData    = new FormData();

    var $button     = $(this),
        $listPosts =  $('.posts__container__items'),
        $pagination = $('.pagination');

    var category = $button.data('load-more-posts'),
        page     = $button.data('load-more-posts-page'),
        size     = $button.data('load-more-posts-page-size'),
        offset   = $button.data('load-more-posts-page-offset'),
        theme    = $button.data('load-more-posts-theme');

    formData.append('cat', category);
    formData.append('page', page);
    formData.append('per_page', size);
    formData.append('offset', offset);
    formData.append('theme', theme);

    var $post = function (post) {
        var theme = (post.theme === "list") ? "__list" : "";

        return  '<div class="post__item ' + theme + '">' +
                    '<div class="post__item__body">' +
                        '<div class="post__item__body__image">' +
                            '<a href="' + post.permalink + '" title="' + post.title + '"></a>' +
                            '<img src="' + post.thumbnail + '" alt="' + post.title + '" title="' + post.title + '">' +
                        '</div>' +
                        '<div class="post__item__body__description">' +
                            '<span class="post__item__body__description__category">' +
                                '<a href="' + post.category_list + '" title="' + post.title + '">' +
                                    post.category +
                                '</a>' +
                            '</span>' +
                            '<h3 class="post__item__body__description__title">' + 
                                '<a href="' + post.permalink + '" title="' + post.title + '">' +
                                    post.title +
                                '</a>' +
                            '</h3>' +
                            '<div class="post__item__body__description__details">' +
                                '<span class="post__item__body__description__details__date">' +
                                    '<!--?xml version="1.0" encoding="utf-8"?--><!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 280 280" style="enable-background:new 0 0 280 280;" xml:space="preserve"><g><path d="M140,60.2c-10.6,0-19.2,8.6-19.2,19.2v41.6H79.3c-10.6,0-19.2,8.6-19.2,19.2c0,10.6,8.6,19.2,19.2,19.2H140c10.6,0,19.2-8.6,19.2-19.2V79.3C159.2,68.8,150.6,60.2,140,60.2z"></path><path d="M140,4C65,4,4,65,4,140c0,75,61,136,136,136c75,0,136-61,136-136C276,65,215,4,140,4z M140,237.7c-53.9,0-97.7-43.8-97.7-97.7c0-53.9,43.8-97.7,97.7-97.7c53.9,0,97.7,43.8,97.7,97.7C237.7,193.9,193.9,237.7,140,237.7z"></path></g></svg>' +
                                    post.date +                              
                                '</span>' +
                                '<span class="post__item__body__description__details__readtime">' +
                                    '<!--?xml version="1.0" encoding="utf-8"?--><!-- Generator: Adobe Illustrator 22.0.1, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --><svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512;" xml:space="preserve"><style type="text/css">.st0{fill:#F47023;}</style><g><g><g><polygon class="st0" points="307.3,119 204,119 256,197"></polygon><path class="st0" d="M424,82V40h44V0H44v40h44v42c0,3.9,1.2,7.8,3.4,11.1l108.5,162.8L89.4,418.8C87.2,422.1,86,426,86,430v42H44v40h424v-40h-44v-42c0-3.9-1.2-7.8-3.4-11.1L312,256L420.6,93.1C422.8,89.8,424,85.9,424,82z M384,75.9l-112.6,169c-4.5,6.7-4.5,15.5,0,22.2l112.6,169V472h-51.7L256,356l-77.3,116H126v-35.9l114.6-168.9c4.6-6.7,4.6-15.6,0.1-22.3L128,75.9V40h256V75.9z"></path></g></g></g></svg>' +
                                    post.readtime +
                                '</span>' +
                            '</div>' +
                        '</div>' +
                    '</div>' +
                '</div>';
    };

    $.ajax({
        type: 'GET',
        url: '/api/posts/list',
        data: new URLSearchParams(formData).toString(),
        dataType: 'JSON',
        success: function (response) {
            if (Object.keys(response).length) {
                $button.data('load-more-posts-page', page + 1);
                $button.data('load-more-posts-page-offset', Object.keys(response).length >= size ? (offset + size) : offset + Object.keys(response).length);

                Object.keys(response).forEach(function (index) {
                    if (index <= (size - 1)) {
                        $pagination.before($post(response[index]));
                    }
                });

                if (Object.keys(response).length < size) {
                    $pagination.hide();
                }
            } else {
                $pagination.hide();
            }
        },
        error: function () {
            console.error('Error on fetching more posts');
        }
    });
});