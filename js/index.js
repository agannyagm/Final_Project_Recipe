(function () {
    // setup your carousels as you normally would using JS
    // or via data attributes according to the documentation
    // http://getbootstrap.com/javascript/#carousel
    //$('#carouselSnacks').carousel({ interval: 2000 });
    //$('#carouselABC').carousel({ interval: 3600 });
}());

//carousel the image to be slided 
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

//hamburger icon for the header navigation
$(document).ready(function () {
    $('.hamburger').click(function () {

        $('nav').slideToggle(function () {
            $('header nav li').css('display', 'inline');
            $('footer nav').css('display', 'inline');
            $('header nav').css('float', 'right');
            $('header nav ul').css('float', 'right');
            $('header nav').css('padding', '0em');
        })

    })
});