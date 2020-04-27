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

  const tabsContainer = $(`a[href='#${tabName}']`).closest('.tabs');
  // .tabs__menu liのうちtabNameに該当するものにだけactiveクラスを付ける
  tabsContainer.find('.tabs__menu li').removeClass('active');
  tabsContainer
    .find(`.tabs__menu a[href='#${tabName}']`)
    .parent('li')
    .addClass('active');

  // .tabs__contentの直下の要素をすべて非表示
  tabsContainer.find('.tabs__content > *').css({ display: 'none' });
  // #<tabName>と.tabs__content .<tabName>を表示
  tabsContainer
    .find(`#${tabName}, .tabs__content .${tabName}`)
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


/**
 * -------------
 * パララックス関連
 * -------------
 */

// 背景画像のスクロール速度。数字が小さいほど速い。
const parallaxXSpeed = 12;
const parallaxYSpeed = 3;
const parallaxXSpeedSmall = 5;
const parallaxYSpeedSmall = 1;

// パララックスを適用する関数
const showParallax = () => {
  const scrollTop = $(window).scrollTop();

  // 背景画像の位置をスクロールに合わせて変える
  const offsetX = Math.round(scrollTop / parallaxXSpeed);
  const offsetY = Math.round(scrollTop / parallaxYSpeed);
  const offsetXSmall = Math.round(scrollTop / parallaxXSpeedSmall);
  const offsetYSmall = Math.round(scrollTop / parallaxYSpeedSmall);

  $('.aboutme').css({
    'background-position':
      // 一番上
      `${-offsetX}px ${-offsetY}px, ${
        // 上から2番目
        offsetXSmall
      }px ${-offsetYSmall}px, `
      // 一番下
      + '0% 0%',
  });
};

// パララックスを初期化する関数
const initParallax = () => {
  $(window).off('scroll', showParallax);

  if (!isMobile) {
    // モバイルブラウザでなければパララックスを適用
    showParallax();

    // スクロールのたびにshowParallax関数を呼ぶ
    $(window).on('scroll', showParallax);
  }
};


/**
 * ------------------
 * イベントハンドラの登録
 * ------------------
 */

/**
 * animatedクラスを持つ要素が画面内に入ったら
 * Animate.cssのfadeInUpエフェクトを適用
 */
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {
      $(this.element).addClass('fadeInUp');
      this.destroy();
    }
  },
  /**
   * 要素の上端が画面のどの位置に来たときにhandlerメソッドを呼び出すか指定
   * 0%なら画面の一番上、100%なら画面の一番下に来たときに呼び出される
   */
  offset: '100%',
});

$(window).on('resize', () => {
  // ウインドウがリサイズされるとここが実行される
  initParallax();
});


// タブがクリックされたらコンテンツを表示
$('.tabs__menu a').on('click', (e) => {
  const tabName = $(e.currentTarget).attr('href');

  // hrefにページ遷移しない
  e.preventDefault();

  if (tabName[0] === '#') {
    // hrefの先頭の#を除いたものをshowTab()関数に渡す
    showTab(tabName.substring(1));
  }
});




// 初期状態として1番目のタブを表示
showTab('aboutme-1');

// パララックスを初期化する
initParallax();