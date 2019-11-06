'use strict';

(function () {
  var colorize = window.colorize.colorize;
  var insertWizards = window.renderWizard.insertWizards;
  var load = window.backend.load;

  var setup = document.querySelector('.setup');

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireBall = setup.querySelector('.setup-fireball-wrap');

  var similarListElement = setup.querySelector('.setup-similar-list');

  var successHandler = function (data) {
    similarListElement.appendChild(insertWizards(data));
    setup.querySelector('.setup-similar').classList.remove('hidden');
  };

  var errorHandler = function () {
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';

    node.textContent = 'Произошла шибка соединения';
    document.body.insertAdjacentElement('afterbegin', node);
  };

  load(successHandler, errorHandler);

  colorize(wizardCoat);
  colorize(wizardEyes);
  colorize(setupFireBall);

  window.setup = {
    setup: setup,
    setupWizard: setupWizard,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    setupFireBall: setupFireBall,
    errorHandler: errorHandler,
    successHandler: successHandler
  };
})();
