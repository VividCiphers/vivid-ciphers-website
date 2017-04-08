; (function () {
  'use strict'

  const slides = [
      {
          "id": 1,
          "pic": "img/project-slide-1.png",
          "header": "Slide 1",
          "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempo. Lorem ipsum dolor sit amet, Ladipisicing elit, incididunt ut labore et dolore magna aliqua. Ladipisicing elit.</p><p>Lorem ipsum dolor sit amet, sed do. Ladipisicing elit.</p>",
          "watch": "#",
          "git": "#"
      },
      {
          "id": 2,
          "pic": "img/project-slide-2.png",
          "header": "Slide 2",
          "content": "<p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>",
          "watch": "#",
          "git": "#"
      },
      {
          "id": 3,
          "pic": "img/project-slide-3.png",
          "header": "Slide 3",
          "content": "<p>Lorem ipsum dolor sit amet.</p>",
          "watch": "#",
          "git": "#"
      }
  ];

  let sliderPic = document.querySelector('.slider-pic > img');
  let sliderHeader = document.querySelector('.slider-content > h3');
  let sliderText = document.querySelector('.slider-text');
  let sliderDots = document.querySelector('.slider-dots');
  let sliderButtons = document.querySelector('.slider-buttons');
  let slideNumber = 0;
  const delay = 3000;

  setInterval(function() {
    setTimeout(function(){
      slider();
      disapear();
    }, 300);
    disapear();
  }, delay)

  for(let i=0; i<slides.length; i++) {
    let dot = document.createElement('i');
    dot.classList.add('fa');
    dot.classList.add('fa-circle');
    dot.setAttribute('aria-hidden', 'true');
    sliderDots.appendChild(dot);
  };

  function slider() {
    (slideNumber == slides.length) ? slideNumber = 0 : false;
    sliderPic.src = slides[slideNumber].pic;
    sliderHeader.innerHTML = slides[slideNumber].header;
    sliderText.innerHTML = slides[slideNumber].content;
    sliderDots.children[slideNumber].classList.add('active');
    (slideNumber > 0) ?
    sliderDots.children[slideNumber-1].classList.toggle('active') :
    sliderDots.children[sliderDots.children.length-1].classList.remove('active');
    slideNumber++;
  };

  function disapear() {
    sliderPic.classList.toggle('disapear');
    sliderHeader.classList.toggle('disapear');
    sliderText.classList.toggle('disapear');
    sliderButtons.classList.toggle('disapear');
  };

  slider();

}());
