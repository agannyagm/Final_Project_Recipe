(function () {
    // setup your carousels as you normally would using JS
    // or via data attributes according to the documentation
    // http://getbootstrap.com/javascript/#carousel
    //$('#carouselSnacks').carousel({ interval: 2000 });
    //$('#carouselABC').carousel({ interval: 3600 });
}());

(function () {
    $('.carousel-showmanymoveone .item').each(function () {
        var itemToClone = $(this);

        for (var i = 1; i < 4; i++) {
            itemToClone = itemToClone.next();

            // wrap around if at end of item collection
            if (!itemToClone.length) {
                itemToClone = $(this).siblings(':first');
            }

            // grab item, clone, add marker class, add to collection
            itemToClone.children(':first-child').clone()
              .addClass("cloneditem-" + (i))
              .appendTo($(this));
        }
    });
}());

$(document).ready(function () {
    $('.hamburger').click(function () {

        $('nav').slideToggle(function () {
            $('nav li').css('display', 'inline');
            $('nav').css('float', 'left');
            $('nav ul').css('float', 'left');
            $('nav').css('padding', '0em');
        })

    })
});