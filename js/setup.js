'use strict';

(function () {
  var setup = document.querySelector('.setup');
  setup.querySelector('.setup-similar').classList.remove('hidden');

  var similarListElement = setup.querySelector('.setup-similar-list');
  similarListElement.appendChild(window.fragmentWizardsArray);

  var setupWizard = document.querySelector('.setup-wizard');
  var wizardCoat = setupWizard.querySelector('.wizard-coat');
  var wizardEyes = setupWizard.querySelector('.wizard-eyes');
  var setupFireBall = setup.querySelector('.setup-fireball-wrap');

  window.setup = {
    setup: setup,
    setupWizard: setupWizard,
    wizardCoat: wizardCoat,
    wizardEyes: wizardEyes,
    setupFireBall: setupFireBall
  };

  window.colorize(wizardCoat);
  window.colorize(wizardEyes);
  window.colorize(setupFireBall);
  //
  // var onWizardClick = function (evt, obj, color) {
  //   obj.style.fill = color;
  // };
  //
  // var onFireballClick = function (evt, obj, color) {
  //   obj.style.backgroundColor = color;
  // };
  //
  // wizardCoat.addEventListener('click', function (evt) {
  //   var color = getRandomItem(COAT_COLORS);
  //
  //   onWizardClick(evt, wizardCoat, color);
  //   setup.querySelector('input[name="coat-color"]').value = color;
  // }, true);
  //
  // wizardEyes.addEventListener('click', function (evt) {
  //   var color = getRandomItem(EYES_COLORS);
  //
  //   onWizardClick(evt, wizardEyes, color);
  //   setup.querySelector('input[name="eyes-color"]').value = color;
  // }, true);
  //
  // setupFireBall.addEventListener('click', function (evt) {
  //   var color = getRandomItem(FIREBALL_COLORS);
  //
  //   onFireballClick(evt, setupFireBall, color);
  //   setupFireBall.querySelector('input[name="fireball-color"]').value = color;
  // });
})();
