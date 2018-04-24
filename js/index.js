$(document).ready(function () {
  
	function checkSubmitPhoneNumber(id) {
	  if ($("id").val() == "") {
	    alert("手机号码不能为空！");
	    //$("#moileMsg").html("<font color='red'>手机号码不能为空！</font>"); 
	    $("id").focus();
	    return false;
    }
    
  

    $('nav>ul .item').mouseenter(function () {
      $(this).find('.sub-menu').show();
    });
    $('nav>ul .item').mouseleave(function () {
      $(this).siblings().find('.sub-menu').hide()
    });
















});