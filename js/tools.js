$().ready(function () {

  // 提交表单

  /* $('#btn').click(function () {
    $.ajax({
      type: 'POST',
      url: 'http://47.98.164.44:8081/joinUs/addJoiner',
      data: $('#joinForm').serialize(),

      success: function (data, textStatus) {
        console.log(data.code)

        // data.code = 000 → 重定向到首页
        //  其他的提示相应的信息错误,

        switch (data.code) {
          case '0000':
            // alert("加盟成功")
            window.location.href =
              '../submit_success/submitSucseccfully.html'
            break
          case '0001':
            alert('服务器异常')
            break
          case '0002':
            alert('用户名为空')
            break
          case '0002':
            alert('手机号格式错误')

            break
          case '0004':
            alert('邮箱格式错误')
            break
          default:
            alert('留言不为空')
            break
        }
      }
    })
  })() */

  // 時間格式化
  function p (s) {
    return s < 10 ? '0' + s : s
  }

  function GetNowTime () {
    var myDate = new Date()
    // 获取当前年
    var year = myDate.getFullYear()
    // 获取当前月
    var month = myDate.getMonth() + 1
    // 获取当前日
    var date = myDate.getDate()
    var h = myDate.getHours(); // 获取当前小时数(0-23)
    var m = myDate.getMinutes(); // 获取当前分钟数(0-59)
    var s = myDate.getSeconds()
    return year + '-' + p(month) + '-' + p(date) + ' ' + p(h) + ':' + p(m) + ':' + p(s)
  }

  // hidden 

  //   郵箱格斯驗證
  emailCheck = $('#email').blur(function () {
    var email = $('#email).val()
    if (email == '') {
      alert('请输入您的邮箱')
      return
    }else if (email != '') {
      var reg = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      isok = reg.test(email)
      if (!isok) {
        alert('邮箱格式不正确，请重新输入！')
        return false
      }
    }
    alert('ok 输入正确')
  })
})

// 加盟合作 表单验证
/* $("#joinForm").validate({
	onfocusout: function (element) {
		$(element).valid()
	},
	rules: {
		userName: {
			required: true,
			minlength: 1
		},
		phoneNumber: "required",
		email: {
			required: true,
			email: true
		},
	},
	message: {
		username: {
			required: "请输入用户名",
			minlength: "用户名必需由两个字母组成"
		}
	}
}) */

/* let getFormJson = function (frm) {
  var o = {}
  var a = $(frm).serializeArray()
  $.each(a, function () {
    if (o[this.name] !== undefined) {
      if (!o[this.name].push) {
        o[this.name] = [o[this.name]]
      }
      o[this.name].push(this.value || '')
    } else {
      o[this.name] = this.value || ''
    }
  })

  return o
}
var getKeyvalue = function (getFormJson) {}
console.log(getFormJson(feedbackForm)) */
