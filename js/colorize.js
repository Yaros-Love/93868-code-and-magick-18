'use strict';

(function () {
  var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  window.colorizeColorArr = {
    COAT_COLORS: COAT_COLORS,
    EYES_COLORS: EYES_COLORS
  };

  var getRandomColor = function (arr) {
    var random = Math.floor(Math.random() * arr.length);
    return arr[random];
  };

  window.colorize = function (element) {
    element.addEventListener('click', function () {
      var color;
      if (element === window.setup.wizardCoat) {
        color = getRandomColor(COAT_COLORS);
        element.style.fill = color;
        document.querySelector('input[name="coat-color"]').value = color;
      } else if (element === window.setup.wizardEyes) {
        color = getRandomColor(EYES_COLORS);
        element.style.fill = color;
        document.querySelector('input[name="eyes-color"]').value = color;
      } else if (element === window.setup.setupFireBall) {
        color = getRandomColor(FIREBALL_COLORS);
        element.style.backgroundColor = color;
        document.querySelector('input[name="fireball-color"]').value = color;
      }
    });
  };
})();
