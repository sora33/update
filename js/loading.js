var images = document.getElementsByTagName('img'); // ページ内の画像取得
var percent = document.getElementById('percent-text'); // パーセントのテキスト部分
var gauge = document.getElementById('gauge'); // ゲージ
var loadingBg = document.getElementById('loadingBg'); // ローディング背景
var loading = document.getElementById('loading'); // ローディング要素
var imgCount = 0;
var baseCount = 0;
var gaugeMax = 400; // ゲージの幅指定
var current;

// 画像の読み込み
for (var i = 0; i < images.length; i++) {
  var img = new Image(); // 画像の作成
  // 画像読み込み完了したとき
  img.onload = function () {
    imgCount += 1;
  }
  // 画像読み込み失敗したとき
  img.onerror = function () {
    imgCount += 1;
  }
  img.src = images[i].src; // 画像にsrcを指定して読み込み開始
};

// ローディング処理
var nowLoading = setInterval(function () {
  if (baseCount <= imgCount) { // baseCountがimgCountを追い抜かないようにする
    // 現在の読み込み具合のパーセントを取得
    current = Math.floor(baseCount / images.length * 100) + 15;
    // パーセント表示の書き換え
    percent.innerHTML = ('000' + Math.min(current, 100)).slice(-3) + '％';
    // ゲージの変更
    // gauge.style.width = Math.floor(gaugeMax / 100 * current) + 'px';
    gauge.style.width = Math.floor(current - 15) + '%';
    baseCount += 1;
    // 全て読み込んだ時
    if (baseCount == images.length) {
      // ローディング要素の非表示
      loadingBg.style.opacity = '0';
      loadingBg.style.transform = 'translateX(-100%)';
      // loading.style.opacity = '0';
      // ローディングの終了
      clearInterval(nowLoading);
    }
  }
}, 200);
