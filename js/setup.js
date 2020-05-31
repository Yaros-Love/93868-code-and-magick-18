var setupModule = document.querySelector('.setup');

document.querySelector('.setup-similar').classList.remove('hidden');

//находим шаблон
var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

//находим элемент-список персов
var wizardList = document.querySelector('.setup-similar-list');

//массив имен
var NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
//массив фамилий
var SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
//массив цветов мантии
var COLOR_ROBA = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
//массив цветов глаз
var COLOR_EYES = ['black', 'red', 'blue', 'darkmagenta', 'crimson'];
var COLOR_FIREBALL = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
//количество персонажей
var playersCount = 4;
//ф-я выдачи рандомного значения из массива хар-к перса
var randomItem = function (arrayItems) {
  return arrayItems[Math.round(Math.random() * (arrayItems.length - 1 - 0) + 0)];
}

//ф-я создания массива с 4мя рандомными персами
var createPlayers = function (nameArray, surnameArray, robaArray, eyesArray) {
  var playersCollection = [];
  for (i = 0; i < playersCount; i++) {
    var player = {};
    player.name = randomItem(nameArray);
    player.surname = randomItem(surnameArray);
    player.coatColor = randomItem(robaArray);
    player.eyesColor = randomItem(eyesArray);
    playersCollection.push(player);
  }
  return playersCollection
}
var players = createPlayers(NAMES, SURNAMES, COLOR_ROBA, COLOR_EYES);
//функция добавления шаблона с персами в разметку
var createWizards = function (playersArray) {
  for (var i = 0; i < playersArray.length; i++) {
    var wizardItem = templateWizard.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = playersArray[i].name;
    wizardItem.querySelector('.wizard-coat').style.fill = playersArray[i].coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = playersArray[i].eyesColor;
    wizardList.appendChild(wizardItem);
  }
}

var wizards = createWizards(players);


// /********************************************************************************
//события и валидация
var ESC_KEYCODE = 27;
var ENTER_KEYCODE = 13;
var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var userName = document.querySelector('.setup-user-name');


//закрыть модуль по нажатию esc и не закрывать, если input в фокусе
var onPopupEscPress = function (evt) {
  if (userName !== document.activeElement) {
    if (evt.keyCode === ESC_KEYCODE) {
      closePopup();
    }
  }
  else {
    return;
  }
};

var openPopup = function () {
  setupModule.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscPress);
};

var closePopup = function () {
  setupModule.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscPress);
};


//слушатель, открыть по нажатию аватарки .setup-open
setupOpen.addEventListener('click', function () {
  openPopup()
});

//слушатель, закрыть по нажатию на .setup-close
setupClose.addEventListener('click', function () {
  closePopup()
});

//слушатель, открыть по enter
setupOpen.addEventListener('keydown', function (evt) {
  if (evt.keyCode === ENTER_KEYCODE) {
    openPopup()
  }
});

// слушатель, закрыть по enter
setupClose.addEventListener('keydown', function (evt) {
if (evt.keyCode === ENTER_KEYCODE) {
  closePopup()
}
});

//ф-я изменения цвета элементов
var changeColor = function (wizardElem, someArray) {
  wizardElem.style.fill = randomItem(someArray);
}

// элемент с магом
var setupWizard = document.querySelector('.setup-wizard');
//элемент мантии
var wizardCoat = setupWizard.querySelector('.wizard-coat');
// элемент глаз
var wizardEyes = setupWizard.querySelector('.wizard-eyes');
// элемент фаерболла
var wizardFireball = document.querySelector('.setup-fireball-wrap');

setupWizard.addEventListener('click', function (evt) {
  if (evt.target === wizardCoat) {
    changeColor(wizardCoat, COLOR_ROBA);
    console.log(wizardFireball)
  }
  if (evt.target === wizardEyes) {
    changeColor(wizardEyes, COLOR_EYES);
    console.log('click')
  }
});

wizardFireball.addEventListener('click', function (){
  wizardFireball.style.background = randomItem(COLOR_FIREBALL);
})
