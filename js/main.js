
var owl = $('.owl-carousel');
owl.owlCarousel({
    center: true,
    loop: true,
    margin: 30,
    startPosition: 1,
    items: 3
});
// Go to the next item
$('.slider__btn').click(function() {
    owl.trigger('prev.owl.carousel');
})

