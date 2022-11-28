$('.main__slider').slick({
    prevArrow: '.slider__arrow__prev',
    nextArrow: '.slider__arrow__next',
    centerMode: true,
    centerPadding: '40px',
    slidesToShow:1,
    // autoplay: true,
    // autoplaySpeed: 3000
});


document.querySelector('.circle').innerHTML = "СМОТРЕТЬ ОТЗЫВ КОНСТАНТИНА".split('').map((e,i) => `<span style="--rot:${i*13}deg">${e}</span>`).join('');