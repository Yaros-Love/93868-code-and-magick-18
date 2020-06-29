'use strict';

(function () {
  var PLAYERS_COUNT = window.const.PLAYERS_COUNT;//количество похожих персонажей
  var getRandomItem = window.util.getRandomItem;

  //ф-я полeчения массива с 4мя рандомными персами
  var getWizards = function (data) {
    var similarWizards = [];
    for (var i = 0; i < PLAYERS_COUNT; i++) {
      similarWizards.push(getRandomItem(data))
    }
    return similarWizards;
  }

  window.data = {
    getWizards: getWizards,
  }

})()