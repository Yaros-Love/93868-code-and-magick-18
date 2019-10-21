'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
  var wizard = {
    onEyesChange: function () {},
    onCoatChange: function () {}
  };

  var getRandomColor = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  var wizardElement = document.querySelector('.setup-wizard');

  var wizardCoatElement = wizardElement.querySelector('.wizard-coat');
  wizardCoatElement.addEventListener('click', function () {
    var newColor = getRandomColor(COAT_COLORS);
    wizardCoatElement.style.fill = newColor;
    document.querySelector('input[name="coat-color"]').value = newColor;
    wizard.onCoatChange(newColor);
  });

  var wizardEyesElement = wizardElement.querySelector('.wizard-eyes');
  wizardEyesElement.addEventListener('click', function () {
    var newColor = getRandomColor(EYES_COLORS);
    wizardEyesElement.style.fill = newColor;
    document.querySelector('input[name="eyes-color"]').value = newColor;
    wizard.onEyesChange(newColor);
  });

  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  wizardFireballElement.addEventListener('click', function () {
    var newColor = getRandomColor(FIREBALL_COLORS);
    wizardFireballElement.style.backgroundColor = newColor;
    document.querySelector('input[name="fireball-color"]').value = newColor;
  });

  window.wizard = wizard;

  return wizard;

})();
