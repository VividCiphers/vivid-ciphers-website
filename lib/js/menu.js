; (function () {

    'use strict'
    let links = document.querySelectorAll('.main-nav > a');
    let hamburger = document.querySelector('.hamburger');
    let hamburgerNav = document.querySelector('.hamburger-nav');
    let hamburgerButton = document.querySelector('.hamburger-button');

    for (let i=0; i<links.length; i++) {
      let clonedNode = links[i].cloneNode(true);
      clonedNode.classList.add('block');
      hamburgerNav.appendChild(clonedNode);
    }

    hamburgerButton.addEventListener('click', toggleTransition);
    window.addEventListener('resize', function(){
      (window.innerWidth > 600 && hamburgerNav.classList.contains('transition-top')) ? toggleTransition() : false;
    });

    function toggleTransition() {
      hamburgerNav.classList.toggle('transition-top');
    };

 }());
