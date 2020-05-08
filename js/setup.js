var setupModule = document.querySelector('.setup');
setupModule.classList.remove('hidden')

//массив имен
var names = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
//массив фамилий
var surnames = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
//массив цветов мантии
var colorRoba = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
//массив цветов глаз
var colorEyes = ['black', 'red', 'blue', 'yellow', 'green'];

//ф-я выдачи рандомного значения из массива хар-к перса
var randomItem = function (arrayItems) {
  return arrayItems[Math.round(Math.random() * (arrayItems.length - 1 - 0) + 0)];
}
//test
console.log(randomItem(names));
console.log(randomItem(surnames));
console.log(randomItem(colorRoba));
console.log(randomItem(colorEyes));

//ф-я создания массива с 4мя рандомными персами
var creationPlayers = function() {
var playersCollection = [];
for (i=0; i < 4; i++) {
var player = {};
player.name = randomItem(names);
player.surname = randomItem(surnames);
player.coatColor = randomItem(colorRoba);
player.eyesColor = randomItem(colorEyes);
playersCollection.push(player);
}
console.log(playersCollection)
return playersCollection
}


//находим шаблон
var templateWizard = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
console.log(templateWizard);

//находим 
