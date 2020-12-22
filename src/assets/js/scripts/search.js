function replaceSpecialChars(string) {
    var specialChars = [
        'Š', 'š', 'Đ', 'đ', 'Ž', 'ž', 'Č', 'č', 'Ć', 'ć',
        'À', 'Á', 'Â', 'Ã', 'Ä', 'Å', 'Æ', 'Ç', 'È', 'É',
        'Ê', 'Ë', 'Ì', 'Í', 'Î', 'Ï', 'Ñ', 'Ò', 'Ó', 'Ô',
        'Õ', 'Ö', 'Ø', 'Ù', 'Ú', 'Û', 'Ü', 'Ý', 'Þ', 'ß',
        'à', 'á', 'â', 'ã', 'ä', 'å', 'æ', 'ç', 'è', 'é',
        'ê', 'ë', 'ì', 'í', 'î', 'ï', 'ð', 'ñ', 'ò', 'ó',
        'ô', 'õ', 'ö', 'ø', 'ù', 'ú', 'û', 'ý', 'ý', 'þ',
        'ÿ', 'Ŕ', 'ŕ'
    ];

    var correctChars = [
        'S', 's', 'Dj', 'dj', 'Z', 'z', 'C', 'c', 'C', 'c',
        'A', 'A', 'A', 'A', 'A', 'A', 'A', 'C', 'E', 'E',
        'E', 'E', 'I', 'I', 'I', 'I', 'N', 'O', 'O', 'O',
        'O', 'O', 'O', 'U', 'U', 'U', 'U', 'Y', 'B', 'S',
        'a', 'a', 'a', 'a', 'a', 'a', 'a', 'c', 'e', 'e',
        'e', 'e', 'i', 'i', 'i', 'i', 'o', 'n', 'o', 'o',
        'o', 'o', 'o', 'o', 'u', 'u', 'u', 'y', 'y', 'b',
        'y', 'R', 'r'
    ]

    for (var i = 0; i < string.length; i++) {
        if (specialChars.indexOf(string.charAt(i)) > -1) {
            string = string.replace(string.charAt(i), correctChars[specialChars.indexOf(string.charAt(i))])
        }
    }

    return string.toLowerCase().split(' ').join('-');
}


$(document).on('submit', '[data-search]', function(e) {
    e.preventDefault();

    var filtredSearch = replaceSpecialChars($('input[type=search]').val());

    window.location.href = '/blog/busca/' + filtredSearch;
})