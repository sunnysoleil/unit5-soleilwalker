baguetteBox.run('.gallery', {
    animation: 'fadeIn',
    noScrollbars: true,
    captions: function(element) {
        return element.getElementsByTagName('img')[0].alt;
    }
});


