/* Скрипт появления/скрытия попапа */

var popup = function (payload) {
  var currentPopup = document.querySelector(payload.selector).closest('.popup');
  var closePopupBtn = currentPopup.querySelector('.popup__button');

  closePopupBtn.addEventListener('click', close);

  function show (evt) {
    evt.preventDefault();

    currentPopup.classList.add('popup-show');
  }

  function close (evt) {
    evt.preventDefault();

    currentPopup.classList.remove('popup-show');
  }

  return {
    show: show
  };
};

/* Скрипт появления формы */

var showFeedback = function () {
  var feedbackShowButton = document.querySelector('.show-popup-form');

  if (feedbackShowButton) {
    var feedbackPopup = popup({
      selector: '.feedback-form'
    });
    feedbackShowButton.addEventListener('click', feedbackPopup.show);
  }
};

/* Скрипт появления текста */

var showText = function () {
  var textShowButton = document.querySelector('.show-popup-text');

  if (textShowButton) {
    var textPopup = popup({
      selector: '.test-text'
    });
    textShowButton.addEventListener('click', textPopup.show);
  }
};

/* Вызов */

showFeedback();
showText();
