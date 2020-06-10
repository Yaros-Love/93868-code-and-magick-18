'use strict'
//модуль setup
var setup = function () {
  //события и валидация



  //закрыть модуль по нажатию esc и не закрывать, если input в фокусе
  var onPopupEscPress = function (evt) {
    if (window.util.setupUserName !== document.activeElement) {
      if (evt.keyCode === window.util.ESC_KEYCODE) {
        closePopup();
      }
    }
    else {
      return;
    }
  };

  var openPopup = function () {
    window.util.setupElement.classList.remove('hidden');
    document.addEventListener('keydown', onPopupEscPress);
  };

  var closePopup = function () {
    window.util.setupElement.classList.add('hidden');
    document.removeEventListener('keydown', onPopupEscPress);
    //возвращаем изначалное положение окна настроек
    window.util.setupElement.style.top = window.util.setupElementY + 'px';
    window.util.setupElement.style.left = window.util.setupElementX + '%';
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
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
      openPopup()
    }
  });

  // слушатель, закрыть по enter
  window.util.setupCloseElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === window.util.ENTER_KEYCODE) {
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
}

setup();
