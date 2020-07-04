'use strict';

//модуль setup
(function () {
  var setupElement = document.querySelector('.setup');
  var setupOpenElem = document.querySelector('.setup-open'); //элемент открытия настроек персонажа
  var setupCloseElem = document.querySelector('.setup-close'); //элемент закрытия окна настроек
  var setupUserName = document.querySelector('.setup-user-name'); //иконка пользователя
  var setupWizardElem = document.querySelector('.setup-wizard'); //элемент с магом пользователя
  var wizardCoatElem = setupWizardElem.querySelector('.wizard-coat'); //элемент мантии
  var wizardEyesElem = setupWizardElem.querySelector('.wizard-eyes'); //элемент глаз
  var fireballWrapElem = document.querySelector('.setup-fireball-wrap'); //элемент фаерболла
  var COLOR_ROBA = window.const.COLOR_ROBA;
  var COLOR_EYES = window.const.COLOR_EYES;
  var COLOR_FIREBALL = window.const.COLOR_FIREBALL;
  var ESC_KEYCODE = window.const.ESC_KEYCODE;
  var ENTER_KEYCODE = window.const.ENTER_KEYCODE;
  var SETUP_ELEM_Y = window.const.SETUP_ELEM_Y; //положение по Y, в px
  var SETUP_ELEM_X = window.const.SETUP_ELEM_X; //положение по X, в %
  var getRandomItem = window.util.getRandomItem;

  //события и валидация
  //закрыть модуль по нажатию esc и не закрывать, если input в фокусе
  var onPopupEscPress = function (evt) {
    if (setupUserName !== document.activeElement) {
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
  setupOpenElem.addEventListener('click', function () {
    openPopup()
  });

  //слушатель, закрыть по нажатию на .setup-close
  setupCloseElem.addEventListener('click', function () {
    closePopup()
  });

  //слушатель, открыть по enter
  setupOpenElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      openPopup()
    }
  });

  // слушатель, закрыть по enter
  setupCloseElem.addEventListener('keydown', function (evt) {
    if (evt.keyCode === ENTER_KEYCODE) {
      closePopup()
    }
  });

  //ф-я изменения цвета элементов
  var changeColor = function (wizardElem, array) {
    if (wizardElem.tagName.toLowerCase() === 'div') {
      wizardElem.style.background = getRandomItem(array);
    }
    else {
      wizardElem.style.fill = getRandomItem(array);
    }
  }

  setupWizardElem.addEventListener('click', function (evt) {
    if (evt.target === wizardCoatElem) {
      changeColor(wizardCoatElem, COLOR_ROBA);
    }
    if (evt.target === wizardEyesElem) {
      changeColor(wizardEyesElem, COLOR_EYES);
    }
  });

  fireballWrapElem.addEventListener('click', function () {
    changeColor(fireballWrapElem, COLOR_FIREBALL)
  })




  // URL_POST = 'https://javascript.pages.academy/code-and-magick';
  // var setupWizardForm = document.querySelector('.setup-wizard-form');//форма настройки персонажа
  // var setupElement = document.querySelector('.setup');
  // var onErrorLoad = function (message) {
  //   console.error(message);
  //   var node = document.createElement('div');
  //   node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
  //   node.style.position = 'absolute';
  //   node.style.left = 0;
  //   node.style.right = 0;
  //   node.style.fontSize = '30px';
  //   node.textContent = message;
  //   document.body.insertAdjacentElement('afterbegin', node);
  // };

  // var onPostSucsess = function (message) {
  //   console.log(message);
  //   setupElement.classList.add('hidden');
  // };
  // //слушаем sunmit на форме
  // setupWizardForm.addEventListener('submit', function (evt) {
  //   window.backends.save(onPostSucsess, onErrorLoad, new FormData(setupWizardForm));
  //   evt.preventDefault();
  // });
})();


