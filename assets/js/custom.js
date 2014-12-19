$(document).ready(function() {
    'use strict';

    var //home and about us variables
        scroll = $(window).scrollHeight,
        home_slide_1 = $('#home-slide-1'),
        home_slide_2 = $('#home-slide-2'),
        about = $('#about'),
        renderWow, renderWowHide, whereAmI,
        runOnce = false,
        scrolled = false, timeoutSpl, timeoutAbt,
        homeOffsetHeight = $(document).scrollTop(),
        about_slide_1 = $('#about-slide-1'),
        about_slide_2 = $('#about-slide-2'),

        //init Slick carousel variable
        activeCarousel, slickInit, subMenu, carouselId,

        //print button variables
        grabImage, jpegFile, pdfFile,

        //location variables
        locationRun = false,
        slyRun1 = false,
        slyRun2 = false,
        diff,
        locationSlide1 = $('#location-slide1'),
        locationSlide2 = $('#location-slide2'),
        locationDiv= $('#location');



    //smooth scroll
    $('a').smoothScroll({
        easing: 'swing',
        speed: 600
    });

    whereAmI = function () {
        return $('.apex-primary-menu-container li.active a').attr('href')
    };

    //wow.js function to init
    renderWow = function(args, kwargs) {
        setTimeout(function () {
            args.attr('data-wow-duration', '3s').addClass('wow fadeOut');
            kwargs.css('display', 'initial');
        }, 500);
    };

    renderWowHide = function(args, kwargs) {
        setTimeout(function () {
            args.attr('data-wow-duration', '3s').addClass('wow fadeOut');
            kwargs.css('display', 'initial');
//            args.hide();
        }, 500);
    };

    //home page slider switch if scroll is to the top/first visit
    $(window).load(function(){
        if (homeOffsetHeight == 0) {
            setTimeout(function(){
                renderWow(home_slide_2, home_slide_1);
            }, 2000);

        } else { //run on bg scroll
            if(!runOnce) {
                $(document).scroll(function () {
                    clearTimeout(timeoutSpl);
                    timeoutSpl = setTimeout(function() {
                        if ($(this).scrollTop() == 0) {
                            runOnce = true;
                            renderWow(home_slide_2, home_slide_1);
                        }
                    }, 100);
                });
            }
        }
    });


    //on click home button
    $('.click-home-btn').on('click', function (){
        setTimeout(function() {
            home_slide_2.hide();
            about_slide_1.hide();
        }, 5000);
    });
//    if(home_slide_1.css('display')) {
//
//    }


    //about us on scroll, display second background div
    if (!scrolled) {
        $(document).scroll(function () {
            clearTimeout(timeoutAbt);
            timeoutAbt = setTimeout(function () {
                //scrolling from top to bottom, if scroll offset is larger than 982
                if (($(this).scrollTop() >= innerHeight) && !scrolled) {
                    setTimeout(function () {
                        scrolled = true;
                        renderWow(about_slide_1, about_slide_2);
                    }, 1000);

                } //scrolling from bottom to top difference less than 5
                if (($(this).scrollTop() - innerHeight >= 5) && !scrolled) {
                    setTimeout(function () {
                        scrolled = true;
                        renderWow(about_slide_1, about_slide_2);
                    }, 1000);
                }
            }, 100);
        });
    }


    //arch sly slider width hack
//    if($(window).width() > 1450) {
//        $('#basic').parent().find('.handle').addClass('width-hack-fix');
//        setInterval(function(){
//            var style = window.getComputedStyle($('.width-hack-fix').get(0));  // Need the DOM object
//            var matrix = new WebKitCSSMatrix(style.webkitTransform);
////            matrix = matrix.m41 * 1.5;
////            ('.width-hack-fix').css('transform', ''+matrix);
//            matrix.m41 = matrix.m41 * 1.5;
//            ('.width-hack-fix').css("transform", "translateZ(0px) translateX("+matrix.m41+"px)");
//            console.log(matrix.m41);
//        }, 1000);
//    }





    //floor-plans-slick init

    slickInit = function(args) {
        $(args).slick({
            dots: true,
            arrows: true
        });
    };
    activeCarousel = "#groundfloor";
    slickInit(activeCarousel);

    subMenu = $('.floor-sub-menu');
    subMenu.on('click', function() {

        // generic active class
        subMenu.removeClass('is-now-active');
        $(this).addClass('is-now-active');

        //slickInit with href tag
        carouselId= $(this).attr('href');


        activeCarousel =  carouselId;
        $('.slick-carousel').removeClass('is-active');
        $(activeCarousel).addClass('is-active');
        slickInit(activeCarousel);
    });


    //print button
    $('.print-btn').on('click', function() {
        console.log('button works');

        grabImage = ($('.is-active').find('.slick-active'));
        jpegFile = grabImage.find('img').attr('src');
        pdfFile = jpegFile.replace('-min.jpg', '.pdf');
        window.open(pdfFile);
    });



    //location-slick init

    slickInit("#location-carousel");

    //if location offset == certainHeight show,
    //else


        $(document).scroll(function(){

            if (!locationRun && whereAmI() === '#location') {
                locationRun = true;
                setTimeout(function () {
                    renderWowHide(locationSlide1, locationSlide2);
                }, 2000);
            }

            if (!slyRun1 && whereAmI() === '#architecture') {
                slyRun1 = true;
                $('#basic').sly('slideBy', 2);
            }
            if (!slyRun2 && whereAmI() === '#interiors') {
                slyRun2 = true;
                $('#basic-1').sly('slideBy', 2);
            }


        });


    $('.slick-prev').click(function () {
        if (locationRun) {
            $('.hide-slide').hide()
        }
    });
    $('.slick-next').click(function () {
        if (locationRun) {
            $('.hide-slide').hide()
        }
    });

    //add classes to style section-location slick buttons as it loads on the DOM
    locationDiv.find('.slick-prev').addClass('left-fix');
    locationDiv.find('.slick-next').addClass('right-fix');
    locationDiv.find('.slick-dots').addClass('button-style-fix');


    var windowWidth, location1 = $('#location-slide1') , location2 = $('#location-slide2'), tabMap = $('#map-page'), localPage = $('#local-page');
    $(window).resize(function(){
        windowWidth = $(window).width();
        //desktop resize
        if(windowWidth > 1009){
            location1.removeAttr('src');
            location1.attr('src', "assets/images/hacks/connecting-bw.jpg");
            location2.removeAttr('src');
            location2.attr('src', "assets/images/hacks/connecting-color.jpg");

            tabMap.removeAttr('src');
            tabMap.attr('src', "assets/images/hacks/map.jpg");

            localPage.removeAttr('src');
            localPage.attr('src', "assets/images/hacks/local-connections.jpg");
        }
        //tablet resize
        else if(windowWidth < 1009 && windowWidth > 769){
            location1.removeAttr('src');
            location1.attr('src', "assets/images/hacks/tablet-connecting-bw.jpg");
            location2.removeAttr('src');
            location2.attr('src', "assets/images/hacks/tablet-connecting-color.jpg");

            tabMap.removeAttr('src');
            tabMap.attr('src', "assets/images/hacks/tablet-map.jpg");

            localPage.removeAttr('src');
            localPage.attr('src', "assets/images/hacks/tablet-local.jpg");
        }
        //mobile
        else if(windowWidth < 600){
            location1.removeAttr('src');
            location1.attr('src', "assets/images/hacks/mobile-connecting-bw.jpg");
            location2.removeAttr('src');
            location2.attr('src', "assets/images/hacks/mobile-connecting-color.jpg");

            tabMap.removeAttr('src');
            tabMap.attr('src', "assets/images/hacks/mobile-map.jpg");

            localPage.removeAttr('src');
            localPage.attr('src', "assets/images/hacks/mobile-local.jpg");
        }
    });

        //on initial non re-sized load browser width
        windowWidth = $(window).width();
        if(windowWidth < 1009 && windowWidth > 769){
            location1.removeAttr('src');
            location1.attr('src', "assets/images/hacks/tablet-connecting-bw.jpg");
            location2.removeAttr('src');
            location2.attr('src', "assets/images/hacks/tablet-connecting-color.jpg");

            tabMap.removeAttr('src');
            tabMap.attr('src', "assets/images/hacks/tablet-map.jpg");

            localPage.removeAttr('src');
            localPage.attr('src', "assets/images/hacks/tablet-local.jpg");
        }
        //mobile
        if(windowWidth < 600){
            location1.removeAttr('src');
            location1.attr('src', "assets/images/hacks/mobile-connecting-bw.jpg");
            location2.removeAttr('src');
            location2.attr('src', "assets/images/hacks/mobile-connecting-color.jpg");

            tabMap.removeAttr('src');
            tabMap.attr('src', "assets/images/hacks/mobile-map.jpg");

            localPage.removeAttr('src');
            localPage.attr('src', "assets/images/hacks/mobile-local.jpg");
        }


    /*************************
    browser hacks
    *************************/
    var ua = window.navigator.userAgent,
    msie = ua.indexOf('MSIE '),
    firefox = typeof InstallTrigger !== 'undefined',
    trident = ua.indexOf('Trident/'), //newer ie
    ieNum = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);


    if (firefox) {
        $('#location-slide1').css('top', '20%');
        $('#location-slide2').css('top', '20%');

        if($(window).width() <= 768){

        }

    }

    //ie
    if (ieNum == 9) {
        home_slide_2.fadeOut();
        home_slide_1.fadeIn();
        about_slide_1.fadeOut();
        about_slide_2.fadeIn();
    } else if (ieNum == 10) {

        home_slide_2.fadeOut();
        home_slide_1.fadeIn();
        about_slide_1.fadeOut();
        about_slide_2.fadeIn();

    } else { //ie 11

    }


});