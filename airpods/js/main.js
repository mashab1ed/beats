$('.latest__sliders').slick({
   arrows:false,
   
    slidesToShow: 2,
  });
  $('.latest__prev').on('click', function (e) {
    e.preventDefault()
    $('.latest__sliders').slick('slickPrev')
})

$('.latest__next').on('click', function (e) {
    e.preventDefault()
    
$('.latest__sliders').slick('slickNext')





})