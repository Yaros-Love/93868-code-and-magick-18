var CLOUD_WIDGTH = 420;
var CLOUD_HEIGTH = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;

//функция - рисуем облако-вывод результатов
var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDGTH, CLOUD_HEIGTH)
}


window.renderStatistics = function (ctx, names, times) {
  //рисуем тень
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.3)')
  //рисуем облако
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff')
}
