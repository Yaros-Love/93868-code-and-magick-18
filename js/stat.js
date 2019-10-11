'use strict';

(function () {
  var CLOUD_WIDTH = 420;
  var CLOUD_HEIGHT = 270;
  var CLOUD_X = 100;
  var CLOUD_Y = 10;
  var CLOUD_SHADOW = 10;
  var LINE_WIDTH = 30;
  var GAP = 50;
  var FONT_GAP = 10;
  var textX = CLOUD_X + FONT_GAP * 2;
  var textY = CLOUD_Y + FONT_GAP * 3;
  var TEXT_WIDTH = 40;
  var TEXT_HEIGHT = 20;
  var BAR_HEIGHT = 150;
  var BAR_WIDTH = 40;

  var renderCloud = function (ctx, x, y, color) {
    ctx.beginPath();
    ctx.rect(x + LINE_WIDTH / 2, y + LINE_WIDTH / 2, CLOUD_WIDTH - LINE_WIDTH, CLOUD_HEIGHT - LINE_WIDTH);
    ctx.fillStyle = color;
    ctx.fill();
    ctx.strokeStyle = color;
    ctx.lineJoin = 'round';
    ctx.lineWidth = LINE_WIDTH;
    ctx.stroke();
  };

  var getMaxElement = function (arr) {
    var maxElement;

    if (arr.length === 0) {
      maxElement = 0;
    } else {
      maxElement = arr[0];
      for (var i = 1; i < arr.length; i++) {
        if (arr[i] > maxElement) {
          maxElement = arr[i];
        }
      }
    }
    return maxElement;
  };

  var renderStatistics = function (ctx, names, times) {
    renderCloud(ctx, CLOUD_X + CLOUD_SHADOW, CLOUD_Y + CLOUD_SHADOW, 'rgba(0, 0, 0, 0.7)');
    renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

    ctx.fillStyle = '#000';

    ctx.font = '16px PT Mono';
    ctx.fillText('Ура вы победили!', textX, textY);
    ctx.fillText('Список результатов:', textX, textY + TEXT_HEIGHT);

    var maxTime = Math.round(getMaxElement(times));

    for (var i = 0; i < names.length; i++) {
      ctx.fillStyle = '#000';
      ctx.fillText(names[i], CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, textY + TEXT_HEIGHT + (FONT_GAP * 3) + TEXT_HEIGHT + BAR_HEIGHT);

      if (names[i] === 'Вы') {
        ctx.fillStyle = 'rgba(255, 0, 0, 1)';
      } else {
        ctx.fillStyle = 'hsl(247, ' + Math.ceil(Math.random() * 100) + '%' + ', 50%)';
      }
      ctx.fillRect(CLOUD_X + GAP + (TEXT_WIDTH + GAP) * i, textY + TEXT_HEIGHT + (FONT_GAP * 3) + BAR_HEIGHT, BAR_WIDTH, -(BAR_HEIGHT * times[i]) / maxTime);
    }
  };

  window.stat = {
    renderStatistics: renderStatistics
  };
})();
