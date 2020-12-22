var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('videoPlayer', {
        height: '1280',
        width: '720',
        videoId: ''
    });
}

$(document).on('click', '[data-video]', function (e) {
    var gaLabel  = $(this).data('ga-label');

    var url = $(this).data('video'),
        videoCode = url.split('=')[1];

    if (player !== undefined) {
        player.loadVideoById(videoCode);
        player.playVideo();

        dataLayer.push({
            'event': 'gaEvent',
            'eventCategory': 'Interação com vídeo',
            'eventAction': 'Play',
            'eventLabel': gaLabel
        });

        $('#videoModal').modal('show');
        $('#videoModal').attr('data-ga-label', gaLabel);
    }
});

$('#videoModal').on('hide.bs.modal', function (e) {
    var gaLabel = $(this).data('ga-label');

    if (player !== undefined) {
        var percentageWatched = Math.round(player.getCurrentTime() * 100 / player.getDuration());

        player.stopVideo();

        dataLayer.push({
            'event': 'gaEvent',
            'eventCategory': 'Interação com vídeo',
            'eventAction': 'Stop',
            'eventLabel': gaLabel + ' - ' + percentageWatched + '%'
        });
    }
});