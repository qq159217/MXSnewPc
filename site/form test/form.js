$(function () {

  function p(s) {
    return s < 10 ? '0' + s : s
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
  
  $('#btn').click(function (e) {
    e.preventDefault()

    var phoneNumber = $('#phoneNumber').val()
   var encipher = $.md5('mixiusi' + GetNowTime() + phoneNumber)
    console.log(encipher + "数据加密" + "电话号码" + phoneNumber) 
    // 添加token

    $("#hide").attr("value", encipher);


    var newData = $("#joinForm").serialize();

    console.log(newData)

    $.ajax({
      type: "post",
      url: 'http://47.98.164.44:8081/joinUs/addJoiner',
      data: newData,
      success: function (data) {
        console.log(data)
        if (data.code = '0000') {
          console.log("加盟成功")
          console.log(data)
          window.location.href = "../submit_success/submitSucseccfully.html"
          $("#reset").reset()

        }
      },

      error: function (data) {
        console.log("加盟失败" + data)

        if (data.code = "0002") {
          alert("手机格式错误")
        } else if (data.code = "0003") {
          alert("用户名必填")
        } else if (data.code = "0004") {
          alert("邮箱格式错误")
        } else {
          alert("留言必填")
        }

      }

    }); 

  });
  $("#top").load("../common/common.html")
  
})