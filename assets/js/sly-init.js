$(document).ready(function() {
    'use strict';


    var sly = new Sly().init();
    var $frame = $('#basic'), scrolled= false;

//    sly.activate(1); // Activates 2nd element
//    sly.reload();    // Reload Sly
    $(window).resize(function (e) {
        $frame.sly('reload');
    });


    (function () {
        // Call Sly on frame

        $frame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 0,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 1,
            scrollBar: $frame.parent().find('.scrollbar'),
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 50000,
            elasticBounds: 1,
            easing: 'linear',
            dragHandle: 1,
            dynamicHandle: 0,
            clickBar: 1
        })



    }());

    var $secondFrame = $('#basic-1');
//    sly.activate(1); // Activates 2nd element
//    sly.reload();    // Reload Sly
    $(window).resize(function (e) {
        $secondFrame.sly('reload');
    });
    (function () {
        // Call Sly on frame
        $secondFrame.sly({
            horizontal: 1,
            itemNav: 'basic',
            smart: 1,
            activateOn: 'click',
            mouseDragging: 1,
            touchDragging: 1,
            releaseSwing: 1,
            startAt: 1,
            scrollBar: $secondFrame.parent().find('.scrollbar'),
            scrollBy: 1,
            activatePageOn: 'click',
            speed: 50000,
            elasticBounds: 1,
            easing: 'linear',
            dragHandle: 1,
            dynamicHandle: 0,
            clickBar: 1
        })
    }());

    if(!scrolled) {
        scrolled  = true;
        $(window).scroll(function(){
            $frame.sly('reload');
            $secondFrame.sly('reload');
        });
    }

});

