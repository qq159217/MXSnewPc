$(function () {
  $('#top').load('../common/common.html');

  $('#marquee2').slide({
    scrollLen: 1,
    effect: 'scrollx',
    auto: true,
    seamless: true,
    interval: 1000,
    lazyload: true

  });




  // 加盟注册表单提交
  $("#joinSubmit").click(function () {
    function p(s) {
      return s < 10 ? '0' + s : s;
    }

    function GetNowTime() {
      var myDate = new Date();
      //获取当前年
      var year = myDate.getFullYear();
      //获取当前月
      var month = myDate.getMonth() + 1;
      //获取当前日
      var date = myDate.getDate();
      var h = myDate.getHours(); //获取当前小时数(0-23)
      var m = myDate.getMinutes(); //获取当前分钟数(0-59)
      var s = myDate.getSeconds();
      return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
    }
    let requireData = $.md5("mixiusi" + GetNowTime());
    $("#hide").attr("value", requireData);
    // ceshi 
    let newData = $('joinForm').serialize();
    console.log(newData)
    $.ajax({
      type: "POST",
      url: "http://mixiusi.com.cn:8081/feedback/addFeedback",
      data: newData,
      success: function (result) {
        
        if (result.resultCode == 0000) {
          window.location.href = "../site/submit_success/submitSucseccfully.html";
        };
      },
    });
  });
});