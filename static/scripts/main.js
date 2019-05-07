$(document).ready( function() {
    $('navbar').show();
})
$(window).scroll(function(e) {
    // add/remove class to navbar when scrolling to hide/show
    // add/remove active class on the nav-links to show where user is on the web page
    var scroll = $(window).scrollTop();
    if (scroll < 100) {
        $('.navbar').addClass("navbar-hide");
        $('nav a.active').removeClass('active');
        $('nav a:first').addClass('active');
    } else {
        $('.navbar').removeClass("navbar-hide");
        $('.wrapper').each(function(i) {
            if (this['id'] == 'contactMe' && $(this).position().top <= scroll+500) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            } else if ($(this).position().top <= scroll + 70) {
                $('nav a.active').removeClass('active');
                $('nav a').eq(i).addClass('active');
            }
        })
    }
});