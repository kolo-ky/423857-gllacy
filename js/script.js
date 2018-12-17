/* Скрипт появления/скрытия попапа формы обратной связи */

(function () {
  var openFeedbackBtn = document.querySelector('.show-popup-form');

  if (!openFeedbackBtn) {
    return;
  }

  var feedbackModal = document.querySelector('.popup');
  var popupContainer = feedbackModal.querySelector('.popup__container');
  var closeFeedbackBtn = feedbackModal.querySelector('.popup__button');

  var form = feedbackModal.querySelector('.feedback-form__form');
  var userName = form.querySelector('input[name="user-name"]');
  var mail = form.querySelector('input[name="mail"]');
  var text = form.querySelector('textarea[name="text"]');

  function showFeedbackModal (evt) {
    evt.preventDefault();

    feedbackModal.classList.add('popup--show');
    popupContainer.classList.add('popup__container--show');
    popupContainer.classList.remove('popup__container--error');
    userName.focus();
  }

  function closeFeedbackModal (evt) {
    evt.preventDefault();

    feedbackModal.classList.remove('popup--show');
    popupContainer.classList.remove('popup__container--show');
    popupContainer.classList.remove('popup__container--error');
  }

  function submitForm (evt) {


    if (!userName.value || !mail.value || !text.value) {
      evt.preventDefault();

      popupContainer.classList.add('popup__container--error');
    } else {
      popupContainer.classList.remove('popup__container--error');
      closeFeedbackModal(evt);
    }
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (feedbackModal.classList.contains("popup--show")) {
        evt.preventDefault();

        popupContainer.classList.remove('popup__container--error');
        feedbackModal.classList.remove("popup--show");
      }
    }
  });

  openFeedbackBtn.addEventListener('click', showFeedbackModal);
  closeFeedbackBtn.addEventListener('click', closeFeedbackModal);
  form.addEventListener('submit', submitForm);
})();


