$(document).ready(function(){
    //윈도우에 load, resize 이벤트 설정
    $(window).on('load resize',function(){
        //윈도우의 가로길이를 bodyw변수에 저장
        var bodyW=$(this).width();
        //만약 윈도우의 가로길이가 1000보다 작으면 (태블릿, 모바일버전) 세로 아코디언 메뉴
        if(bodyW <= 1000){


        //만약 윈도우의 가로길이가 1000보다 크거나 같으면 (pc버전) 가로 메뉴
        }else{
            //주메뉴에 마우스오버시 이벤트 설정
            $('header nav').hover(function(){
                //서브메뉴 내려옴
                $('header nav .sub').stop().slideDown(300);
                //서브메뉴 배경 내려옴
                $('.sub_bg').stop().slideDown(300);
                //header_wrap에 active 설정
                $('.header_wrap').addClass('active');
            }, function(){
                //서브메뉴 올라감
                $('.sub').stop().slideUp(300);
                //서브메뉴 배경 올라감
                $('.sub_bg').stop().slideUp(300);
                //header_wrap에 active 제거
                $('.header_wrap').removeClass('active');
            });
            //아코디언 갤러리
            $('.acc_item').click(function(){
                $('.acc_item').removeClass('active');
                $(this).addClass('active');
            });
            //아코디언 갤러리 안의 swiper 슬라이드
            var accSwiper1=new Swiper('.accSwiper1',{
                effect:'fade',
                pagination:{
                    el:'.acc_item .swiper-pagination',
                    clickable:true
                },
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false
                }
            });
            var accSwiper2=new Swiper('.accSwiper2',{
                effect:'fade',
                pagination:{
                    el:'.acc_item .swiper-pagination',
                    clickable:true
                },
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false
                }
            });
            var accSwiper3=new Swiper('.accSwiper3',{
                effect:'fade',
                pagination:{
                    el:'.acc_item .swiper-pagination',
                    clickable:true
                },
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false
                }
            });
            var accSwiper4=new Swiper('.accSwiper4',{
                effect:'fade',
                pagination:{
                    el:'.acc_item .swiper-pagination',
                    clickable:true
                },
                autoplay:{
                    delay:3000,
                    disableOnInteraction:false
                }
            });
            //아코디언 갤러리를 클릭하면 그 안의 swiper자식개체 자동 슬라이드
            accSwiper1.autoplay.stop();
            accSwiper2.autoplay.stop();
            accSwiper3.autoplay.start();
            accSwiper4.autoplay.stop();
            $('.accSwiper1').hide();
            $('.accSwiper2').hide();
            $('.accSwiper3').show();
            $('.accSwiper4').hide();

            $('.acc1').click(function(){
                accSwiper1.slideTo(0,0,false);
                accSwiper1.autoplay.start();
                accSwiper2.autoplay.stop();
                accSwiper3.autoplay.stop();
                accSwiper4.autoplay.stop();
                $('.accSwiper1').show();
                $('.accSwiper2').hide();
                $('.accSwiper3').hide();
                $('.accSwiper4').hide();
            });
            $('.acc2').click(function(){
                accSwiper2.slideTo(0,0,false);
                accSwiper2.autoplay.start();
                accSwiper1.autoplay.stop();
                accSwiper3.autoplay.stop();
                accSwiper4.autoplay.stop();
                $('.accSwiper2').show();
                $('.accSwiper1').hide();
                $('.accSwiper3').hide();
                $('.accSwiper4').hide();
            });
            $('.acc3').click(function(){
                accSwiper3.slideTo(0,0,false);
                accSwiper3.autoplay.start();
                accSwiper1.autoplay.stop();
                accSwiper2.autoplay.stop();
                accSwiper4.autoplay.stop();
                $('.accSwiper3').show();
                $('.accSwiper1').hide();
                $('.accSwiper2').hide();
                $('.accSwiper4').hide();
            });
            $('.acc4').click(function(){
                accSwiper4.slideTo(0,0,false);
                accSwiper4.autoplay.start();
                accSwiper1.autoplay.stop();
                accSwiper2.autoplay.stop();
                accSwiper3.autoplay.stop();
                $('.accSwiper4').show();
                $('.accSwiper1').hide();
                $('.accSwiper2').hide();
                $('.accSwiper3').hide();
            });

            //sitemap
            $('.sitemap .site_logo img').attr('scr', 'img/logo.png');
            $('.site_close a img').attr('scr','img/close.png');
        }
    });//load resize 이벤트

    //화면이 스크롤되어서 첫번째 section이 지나가면 header에 active 설정
    $(window).scroll(function(){
        //윈도우의 scrollTop값은 top변수에 저장
        var top=$(this).scrollTop();
        //만약 top변수의 값이 0보다 크면 header에 active 설정
        if(top > 0){
            $('header').addClass('active');
        //top변수의 값이 0보다 작거나 같으면 header에 active 제거
        }else{
            $('header').removeClass('active');
        }
        //각 section 안의 객체들 애니메이션
        //각 section 영역의 위쪽 위치값을 구해서 각 변수에 저장
        var sTop1=$('section.s2').offset().top-400;
        var sTop2=$('section.s3').offset().top-600;
        var sTop3=$('section.s4').offset().top-600;
        var sTop4=$('section.s5').offset().top-600;
        var sTop5=$('section.s6').offset().top-600;
        var sTop6=$('section.s7').offset().top-600;
        //만약 각 section의 위쪽 위치값이 window의 scrollTop값보다 작으면
        //&& ('그리고')라는 뜻의 논리 연산자, 조건2개 모두 true일 때 실행
        if(sTop1 < top && top < sTop2){
            $('.info_txt').addClass('active');
            $('.info_img').addClass('active');
        }
        if(sTop2 < top && top < sTop3){
            $('.s3 .fade_animation').addClass('active');
            $('.s3 .up_animation').addClass('active');
        }
        if(sTop3 < top && top < sTop4){
            $('.s4 .fade_animation').addClass('active');
            $('.s4 .s4_ani1').addClass('active');
            $('.s4 .s4_ani2').addClass('active');
            $('.s4 .s4_ani3').addClass('active');
            $('.s4 .s4_ani4').addClass('active');
        }
        if(sTop4 < top && top < sTop5){
            $('.s5 .up_animation').addClass('active');
        }
        if(sTop5 < top && top < sTop6){
            $('.s6 .up_animation').addClass('active');
        }
        if(sTop6 < top){
            $('.s7 .up_animation').addClass('active');
        }
    });

    //header에 마우스오버시 header에 active설정
    $('header').hover(function(){
        $('.header_wrap').addClass('active');
    }, function(){
        $('.header_wrap').removeClass('active');
    });

    //main swiper slide
    var swiper = new Swiper(".mySwiper", {
        effect:'fade',
        loop:true,
        autoplay: {
          delay: 4000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

    //movie list swiper slide
    var swiper2 = new Swiper(".mySwiper2", {
        slidesPerView: 4,
        spaceBetween: 10,
        loop:true,
    });

    //accordion gallery
    $('.acc_item').click(function(){
        $('.acc_item').removeClass('active');
        $(this).addClass('active');
    });

    //family site
    var on=0;
    $('.family .fa_btn').click(function(){
        if(on==0){
            on=1;
            $('.family').addClass('active');
        }else{
            on=0;
            $('.family').removeClass('active');
        }
        return false;
    });

    //top btn
    $('.top').click(function(){
        $('html, body').animate({'scrollTop':0})
    });

    //menu button click - sitemap show
    $('.menu').click(function(){
        $('.sitemap').addClass('active');
        return false;
    });
    //close button click - sitemap hidden
    $('.site_close').click(function(){
        $('.sitemap').removeClass('active');
        return false;
    });
    

});