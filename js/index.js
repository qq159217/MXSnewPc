$(function () {


	// 導航欄
	$('nav>ul .item').mouseenter(function () {
		$(this).find('.sub-menu').show()
		$(this).siblings().find('.sub-menu').hide()
	})
})


$("#top_homepage").load("../site/common/common.html")

// feedback 表單提交
// $("#feedbackBtn").click(function () {

// 	function p(s) {
// 		return s < 10 ? '0' + s : s;
// 	}

// 	function GetNowTime() {
// 		var myDate = new Date();
// 		//获取当前年
// 		var year = myDate.getFullYear();
// 		//获取当前月
// 		var month = myDate.getMonth() + 1;
// 		//获取当前日
// 		var date = myDate.getDate();
// 		var h = myDate.getHours(); //获取当前小时数(0-23)
// 		var m = myDate.getMinutes(); //获取当前分钟数(0-59)
// 		var s = myDate.getSeconds();
// 		return year + '-' + p(month) + "-" + p(date) + " " + p(h) + ':' + p(m) + ":" + p(s);
// 	}

// 	let requireData = $.md5("mixiusi" + GetNowTime());

// 	$("#hide").attr("value", requireData);

// 	// ceshi 
// 	let newData = $('#feedbackForm').serialize();
// 	console.log(newData)



// 	$.ajax({

// 		type: "POST",
// 		url: 'http://mixiusi.com.cn:8081/feedback/addFeedback',
// 		data: newData,
// 		success: function (result) {
// 			// console.log(result); 
// 			if (result.resultCode == 0000) {
// 				window.location.href = "./site/submit_success/submitSucseccfully.html";
// 			};
// 		},


// 	});



	// 加盟合作form 提交
	








})