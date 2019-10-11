'use strict';

(function () {
  var similarWizardTemplate = document.querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (item) {
    var wizardElement = similarWizardTemplate.cloneNode(true);

    wizardElement.querySelector('.wizard-coat').style.fill = item.colorCoat;
    wizardElement.querySelector('.wizard-eyes').style.fill = item.colorEyes;
    wizardElement.querySelector('.setup-similar-label').textContent = item.name;


    return wizardElement;
  };

  var insertWizards = function (arr) {
    var fragment = document.createDocumentFragment();

    for (var i = 0; i < 4; i++) {
      fragment.appendChild(renderWizard(arr[i]));
    }

    return fragment;
  };


  window.renderWizard = {
    insertWizards: insertWizards,
    renderWizard: renderWizard
  };
})();
