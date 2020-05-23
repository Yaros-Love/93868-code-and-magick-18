var setupModule = document.querySelector('.setup');
setupModule.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

//находим шаблон
var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
console.log(templateWizard);

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

//ф-я выдачи рандомного значения из массива хар-к перса
var randomItem = function (arrayItems) {
  return arrayItems[Math.round(Math.random() * (arrayItems.length - 1 - 0) + 0)];
}

//ф-я создания массива с 4мя рандомными персами
var creationPlayers = function (nameArray, surnameArray,robaArray,eyesArray) {
  var playersCollection = [];
  for (i = 0; i < 4; i++) {
    var player = {};
    player.name = randomItem(nameArray);
    player.surname = randomItem(surnameArray);
    player.coatColor = randomItem(robaArray);
    player.eyesColor = randomItem(eyesArray);
    playersCollection.push(player);
  }
  console.log(playersCollection)
  return playersCollection
}

//функция добавления шаблона с персами в разметку
var creatWizards = function (playersArray) {
  for (var i = 0; i < playersArray.length; i++) {
    var wizardItem = templateWizard.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = playersArray[i].name;
    wizardItem.querySelector('.wizard-coat').style.fill = playersArray[i].coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = playersArray[i].eyesColor;
    wizardList.appendChild(wizardItem)
  }
}
creatWizards(creationPlayers(NAMES,SURNAMES,COLOR_ROBA,COLOR_EYES))
