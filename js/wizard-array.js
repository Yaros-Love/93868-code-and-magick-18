'use strict';

(function () {
  var getRandomItem = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  var createWizardsArray = function () {
    var WIZARD_AMOUNT = 4;
    var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
    var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

    var COAT_COLORS = window.colorize.COAT_COLORS;
    var EYES_COLORS = window.colorize.EYES_COLORS;

    var wizardsArray = [];
    for (var i = 0; i < WIZARD_AMOUNT; i++) {
      wizardsArray.push(
          {
            name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
            colorCoat: getRandomItem(COAT_COLORS),
            colorEyes: getRandomItem(EYES_COLORS)
          }
      );
    }
    return wizardsArray;
  };
  var wizards = createWizardsArray();

  window.wizardArr = {
    wizards: wizards
  };
})();
