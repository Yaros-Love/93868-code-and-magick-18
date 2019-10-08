'use strict';

window.fragmentWizardsArray = (function () {
  var WIZARD_AMOUNT = 4;
  var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];

  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomItem = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  var createWizardsArray = function () {
    var wizardsArray = [];
    for (var i = 0; i < WIZARD_AMOUNT; i++) {
      wizardsArray.push(
          {
            name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
            coatColor: getRandomItem(window.colorizeColorArr.COAT_COLORS),
            eyesColor: getRandomItem(window.colorizeColorArr.EYES_COLORS)
          }
      );
    }
    return wizardsArray;
  };
  var wizards = createWizardsArray();

  var renderWizard = function (wizard) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
    wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
    wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

    return wizardElement;
  };

  var fragment = document.createDocumentFragment();
  for (var i = 0; i < wizards.length; i++) {
    fragment.appendChild(renderWizard(wizards[i]));
  }

  return fragment;
})();
