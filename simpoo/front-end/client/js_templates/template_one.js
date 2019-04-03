import slick from 'slick-carousel';

export default class TemplateOne {
    constructor() {

    }

    run() {

    }

    slick_slider() {
        $('#right_info_slider').slick({

            prevArrow: $('.custom-arrow-prev'),
            nextArrow: $('.custom-arrow-next'),
            infinite: true,
            dots: true,
            autoplay: true,
            speed: 1000,
            autoplaySpeed: 4000,
            appendDots:$('.custom-dots'),
        });
        console.log(slick);
    }
}