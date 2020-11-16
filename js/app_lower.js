
//jQueryで実行する内容
jQuery(document).ready(function () {
  // トップのアニメーション

  $('.header__img').delay(500).queue(function () {
    $(this).addClass('show');
  });
  $('.header__ttl').delay(500).queue(function () {
    $(this).addClass('show');
  });
  $('.nav').delay(500).queue(function () {
    $(this).addClass('show');
  });



  // ハンバーガー
  $('.js-nav__menu--toggle').on('click', function () {
    $('.nav__menu--toggle').toggleClass('show');
    $('.sideber').toggleClass('show');
  });
  $('.js-sideber-off').on('click', function () {
    $('.nav__menu--toggle').toggleClass('show');
    $('.sideber').toggleClass('show');
  });


  function scroll_effect() {
    $('.js-fadein').each(function () {
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 100) {
        $(this).addClass('scrollin');
      }
    });


    $('h2').each(function () {
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 100) {
        $(this).addClass('scrollin');
      }
    });

    $('.js-fadein-children').children().each(function () {
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() - 100) {
        $(this).addClass('scrollin');
      }
    });

    $('.js-fadein-delay').children().each(function () {
      if ($(window).scrollTop() > $(this).offset().top - $(window).height() + 100) {
        $(this).addClass('scrollin');
      }
    });
  }

  //可視域で出現:fadein-merit
  window.addEventListener("load", function () {
    scroll_effect();
  });
  window.addEventListener('scroll', function () {
    scroll_effect()
  });

  // トップ画面　ふわっと出現
  $('.js-fadein-initial').delay(500).queue(function () {
    $(this).addClass('scrollin');
  });
  $('.js-fadein.-ini').delay(100).queue(function () {
    $(this).addClass('scrollin');
  });
  $('.js-fadein-delay.-ini').children().delay(1000).queue(function () {
    $(this).addClass('scrollin');
  });

  // スムーススクロール
  $('a[href^="#"]').click(function () {
    var speed = 500;
    var href = $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top - 10;
    $("html, body").animate({ scrollTop: position }, speed, "swing");
    return false;
  });
});
