$(".slide-group") .slick({
    autoplay: true, // 자동재생
autoplaySpeed: 3000, // 간격시간
dots: true, // 동그라미버튼
pauseOnFocus: false, // 동그라미번호버튼 클릭시 자동실행 멈춤여부
prevArrow: '<button class="prev"><i class="fas fa-angle-left"></i></button>',
nextArrow: '<button class="next"><i class="fas fa-angle-right"></i></button>',
}) 

$('.article:nth-child(1) .slidebtn').on('click', function(){
    var $slidebtn = $(this).find('i')
    if($slidebtn.hasClass('fa-pause')){
        $('.slide-group').slick('slickPause')
        $slidebtn.removeClass('fa-pause').addClass('fa-play')
    } else{
        $('.slide-group').slick('slickPlay')
        $slidebtn.removeClass('fa-play').addClass('fa-pause')
    }
})