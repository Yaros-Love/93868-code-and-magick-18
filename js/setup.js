'use strict';

(function () {
  var insertWizards = window.renderWizard.insertWizards;
  var load = window.backend.load;
  var wizard = window.wizard;
  var debounce = window.debounce;

  var coatColor;
  var eyesColor;
  var wizards = [];

  var getRank = function (wizardItem) {
    var rank = 0;

    if (wizardItem.colorCoat === coatColor) {
      rank += 2;
    }
    if (wizardItem.colorEyes === eyesColor) {
      rank += 1;
    }

    return rank;
  };

  var namesComparator = function (left, right) {
    if (left > right) {
      return 1;
    } else if (left < right) {
      return -1;
    } else {
      return 0;
    }
  };

  var updateWizards = function () {
    insertWizards(wizards.sort(function (left, right) {
      var rankDiff = getRank(right) - getRank(left);
      if (rankDiff === 0) {
        rankDiff = namesComparator(left.name, right.name);
      }
      return rankDiff;
    }));
  };


  wizard.onEyesChange = debounce(function (color) {
    eyesColor = color;
    updateWizards();
  });

  wizard.onCoatChange = debounce(function (color) {
    coatColor = color;
    updateWizards();
  });

  var successHandler = function (data) {
    wizards = data;
    updateWizards();
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

  window.setup = {
    errorHandler: errorHandler
  };
})();
