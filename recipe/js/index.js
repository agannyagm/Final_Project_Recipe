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