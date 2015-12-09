$(document).ready(function () {
    $('.hamburger').click(function () {

        $('nav').slideToggle(function () {
            $('nav li').css('display', 'inline-block');
            $('nav').css('float', 'left');
            $('nav ul').css('float', 'left');
            $('nav').css('padding', '0em');
        })

    })
});