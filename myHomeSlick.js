$(window).load(function() {

    //flexslider responsive carousel image slider.
    $(".single-item").slick({
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        cssEase: "ease",
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        prevArrow: "<img class='a-left control-c prev slick-prev' style='width:30px; height: 30px; left:-30px;'src='images/leftArrow.png'>",
        nextArrow: "<img class='a-right control-c prev slick-next' style='width:30px; height: 30px; right:-30px;'src='images/rightArrow.png'>",
    });
});
