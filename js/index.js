$(function () {
//   $('#top').load('./site/common/common.html')

  // 導航欄
  $('nav>ul .item').mousemove(function () {
    $(this).find('.sub-menu').show()
    $(this).siblings().find('.sub-menu').hide()
  })

  //  全屏滚动

  $('#dowebok').fullpage({
    // menu: '.topNav',
    css3: true,
    verticalCentered:true,
    scrollingSpeed:300,
    menu: true,
    // navigation:true,
    navigationTooltips:[],
    // anchors: ['firstPage', 'secondPage', 'thirdPage', 'fourthPage', 'fifthPage', 'sixthPage'],
    loopBottom:true,
    // loopTop:true,
    autoScrolling:true,
    lazyLoading: true,
    // responsiveHeight:900


  })

  // 表單提交
  function p(s) {
    return s < 10 ? '0' + s : s;
}

function GetNowTime() {
    var myDate = new Date()
    var year = myDate.getFullYear()
    var month = myDate.getMonth() + 1
    var date = myDate.getDate()
    var h = myDate.getHours()
    var m = myDate.getMinutes().toString().substring(0, 2)
    var s = 0
    return year + '-' + p(month) + '-' + p(date) + ' ' + p(h) + ':' + p(m)
}




$("#feedbackBtn").click(function () {
    var phoneNumber = $("#ph").val()
    console.log(phoneNumber + "电话")
    var requireData = $.md5('mixiusi' + GetNowTime() + phoneNumber)
    console.log(requireData + "加密后的token")
    $('#hide').attr('value', requireData)
    var newData = $('#feedbackForm').serialize()
    console.log(newData + "序列化数据")


    $.ajax({
        type: 'POST',
        url: 'http://mixiusi.com.cn:8081/feedback/addFeedback',
        data: newData,
        success: function (result) {
            if (result.code = '0001') {
                console.log('反馈成功')
                window.location.href = '../site/submit_success/submitSucseccfully.html'
                $('#reset').reset()
            }
        },

        error: function (response) {
            console.log("error" + "请,重新尝试")


        }


    })

});
 



})
