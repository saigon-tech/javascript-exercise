$(function() {
    $('#backtotop').click(function(){
        $('html,body').animate({scrollTop:0},1000)
    });

    $(window).on("scroll", function() {
        var scroll1 = $(window).scrollTop();
        if (scroll1 >200) {
            $('#backtotop').css({visibility:'visible'});
            $('#backtotop').fadeIn (100);
        } else {
            $('#backtotop').css({visibility:'hidden'});
            $('#backtotop').fadeOut (100);
        }
    });

    $('.menu-icon').click(function() {
      $('body').toggleClass('menu-icon--active');  
    });
    $('.header__round i').click(function() {
      $(this).addClass('active');  
    });
    var slider__content = document.getElementById("mySlides");
    var dots = document.getElementsByClassName("dots");
    var image = ['slider01','slider02','slider03'];
    var i = 0;
    $('.next').click(function () {
        if(i === image.length - 1){
            i = 0;
        }
        else {
            i = i+1;
        }
        slider__content.innerHTML = '<img src="assets/img/'+image[i]+'.jpg">';
        var dotsCurent = $(".dots").eq(i);
        $(".dots").removeClass('active');
        dotsCurent.addClass('active');
    });
    $('.prev').click(function () {
        if(i === 0){
            i = image.length - 1 ;
        }
        else {
            i = i-1;
        }
        slider__content.innerHTML = '<img src="assets/img/'+image[i]+'.jpg">';
        var dotsCurent = $(".dots").eq(i);
        $(".dots").removeClass('active');
        dotsCurent.addClass('active');
    });
    $('.dots').click(function () {
        if(i === image.length - 1){
            i = 0;
        }
        else {
            i = i+1;
        }
        console.log(dots[i]);
        slider__content.innerHTML = '<img src="assets/img/'+image[i]+'.jpg">';
    });
});

function currentSlide(i) {
    var image = ['slider01','slider02','slider03'];
    var slider__content = document.getElementById("mySlides");
    var dotsCurent = $(".dots").eq(i-1);
    $(".dots").removeClass('active');
    dotsCurent.addClass('active');
    slider__content.innerHTML = '<img src="assets/img/'+image[i-1]+'.jpg">';
}
