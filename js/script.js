$('.main__slider').slick({
    prevArrow: '.slider__arrow__prev',
    nextArrow: '.slider__arrow__next',
    centerMode: true,
    centerPadding: '40px',
    slidesToShow:1,
    autoplay: true,
    autoplaySpeed: 3000
});

const circle = document.querySelectorAll('#circle');
circle.forEach(element => new CircleType(element));