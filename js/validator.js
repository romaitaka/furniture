document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('.inputs-wrapper');
    const submitButton = document.querySelector('.form-button');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');

    submitButton.disabled = true; // Сделать кнопку неактивной по умолчанию

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
        if (isValidName(nameInput.value) && isValidEmail(emailInput.value) && isValidPhone(phoneInput.value)) {
            submitButton.disabled = false;
        } else {
            submitButton.disabled = true;
        }
    }

    // Подписка на события изменения полей для валидации формы
    nameInput.addEventListener('input', validateForm);
    emailInput.addEventListener('input', validateForm);
    phoneInput.addEventListener('input', validateForm);

    submitButton.addEventListener('click', function(event) {
        event.preventDefault(); // Предотвращаем стандартную отправку формы

        // Показываем алерт об успешной отправке
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
