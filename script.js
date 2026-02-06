fetch('data.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        var gallery = document.getElementById('gallery');

        for (var i = 0; i < data.length; i++) {
            var item = data[i];
            var element = document.createElement('div');
            element.className = 'item';

            element.innerHTML = '<div class="image-wrapper">' +
                '<img src="' + item.image + '" alt="' + item.title + '">' +
                '</div>' +
                '<div class="info">' +
                '<div class="title">' + item.title + '</div>' +
                '<div class="description">' + item.description + '</div>' +
                '<div class="source">' + item.source + '</div>' +
                '</div>';

            gallery.appendChild(element);
        }
    })
    .catch(function (error) {
        console.error('Error loading data.json:', error);
    });