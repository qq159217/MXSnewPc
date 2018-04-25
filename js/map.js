$(document).ready(function () {
  var map = new AMap.Map('container', {
    resizeEnable: true,
    center: [120.095442, 30.310185], // 地图中心点
    zoom: 18
  // 地图显示的缩放级别
  })
  var marker = new AMap.Marker({ // 添加自定义点标记
    map: map,
    position: [120.095442, 30.310185], // 基点位置
    offset: new AMap.Pixel(-50, -40), // 相对于基点的偏移位置
    draggable: false, // 是否可拖动
    content: '<div class="marker-route marker-marker-bus-from"></div>' // 自定义点标记覆盖物内容
  })
});
