// 漢字だけ大きく
// document.getElementById('js-kanji').innerHTML = document.getElementById('js-kanji').innerHTML.replace(/([\u4E00-\u9FFF])/gi, "<font class=kanji>$1</font>");




//jQueryで実行する内容
jQuery(document).ready(function () {
  // トップのアニメーション

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

  //マウスストーカー用のdivを取得
  const stalker = document.getElementById('stalker');

  //aタグにホバー中かどうかの判別フラグ
  let hovFlag = false;

  //マウスに追従させる処理 （リンクに吸い付いてる時は除外する）
  document.addEventListener('mousemove', function (e) {
    if (!hovFlag) {
      stalker.style.transform = 'translate(' + e.clientX + 'px, ' + e.clientY + 'px)';
    }
  });
  //リンクへ吸い付く処理
  const linkElem = document.querySelectorAll('a:not(.no_stick_)');
  for (let i = 0; i < linkElem.length; i++) {
    //マウスホバー時
    linkElem[i].addEventListener('mouseover', function (e) {
      hovFlag = true;

      //マウスストーカーにクラスをつける
      stalker.classList.add('hov_');

      //マウスストーカーの位置をリンクの中心に固定
      let rect = e.target.getBoundingClientRect();
      let posX = rect.left + (rect.width / 2);
      let posY = rect.top + (rect.height / 2);

      stalker.style.transform = 'translate(' + posX + 'px, ' + posY + 'px)';

    });
    //マウスホバー解除時
    linkElem[i].addEventListener('mouseout', function (e) {
      hovFlag = false;
      stalker.classList.remove('hov_');
    });
  }

});

$(window).on('load', function () {
  // トップのアニメーション

  $('.nav').delay(500).queue(function () {
    $(this).addClass('show');
  });
});
