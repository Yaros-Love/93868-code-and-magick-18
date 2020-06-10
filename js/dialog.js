'use strict';

//модуль dialog
(function () {
window.util.dialogHandle.addEventListener('mousedown', function (evt) {
  evt.preventDefault()

  //начальные координаты
  var startCoords = {
    x: evt.clientX,
    y: evt.clientY
  }

  var onMouseMove = function (moveEvt) {
    moveEvt.preventDefault();
    dragged = true;

    //разница смещения
    var shift = {
      x: startCoords.x - moveEvt.clientX,
      y: startCoords.y - moveEvt.clientY
    };
    //обновим текущие координаты
    startCoords = {
      x: moveEvt.clientX,
      y: moveEvt.clientY
    };
    //сместим пложение элемента на разницу изм-я положения мыши
    window.util.setupElement.style.top = (window.util.setupElement.offsetTop - shift.y) + 'px';
    window.util.setupElement.style.left = (window.util.setupElement.offsetLeft - shift.x) + 'px';
  };

  var dragged = false;

  var onMouseUp = function (upEvt) {
    upEvt.preventDefault();

    //удаляем слушателей
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);

    //условие прикотором событие при клике на иконку(загрузка файла) отменяется.
    if (dragged) {
      var onClickPreventDefault = function (evt) {
        evt.preventDefault();
        window.util.dialogHandle.removeEventListener('click', onClickPreventDefault)
      };
      window.util.dialogHandle.addEventListener('click', onClickPreventDefault);
    }
  };

  document.addEventListener('mousemove', onMouseMove);
  document.addEventListener('mouseup', onMouseUp);
});
})()