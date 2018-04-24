$('nav>ul .item').mouseenter(function () {
  $(this).find('.sub-menu').show()
// $(this).siblings().find('.sub-menu').hide()
})
$('nav>ul .item').mouseleave(function () {
  // $(this).find('.sub-menu').show()
  $(this).siblings().find('.sub-menu').hide()
})





// success 返回首页

