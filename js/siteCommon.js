$(function () {
/*   $('nav>ul .item').mouseenter(function () {
    $(this).find('.sub-menu').show()
    $(this).siblings().find('.sub-menu').hide()
  }) */
  // 公共頁面加載
   $('#top').load('../common/common.jsp')





  $('#marquee2').slide({
    scrollLen: 1,
    effect: 'scrollx',
    auto: true,
    seamless: true,
    interval: 1000,
    lazyload: true

  })


  $('.messageR').click(function () {
    console.log('test')
  })
})
