document.addEventListener("DOMContentLoaded", function() {
    // Поиск ссылки, которая ведет на секцию "О нас"
    const aboutLink = document.querySelector('a[href="#about"]');
  
    // Добавление обработчика события клика на найденную ссылку
    aboutLink.addEventListener("click", function(event) {
      // Предотвращение стандартного поведения ссылки
      event.preventDefault();
  
      // Получение элемента, к которому необходимо прокрутить страницу
      const aboutSection = document.querySelector('#about');
  
      // Плавная прокрутка к секции "О нас"
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    });
  });
  