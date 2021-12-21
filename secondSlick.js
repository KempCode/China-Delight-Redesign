$(window).load(function() {

    //flexslider responsive carousel image slider.
    $(".single-item").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease",
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: false,
    });

});
