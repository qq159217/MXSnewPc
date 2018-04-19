$.validator.setDefaults({
         submitHandler: function () {
                 alert("您的信息我们已收到,工作人员三个工作日内会与您取得联系");
         }
});
//  let formSubmit = function (id, url) {
//          $('id').click(function () {
//                  $.ajax({
//                          type: "POST",
//                          url: url,
//                          data: $('#joinForm').serialize(),
//                          async: false,
//                          error: function (request) {
//                                  alert("加盟失败,亲稍后再试");
//                          },
//                          success: function (data) {
//                                  window.location.href = ".././../indexnew.html",
//                                          alert("您的信息我们已经收到,请耐心等待");
//                          };
//                  });
//          });
//  };