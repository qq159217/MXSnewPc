$(function () {
	$("#top").load("./site/common/common.html")

  // 導航欄
  $('nav>ul .item').mouseenter(function () {
    $(this).find('.sub-menu').show()
    $(this).siblings().find('.sub-menu').hide()
  })

  $('#top_homepage').load('../site/common/common.html')

  $('#dowebok').fullpage({
    menu: '#topNav',
    css3: true,
    scrollingSpeed: 700,
    autoScrolling: true,
    navigation: true,
    lazyLoading:true,
    parallax: true

  })

  // 表單提交
  $('#feedbackBtn').click(function () {
    function p (s) {
      return s < 10 ? '0' + s : s
    }

    function GetNowTime () {
      var myDate = new Date()
      var year = myDate.getFullYear()
      var month = myDate.getMonth() + 1
      var date = myDate.getDate()
      var h = myDate.getHours()
      var m = myDate.getMinutes().toString().substring(0, 2)
      var s = 0
      return year + '-' + p(month) + '-' + p(date) + ' ' + p(h) + ':' + p(m)
    }

    var phoneNumber = $('#ph').val()
    console.log(phoneNumber)
    var requireData = $.md5('mixiusi' + GetNowTime() + phoneNumber)

    $('#hide').attr('value', requireData)
    var newData = $('#feedbackForm').serialize()
    $.ajax({
      type: 'POST',
      url: 'http://47.98.164.44:8081/feedback/addFeedback',
      data: newData,
      success: function (result) {
        if (result.code = '0000') {
          console.log('加盟成功')
          window.location.href = '../submit_success/submitSucseccfully.html'
          $('#reset').reset()
        } else if (result.code = '0001') {
          console.log('代碼執行異常')
        } else if (result.code = '0002') {
          console.log('电话号码格式錯誤')
          $('#ph').HTML('电话号码格式错误')
        } else if (result.code = '0003') {
          console.log('用戶名為空')
          $('#nickName').HTML('用戶名為空')
        } else if (result.code = '0004') {
          $('#email').HTML('郵箱格式錯誤')
          console.log('郵箱格式錯誤')
        } else {
          console.log('描述信息为空')
          $('#advice').HTML('描述信息错误')
        }
      },
      error: function () {
        console.log('加盟失敗')
      }
    })
  })
})
