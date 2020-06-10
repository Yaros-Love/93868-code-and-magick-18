'use strict';

//утильные модуль
(function () {
  //ф-я рандомного значения
  var getRandomItem = function (array) {
    return array[Math.round(Math.random() * (array.length - 1 - 0) + 0)];
  }
  // ф-я рандома в диапазоне
  var getRandomItemMinMax = function (min, max) {
    return Math.random() * (max - min) + min;
  }

  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;

  // ссылки на елементы ДОМ
  var setupElement = document.querySelector('.setup');
  var setupElementY = 80; //положение по Y, в px
  var setupElementX = 50; //положение по X, в %
  var setupSimilarElem = document.querySelector('.setup-similar'); //блок с похожими магами
  var setupSimilarList = document.querySelector('.setup-similar-list'); //элемент с похожими магами
  var setupOpenElem = document.querySelector('.setup-open'); //элемент настроек персонажа
  var setupCloseElem = document.querySelector('.setup-close'); //элемент закрытия окна настроек
  var setupUserName = document.querySelector('.setup-user-name'); //иконка пользователя
  var setupWizardElem = document.querySelector('.setup-wizard'); //элемент с магом пользователя
  var wizardCoatElem = setupWizardElem.querySelector('.wizard-coat'); //элемент мантии
  var wizardEyesElem = setupWizardElem.querySelector('.wizard-eyes'); //элемент глаз
  var fireballWrapElem = document.querySelector('.setup-fireball-wrap'); //элемент фаерболла
  var dialogHandle = document.querySelector('.upload'); //иконка в окне настроек

  //данные для рендера магов
  var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
  var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
  var COLOR_ROBA = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var COLOR_EYES = ['black', 'red', 'blue', 'darkmagenta', 'crimson'];
  var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  //объект на экспорт
  window.util =
  {
    getRandomItem: getRandomItem,
    getRandomItemMinMax: getRandomItemMinMax,
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    setupElement: setupElement,
    setupElementY : setupElementY,
    setupElementX : setupElementX,
    setupSimilarElem: setupSimilarElem,
    setupSimilarList: setupSimilarList,
    setupOpenElem: setupOpenElem,
    setupCloseElem: setupCloseElem,
    setupUserName: setupUserName,
    setupWizardElem: setupWizardElem,
    wizardCoatElem: wizardCoatElem,
    wizardEyesElem: wizardEyesElem,
    fireballWrapElem: fireballWrapElem,
    dialogHandle : dialogHandle,
    NAMES: NAMES,
    SURNAMES: SURNAMES,
    COLOR_ROBA: COLOR_ROBA,
    COLOR_EYES: COLOR_EYES,
    COLOR_FIREBALL: COLOR_FIREBALL,
  }
})();