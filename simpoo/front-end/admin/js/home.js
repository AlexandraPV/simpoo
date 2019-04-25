import $ from 'jquery';
import Flickity from 'flickity';

export default class Home {
    constructor() {
        this.btn_mobile = $('.js-mobile-menu');
    }

    init() {
        const jQueryBridget = require('jquery-bridget');
        const Flickity = require('flickity');
        jQueryBridget('flickity', Flickity, $);
        this.init_slider();
        this.toggle_mobile_menu(this.btn_mobile);

    }
    toggle_mobile_menu(btn){
        let height_menu_fix = $('.menu_ul li').first().innerHeight() * 5;
        let counter_click = 0;
        let height_menu = 0;
        btn.on('click', function(e){
            counter_click++;
            if(counter_click%2 === 1){
                height_menu = height_menu_fix;
            } else{
                height_menu = 0;
            }
            $('.menu_ul').css({
                'height': height_menu + 'px'
            });
            $('.menu_ul').toggleClass('visible');
            console.log();
        });
        // console.log(btn);
    }

    init_slider() {
        $('.slide--parent').flickity({
            imagesLoaded: true,
            wrapAround: true,
            autoPlay: false,
            pauseAutoPlayOnHover: false
        });
    }


}