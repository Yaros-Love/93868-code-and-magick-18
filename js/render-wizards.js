'use strict'

//модуль renderWizards
var renderWizards = function () {
  window.util.setupSimilarElem.classList.remove('hidden');

//находим шаблон мага
var similarWizardTemplate =  document.querySelector('#similar-wizard-template');
var setupSimilarItem = similarWizardTemplate.content.querySelector('.setup-similar-item');

//количество персонажей
var playersCount = 4;

//ф-я создания массива с 4мя рандомными персами
var createPlayers = function (nameArray, surnameArray, robaArray, eyesArray) {
  var playersCollection = [];
  for (var i = 0; i < playersCount; i++) {
    var player = {};
    player.name = window.util.getRandomItem(nameArray);
    player.surname = window.util.getRandomItem(surnameArray);
    player.coatColor = window.util.getRandomItem(robaArray);
    player.eyesColor = window.util.getRandomItem(eyesArray);
    playersCollection.push(player);
  }
  return playersCollection
}
var players = createPlayers(window.util.NAMES, window.util.SURNAMES, window.util.COLOR_ROBA, window.util.COLOR_EYES);

//функция добавления шаблона с персами в разметку
var createWizards = function (playersArray) {
  for (var i = 0; i < playersArray.length; i++) {
    var wizardItem = setupSimilarItem.cloneNode(true);
    wizardItem.querySelector('.setup-similar-label').textContent = playersArray[i].name;
    wizardItem.querySelector('.wizard-coat').style.fill = playersArray[i].coatColor;
    wizardItem.querySelector('.wizard-eyes').style.fill = playersArray[i].eyesColor;
    window.util.setupSimilarList.appendChild(wizardItem);
  }
}

var wizards = createWizards(players);

};

renderWizards();