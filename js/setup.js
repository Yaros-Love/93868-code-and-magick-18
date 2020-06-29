'use strict';

//модуль setup
(function () {
  var setupElement = document.querySelector('.setup');
var ESC_KEYCODE = window.const.ESC_KEYCODE;
var ENTER_KEYCODE = window.const.ENTER_KEYCODE;
var SETUP_ELEM_Y = window.const.SETUP_ELEM_Y; //положение по Y, в px
var SETUP_ELEM_X = window.const.SETUP_ELEM_X; //положение по X, в %

  //события и валидация
  //закрыть модуль по нажатию esc и не закрывать, если input в фокусе
  var onPopupEscPress = function (evt) {
    if (window.util.setupUserName !== document.activeElement) {
      if (evt.keyCode === ESC_KEYCODE) {
        closePopup();
      }
    }
    else {
      return;
    }
  };

  var openPopup = function () {
    setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    //возвращаем изначалное положение окна настроек
    setupElement.style.top = SETUP_ELEM_Y + 'px';
    setupElement.style.left = SETUP_ELEM_X + '%';
  };


  //слушатель, открыть по нажатию аватарки .setup-open
  window.util.setupOpenElem.addEventListener('click', function () {
    openPopup()
  });

  //слушатель, закрыть по нажатию на .setup-close
  window.util.setupCloseElem.addEventListener('click', function () {
    closePopup()
  });

  //слушатель, открыть по enter
  window.util.setupOpenElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup()
    }
  });

  // слушатель, закрыть по enter
  window.util.setupCloseElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup()
    }
  });

  //ф-я изменения цвета элементов
  var changeColor = function (wizardElem, array) {
    if (wizardElem.tagName.toLowerCase() === 'div') {
      wizardElem.style.background = window.util.getRandomItem(array);
    }
    else {
      wizardElem.style.fill = window.util.getRandomItem(array);
    }
  }

  window.util.setupWizardElem.addEventListener('click', function (evt) {
    if (evt.target === window.util.wizardCoatElem) {
      changeColor(window.util.wizardCoatElem, window.util.COLOR_ROBA);
    }
    if (evt.target === window.util.wizardEyesElem) {
      changeColor(window.util.wizardEyesElem, window.util.COLOR_EYES);
    }
  });

  window.util.fireballWrapElem.addEventListener('click', function () {
    changeColor(window.util.fireballWrapElem, window.util.COLOR_FIREBALL)
  })
})();


