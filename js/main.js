/* global $ MobileDetect */

// モバイルブラウザかどうか判定
const isMobile = !!new MobileDetect(window.navigator.userAgent).mobile();

/**
 * ----------------------
 * 指定された名前のタブを表示
 * ----------------------
 */
 
const showTab = (tabName) => {
  // すでに表示されている場合は何もせずに終了
  if ($(`#${tabName}`).is(':visible')) {
    return;
  }

  const tabsContainer = $(`a[href='#${tabName}']`).closest('.content');
  // .thumbnails liのうちtabNameに該当するものにだけactiveクラスを付ける
  // 先にすべてのactiveを取る
  tabsContainer.find('.thumbnails ul li').removeClass('active');
  //activeをつける
  tabsContainer
    .find(`.thumbnails a[href='#${tabName}']`)
    .parent('li')
    .addClass('active');

  // .mainの直下の要素をすべて非表示
  tabsContainer.find('.main > *').css({ display: 'none' });
  tabsContainer.find('.descriptions > *').css({ display: 'none' });
  // #<tabName>と.main .<tabName>を表示
  tabsContainer
    .find(`#${tabName}, .main .${tabName}`)
    .css({
      display: 'block',
      opacity: 0.7,
    })
    .animate(
      {
        opacity: 1,
      },
      400,
    );
};


// タブがクリックされたらコンテンツを表示
$('.thumbnails ul li a').on('click', (e) => {
  const tabName = $(e.currentTarget).attr('href');
  // hrefにページ遷移しない
  e.preventDefault();

  if (tabName[0] === '#') {
    // hrefの先頭の#を除いたものをshowTab()関数に渡す
    showTab(tabName.substring(1));
  }
});


// 初期状態として1番目のタブを表示
showTab('aboutme_1');


// ボタンの表示／非表示を切り替える関数
const updateButton = () => {
  if ($(window).scrollTop() >= 450) {
    // 300px以上スクロールされた
    // ボタンを表示
    $('.back-to-top').fadeIn();
  } else {
    // ボタンを非表示
    $('.back-to-top').fadeOut();
  }
};

// スクロールされる度にupdateButtonを実行
$(window).on('scroll', updateButton);

// ボタンをクリックしたらページトップにスクロールする
$('.back-to-top').on('click', (e) => {
  // ボタンのhrefに遷移しない
  e.preventDefault();

  // 600ミリ秒かけてトップに戻る
  $('html, body').animate({ scrollTop: 0 }, 600);
});

// ページの途中でリロード（再読み込み）された場合でも、ボタンが表示されるようにする
updateButton();



// ハンバーガーメニュー
$(document).ready(function(){
  $(".sp_navi").click(function () { 
    $(".sp_menu").slideToggle();
  });
  // ハンバーガーメニューのリンクがクリックされた場合
  $(".sp_menu a").click(function () { 
    $(".sp_menu").slideToggle();
  });
  
  //ハンバーガーメニューを開いたまま834px以上にした場合、閉じる
  $(window).resize(function(){
    var windowW = $(window).width();//画面の横幅を取得
    //window幅が変化した際にドロップダウン状態か判定し、イベントを分岐
    windowW = $(window).width();
      
    if(windowW > 834){
    //834以上ならメニューを閉じる
      $(".sp_menu").css({display: 'none'});
    }
  });

});


// パララックスを初期化する
initParallax();