$(function () {
  $('#top').load('../common/common.html');

  $('#marquee2').slide({
    scrollLen: 1,
    effect: 'scrollx',
    auto: true,
    seamless: true,
    interval: 1000,
    lazyload: true

  })
})
