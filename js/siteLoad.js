$(function () {


  

  // 公共頁面加載
   $('#top').load('../common/common.html')
//    反饋界面提交

        // 表單提交
        $("#submitBtn").click(function () {

            function p(s) {
                return s < 10 ? '0' + s : s;
            }

            function GetNowTime() {
                var myDate = new Date();
                var year = myDate.getFullYear();
                var month = myDate.getMonth() + 1;
                var date = myDate.getDate();
                var h = myDate.getHours();
                var m = myDate.getMinutes();
                var s = myDate.getSeconds();
                return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
            }

            let requireData = $.md5("mixiusi" + GetNowTime());

            $("#hide").attr("value", requireData);
            let newData = $('#feedbackForm').serialize();
            $.ajax({
                type: "POST",
                url: 'http://mixiusi.com.cn:8081/feedback/addFeedback',
                data: newData,
                success: function (result) {

                    window.location.href =
                        "./site/submit_success/submitSucseccfully.html";

                },


            });






        });





  // $('#marquee2').slide({
  //   scrollLen: 1,
  //   effect: 'scrollx',
  //   auto: true,
  //   seamless: true,
  //   interval: 1000,
  //   lazyload: true

  // })



})