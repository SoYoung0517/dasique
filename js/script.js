$(document).ready(function(){
    AOS.init();



    var swiper = new Swiper(".mySwiper", {
        loop: true,
        effect: "fade",
        autoplay: {
            delay: 2500
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      });

      
      var visionSwipe = new Swiper('.visionArea .s-swiper-container', {
        slidesPerView: "auto",
        spaceBetween: 30,
        navigation: {
            nextEl: '.visionArea .swiper-button-next',
            prevEl: '.visionArea .swiper-button-prev',
        },
        on: {
            slideChange: function () {
                $('.section-vision').attr('data-vision-swipe-index', visionSwipe.activeIndex);
            }
        },
        pagination: {
            el: '.swiper-pagination',
            type: 's-swiper-pagination',
        },
        breakpoints: {
            1280: {
    
            },
            768: {
    
            },
            500: {
                spaceBetween: 15,
            }
        },
    });





    var ww = $(window).width();
    media();
    
    function media(){
      if(ww >= 1200){
  
      //서브메뉴박스
      $('.menu li').mouseenter(function(){
  
        var result = $(this).attr('data-alt');
        $('.sub-menu').removeClass('active');
  
        $(`#${result}`).addClass('active');
  
        $('.sub-menu-box').stop().slideDown().addClass('active');
      });
  
      //서브메뉴박스에서 마우스리브되야 메뉴가 없어짐
      $('.sub-menu-box').mouseleave(function(){
        $(this).stop().slideUp().removeClass('active');
      });
    
   
      }else{
        //스크롤 이벤트
        $(window).scroll(function(){
          if($(window).scrollTop() > 300){
            $('.header-area').addClass('active');
            $('.haeder-logo').addClass('active');
          }else{
            $('.header-area').removeClass('active');
            $('.haeder-logo').removeClass('active');
          }
        });

        
  
  
  
        //햄버거버튼 메뉴 설정
        $('#hamburger').click(function(){
          $(this).toggleClass('active');
          $('nav').toggleClass('active');
        });
        
      }
  
      $(window).resize(function(){
        ww = $(window).width();
        media();
      });
  }
    


});//end