'use strict';

(function () {
  var colorize = window.colorize.colorize;
  var insertWizards = window.renderWizard.insertWizards;
  var wizards = window.wizardArr.wizards;

  var setup = document.querySelector('.setup');
  setup.querySelector('.setup-similar').classList.remove('hidden');

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireBall = setup.querySelector('.setup-fireball-wrap');

  var similarListElement = setup.querySelector('.setup-similar-list');
  similarListElement.appendChild(insertWizards(wizards));


  colorize(wizardCoat);
  colorize(wizardEyes);
  colorize(setupFireBall);

  window.setup = {
    setup: setup,
    setupWizard: setupWizard,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    setupFireBall: setupFireBall
  };
})();
