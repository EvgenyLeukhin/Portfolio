$(document).ready(function() {
  /*-----------------------------------------------
    BX-slider (http://bxslider.com/)
-----------------------------------------------*/

  $('.bxslider').bxSlider({
    mode: 'fade',            // анимация
    speed: 500,              // скорость смены слайдов
    responsive: true,        // адптивность на увеличение
    controls: false,          // стрелочки
    adaptiveHeight: true,    // адаптивность по высоте img
    // slideWidth: 1920,        // ширина слайдов, будет адаптивен при уменьшении экрана, но если каринка меньше в px, то будут отступы (в идеале должно совпадать с шириной img)
    touchEnabled: true // поддержка touch
  });
});