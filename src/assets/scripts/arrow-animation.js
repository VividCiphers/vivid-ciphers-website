'use strict';
(function () {
  'use strict';
 
  var animation = setInterval(function () {
    var delay = 300;
    var arrow = document.querySelector('.icon-arrow');

if (!arrow) return;

    arrow.classList.add('arrow-animation-step1');
    setTimeout(function () {
      var arrow = document.querySelector('.icon-arrow');
      arrow.classList.remove('arrow-animation-step1');
      arrow.classList.add('arrow-animation-step2');
    }, delay);
    setTimeout(function () {
      var arrow = document.querySelector('.icon-arrow');
      arrow.classList.remove('arrow-animation-step2');
      arrow.classList.add('arrow-animation-step3');
    }, delay * 2);
    setTimeout(function () {
      var arrow = document.querySelector('.icon-arrow');
      arrow.classList.remove('arrow-animation-step3');
    }, delay * 3);
  }, 3000);
})();