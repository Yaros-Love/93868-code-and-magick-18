'use strict';

//модуль renderWizards
(function () {
  var setupSimilarElem = document.querySelector('.setup-similar');//блок с похожими магами
  setupSimilarElem.classList.remove('hidden');
  var setupSimilarList = document.querySelector('.setup-similar-list'); //элемент с похожими магами
  //находим шаблон мага
  var similarWizardTemplate = document.querySelector('#similar-wizard-template');
  var setupSimilarItem = similarWizardTemplate.content.querySelector('.setup-similar-item');

  //функция добавления шаблона с персами в разметку
  var createWizards = function (playersArray) {
    for (var i = 0; i < playersArray.length; i++) {
      var wizardItem = setupSimilarItem.cloneNode(true);
      wizardItem.querySelector('.setup-similar-label').textContent = playersArray[i].name;
      wizardItem.querySelector('.wizard-coat').style.fill = playersArray[i].colorCoat;
      wizardItem.querySelector('.wizard-eyes').style.fill = playersArray[i].colorEyes;
      setupSimilarList.appendChild(wizardItem);
    }
  };

  window.render_wizards = {
    createWizards: createWizards,
  };
}
)();

