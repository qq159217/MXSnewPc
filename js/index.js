$(document).ready(function () {
  $('#dowebok').fullpage({
    navigation: true,
    css3: true,

    scrollingSpeed: 800,

    anchors: ['homePage', 'CompanyProfile', 'productDescription', 'joinCooperation', 'feedBack'],


    afterLoad: function (anchorLink, index) {}
  })
