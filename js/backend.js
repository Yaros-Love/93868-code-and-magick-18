'use strict';

(function () {
  var load = function (url, onLoad, onError) {
    var xhr = new XMLHttpRequest();

    xhr.responseType = 'json';

    xhr.addEventListener('load', function () {

      if (xhr.status === 200) {
        onLoad('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
        //вызываем ф-ии, получаем массив из 4х магов и отрисовываем их
        window.render_wizards.createWizards(window.data.getWizards(xhr.response))
      }
    });

    xhr.addEventListener('error', function () {
      switch (xhr.status) {
        case 404 : return(onError('Неверный запрос'));
        case 500 : return(onError('Ошибка сервера'));
        case 505 : return (onError('Сервер не найден'));
        default :  onError('Произошла ошибка соединения');
      }
    });

    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000; //10s

    xhr.open('GET', url);
    xhr.send();
  }

  //ф-я выводит сообщение об ошибке, рендер поля ошибки
  var onError = function (message) {
    console.error(message);
    var node = document.createElement('div');
    node.style = 'z-index: 100; margin: 0 auto; text-align: center; background-color: red;';
    node.style.position = 'absolute';
    node.style.left = 0;
    node.style.right = 0;
    node.style.fontSize = '30px';
    node.textContent = message;
    document.body.insertAdjacentElement('afterbegin', node);
  };

  // ф-я выводит сообщение об успешном запросе
  var onLoad = function (message) {
    console.log(message);
  };

  load('https://javascript.pages.academy/code-and-magick/data', onLoad, onError);

window.backend = {
  load : load,
}
})();
