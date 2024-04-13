document.addEventListener('DOMContentLoaded', function(){
    $('.foodbev__slider').slick({
        arrows: false,
      });

    $('.arrow-left').on('click', function (e) {
        e.preventDefault()
        $('.foodbev__slider').slick('slickPrev')
    })
    $('.arrow-right').on('click', function (e) {
        e.preventDefault()
        $('.foodbev__slider').slick('slickNext')
    })
});