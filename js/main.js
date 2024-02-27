document.addEventListener('DOMContentLoaded', function() {
  // Переменные для работы с меню-бургером
  const burgerButton = document.getElementById('burger');
  const burgerMenu = document.querySelector('.burger-menu');

  // Переменные для плавной прокрутки к секции "О нас"
  const aboutLink = document.querySelector('a[href="#about"]');
  const aboutSection = document.querySelector('#about');

  // Переменные для работы с формой обратной связи
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const phoneInput = document.getElementById('phone');
  const submitButton = document.querySelector('.form-button');

  // Обработчик события клика для меню-бургера
  burgerButton.addEventListener('click', function(event) {
      event.preventDefault();
      burgerMenu.classList.toggle('show');
  });

  // Обработчик события клика для плавной прокрутки
  aboutLink.addEventListener("click", function(event) {
      event.preventDefault();
      aboutSection.scrollIntoView({ behavior: 'smooth' });
  });

  // Функции валидации полей формы
  function isValidName(name) {
      return /^[А-Яа-яA-Za-z-]+$/.test(name);
  }

  function isValidEmail(email) {
      return /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(email);
  }

  function isValidPhone(phone) {
      return /^\+7\d{10}$/.test(phone);
  }

  // Функция для проверки валидности всех полей и активации кнопки отправки
  function validateForm() {
      submitButton.disabled = !(isValidName(nameInput.value) && isValidEmail(emailInput.value) && isValidPhone(phoneInput.value));
  }

  // Подписка на события изменения полей для валидации формы
  nameInput.addEventListener('input', validateForm);
  emailInput.addEventListener('input', validateForm);
  phoneInput.addEventListener('input', validateForm);

  // Обработчик события клика на кнопку отправки формы
  submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Предотвращаем стандартную отправку формы
      alert('Успешно!');
  });

  // Автоматическое добавление +7 к номеру телефона
  phoneInput.addEventListener('focus', function() {
      if (this.value.length === 0) {
          this.value = '+7';
      }
  });

  phoneInput.addEventListener('blur', function() {
      if (this.value === '+7') {
          this.value = '';
      }
  });
});
