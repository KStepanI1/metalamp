import "./carousel-slider.scss"
import "slick-carousel/slick/slick"

$(document).ready(function () {
    $('.carousel-slider').slick({
        arrows: true,
        dots: true,
        draggable: false
    })
})