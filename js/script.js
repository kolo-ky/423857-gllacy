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

/* Скрипт открытия поля поиска */

(function () {
  var searchBtn = document.querySelector('.search__btn');
  var searchModal = document.querySelector('.search__modal');

  var form = searchModal.querySelector('.search__from');
  var searchField = form.querySelector('input[name="search-field"]');

  function showSearch(evt) {
    evt.preventDefault();

    searchBtn.classList.add('search__btn--active');
    searchModal.classList.add('search-modal--show');
    searchModal.classList.remove('search-modal--error');
    searchField.focus();
  }

  function submitForm (evt) {
    if (!searchField.value) {
      evt.preventDefault();

      searchModal.classList.add('search-modal--error');
    } else {
      evt.preventDefault();

      searchModal.classList.remove('search-modal--show');
      searchModal.classList.remove('search-modal--error');
      searchBtn.classList.remove('search__btn--active');
    }
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (searchModal.classList.contains('search-modal--show')) {
        searchModal.classList.remove('search-modal--show');
        searchModal.classList.remove('search-modal--error');
        searchBtn.classList.remove('search__btn--active');
      }
    }
  });

  searchBtn.addEventListener('click', showSearch);
  form.addEventListener('submit', submitForm);
})();

/* Скрипт открытия формы входа */

(function () {
  var logInBtn = document.querySelector('.user__menu-link');
  var userModal = document.querySelector('.user__modal');

  var form = userModal.querySelector('.user__form');
  var password = form.querySelector('input[name="password"]');
  var mail = form.querySelector('input[name="login-mail"]');

  function showUserModal(evt) {
    evt.preventDefault();

    logInBtn.classList.add('user__menu-link--active');
    userModal.classList.add('user__modal--show');
    userModal.classList.remove('user__modal--error');
    mail.focus();
  }

  function submitForm (evt) {
    if (!password.value || !mail.value) {
      evt.preventDefault();

      userModal.classList.add('user__modal--error');
    } else {
      evt.preventDefault();

      userModal.classList.remove('user__modal--show');
      userModal.classList.remove('user__modal--error');
      logInBtn.classList.remove('user__menu-link--active');
    }
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (userModal.classList.contains('user__modal--show')) {
        evt.preventDefault();

        userModal.classList.remove('user__modal--show');
        userModal.classList.remove('user__modal--error');
        logInBtn.classList.remove('user__menu-link--active');
      }
    }
  });

  logInBtn.addEventListener('click', showUserModal);
  form.addEventListener('submit', submitForm);
})();

/* Скрипт открытия корзины */

(function () {
  var cartFill = document.querySelector('.cart--fill');

  if (!cartFill) {
    return;
  }

  var cartBtn = document.querySelector('.cart__btn');
  var cartModal = cartFill.querySelector('.cart__modal');

  function showCartModal(evt) {
    evt.preventDefault();

    cartBtn.classList.add('cart__btn--active');
    cartModal.classList.add('cart-modal--show');
  }

  window.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();

      if (cartModal.classList.contains('cart-modal--show')) {
        evt.preventDefault();

        cartModal.classList.remove('cart-modal--show');
        cartBtn.classList.remove('cart__btn--active');
      }
    }
  });

  cartBtn.addEventListener('click', showCartModal);
})();

