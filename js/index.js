$(document).ready(function () {
  $('#box').fullpage({
    navigation: true,
    css3: true,
    // verticalCentered: ture,
    scrollingSpeed: 800,
    // menu: false,
    anchors: ['homePage', 'CompanyProfile', 'productDescription', 'joinCooperation', 'feedBack'],
    // menu: '#box',
    // loopBottom: true,
    // scrollOverflow: true,

    sectionsColor: ['#ccc', '#4BBFC3', '#aadd', '#f90', '#ccc', '#fff'],
    afterLoad: function (anchorLink, index) {}
  })
})
