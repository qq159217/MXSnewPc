$(function () {


  

  // 公共頁面加載
   $('#top').load('../common/common.html')
//    加盟合作界面提交

        // 表單提交
        /* $("#btn").click(function () {
            // var pwd = $("#ipt").val();
            // var jm = $.md5(pwd)
            // console.log(pwd + "+++++++++")
            // console.log(jm + "+++++++++")

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
            var newData = $('#joinForm').serialize();
            console.log(newData)
            
          $.ajax({
                type: "POST",
                url: 'http://mixiusi.com.cn:8081/feedback/addFeedback',
                data: newData,
                success: function (response) {
                    console.log(newData)
                    console.log("加盟成功了哈! 等待客服聯繫.")
                    if(status=200){
                        window.location.href='./submit_success/submitSucseccfully.html'
                    }
                },
                error:function(request){
                    console.log(newData)
                    console.log("加盟失敗")
                }
            });
        }); */

// return honmepage

$("#returnHomepage").click(function(){
   
    window.location.replace("../../index.html")
})
})