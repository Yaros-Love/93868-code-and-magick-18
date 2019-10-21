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

    var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
    var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];

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
