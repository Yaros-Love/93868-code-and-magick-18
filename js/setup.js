'use strict';

var userDialog = document.querySelector('.setup');
// userDialog.classList.remove('hidden');
userDialog.querySelector('.setup-similar').classList.remove('hidden');

var similarWizardTemplate = document.querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var WIZARD_AMOUNT = 4;
var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var FIREBALL_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var getRandomItem = function (arr) {
  var random = Math.floor(Math.random() * arr.length);
  return arr[random];
};

var createWizardsArray = function () {
  var wizardsArray = [];
  for (var i = 0; i < WIZARD_AMOUNT; i++) {
    wizardsArray.push(
        {
          name: getRandomItem(WIZARD_NAMES) + ' ' + getRandomItem(WIZARD_SURNAMES),
          coatColor: getRandomItem(COAT_COLORS),
          eyesColor: getRandomItem(EYES_COLORS)
        }
    );
  }
  return wizardsArray;
};
var wizards = createWizardsArray();

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.eyesColor;

  return wizardElement;
};

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(renderWizard(wizards[i]));
}

var similarListElement = userDialog.querySelector('.setup-similar-list');
similarListElement.appendChild(fragment);

var setupOpen = document.querySelector('.setup-open');
var setup = document.querySelector('.setup');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');

var setupWizard = document.querySelector('.setup-wizard');
var wizardCoat = setupWizard.querySelector('.wizard-coat');
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
var setupFireBall = setup.querySelector('.setup-fireball-wrap');

var onWizardClick = function (evt, obj, color) {
  obj.style.fill = color;
};

var onFireballClick = function (evt, obj, color) {
  obj.style.backgroundColor = color;
};

wizardCoat.addEventListener('click', function (evt) {
  var color = getRandomItem(COAT_COLORS);

  onWizardClick(evt, wizardCoat, color);
  setup.querySelector('input[name="coat-color"]').value = color;
}, true);

wizardEyes.addEventListener('click', function (evt) {
  var color = getRandomItem(EYES_COLORS);

  onWizardClick(evt, wizardEyes, color);
  setup.querySelector('input[name="eyes-color"]').value = color;
}, true);

setupFireBall.addEventListener('click', function (evt) {
  var color = getRandomItem(FIREBALL_COLORS);

  onFireballClick(evt, setupFireBall, color);
  setupFireBall.querySelector('input[name="fireball-color"]').value = color;
});

var onPopupEscPress = function (evt) {
  if (userName === document.activeElement) {
    evt;
  } else if (evt.keyCode === ESC_KEYCODE) {
    closePopup();
  }
};

var openPopup = function () {
  setup.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setup.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};

setupOpen.addEventListener('click', function () {
  openPopup();
});

setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup();
  }
});

setupClose.addEventListener('click', function () {
  closePopup();
});

setupClose.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    closePopup();
  }
});

userName.addEventListener('focus', function (evt) {
  if (evt.keyCode === ESC_KEYCODE) {
    document.removeEventListener('keydown', onPopupEscPress);
  }
});
