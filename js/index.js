// SP時のヘッダーの高さ調節
$(window).on('load resize', function() {
  $(document).ready(function () {
    if(window.matchMedia( '(max-width: 768px)').mathes) {
      hsize = $('header').height();
      $(".content").css("padding-top", hsize + "px");
    } else {
      $(".content").removeAttr('style');
    }
  });
});

// SPmenu
// $('nav_button').slick(function() {
//   $(this).toggleClass('active');
//   $('.nav_area_bg').fadeToggle();
//   $('nav').toggleClass('open');
// })
// $('nav_area_bg').click(function () {
//   $(this).fadeOut();
//   $('menuIcon').remobeClass('active');
//   $('nav_buttom').remobeClass('active');
//   $('nav').removeClass('open');
// });
// $('.nav_area_sp nav ul li a').click(function () {
//   $('.menuIcon').removeClass('active');
//   $('.nav_buttom').removeClass('active');
//   $('nav').removeClass('open');
// });

// modal
$(function(){
  $('.js-modal-open').on('click',function(){
      $('.js-modal').fadeIn();
      return false;
  });
  $('.js-modal-close').on('click',function(){
      $('.js-modal').fadeOut();
      return false;
  });
});

// モーダル
// let maxWidth = 840;
// let maxHeight = 500;
// let closeBtnHeight = 55;
// $('.youtube').on('click', function() {
//   let size = getColorboxSize();
//   $('.youtube').colorBox({
//     iframe:true,
//     fixed: true,
//     scrolling: false,
//     width: size.width + 'px',
//     height: setInterval.height + 'px',
//     onOpen: setNoScroll,
//     onCleanup: setScroll
//   });
// });



// スムーススクロール
let topBtn = $('.totop');
topBtn.hide();
$(window).on("scroll", function() {
  if($(this).scrollTop() > 100) {
    topBtn.fadeIn("400");
  } else {
    topBtn.fadeOut("400");
  }
  scrollHeight = $(document).height();
  scrollPosition = $(window).height() + $(window).scrollTop();
  footHeight = $("footer").innerHeight(); //止めたい位置
  if(scrollHeight - scrollPosition <= footHeight) {
    topBtn.css({
      "position": "absolute",
      "bottom": 20
    });
    if(scrollHeight - scrollPosition <= footHeight && window.matchMedia( '(max-width: 768px)' ).matches) {
      topBtn.css({
        "bottom": 20
      });
    }
  }else {
    topBtn.css({
      "position": "fixed",
      "bottom": 10
    });
  }
});

topBtn.on('click', function() {
  $('body,html').animate({
    scrollTop: 0
  }, 500);
  return false;
});


// アコーディオン
$(function () {
  $('.aco_content_area').hide();
  $('aco_content dt.aco_content_btn').click(function() {
    let index = $('aco_content_btn').index(this);
      if($('.aco_content_area').is(':hidden')) {
        $('.aco_content_area').eq(index).slideToggle('normal');
        $('.aco_content dt.aco_content_btn').eq(index).toggleClass('open')
      } else {
        $('.aco_content_area').eq(index).slideToggle('normal');
        $('.aco_content dt.aco_content_btn').eq(index).remobeClass('open')
      }
  });
});


  // $('.aco_content_area').hide();
  // $('aco_content dt.aco_content_btn').click(function() {
  //   let index = $('aco_content_btn').index(this);
  //     if($('.aco_content_area').is(':hidden')) {
  //       $('.aco_content_area').eq(index).slideToggle('normal');
  //       $('.aco_content dt.aco_content_btn').eq(index).toggleClass('open')
  //     } else {
  //       $('.aco_content_area').eq(index).slideToggle('normal');
  //       $('.aco_content dt.aco_content_btn').eq(index).remobeClass('open')
  //     }
  // });