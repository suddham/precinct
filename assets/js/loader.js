/*Author Henry Wolfestein*/
$(document).ready(function() {
    $(window).load(function() {
        if ($('.iS-Loading').length != 0) {
            $('.iS-Loading').fadeOut(500);
        }
    });
    if($('.iS-IE9').length > 0 && $('.iS-Loading').length != 0) {
        setInterval(function(){
            $('.iS-Loadingboxbar').eq(0).delay(0).animate({marginTop: 12, marginBottom: 12, height: 4},500).animate({marginTop: 0, marginBottom: 0, height: 30},500);
            $('.iS-Loadingboxbar').eq(1).delay(100).animate({marginTop: 12, marginBottom: 12, height: 4},500).animate({marginTop: 0, marginBottom: 0, height: 30},500);
            $('.iS-Loadingboxbar').eq(2).delay(200).animate({marginTop: 12, marginBottom: 12, height: 4},500).animate({marginTop: 0, marginBottom: 0, height: 30},500);
            $('.iS-Loadingboxbar').eq(3).delay(300).animate({marginTop: 12, marginBottom: 12, height: 4},500).animate({marginTop: 0, marginBottom: 0, height: 30},500);
        },1350);
    }
});
