$(document).ready(function () {
    $('.hamburger').click(function () {

        $('nav').slideToggle(function () {
            $('nav li').css('display', 'inline');
            $('nav').css('float', 'right');
            $('nav ul').css('float', 'right');
            $('nav').css('padding', '0em');
        })

    })
});