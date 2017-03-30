; (function () {

    'use strict'
    let wrap = document.querySelector('.wrap-max1140px');
    let header = document.querySelector('header');
    let links = document.querySelectorAll('.main > a');
    let mq = window.matchMedia("(max-width: 600px)");
    let hamburgerNav = document.querySelector('.hamburger');
    let hamburgerCancelNav = document.querySelector('.hamburger-cancel-button');
    mq.addListener(alignLeft);

    for (let i=0; i<links.length; i++) {
      let clonedNode = links[i].cloneNode(true);
      clonedNode.classList.add('block');
      hamburgerNav.appendChild(clonedNode);
    }

    let hamburgerIcon = document.createElement('div');
    let classArray = ['hamburger-button','col-xs-2','disabled'];
    classArray.forEach(function(el){
      hamburgerIcon.classList.add(el);
    });
    header.appendChild(hamburgerIcon);

    hamburgerIcon.addEventListener('click', toggleTransition);
    hamburgerCancelNav.addEventListener('click', toggleTransition);

    function toggleTransition() {
      hamburgerNav.classList.toggle('transition-left');
    }

    (window.innerWidth <= 600) ? alignLeft() : false;

    window.addEventListener('resize', function(){
      (window.innerWidth > 600 && hamburgerNav.classList.contains('transition-left')) ? hamburgerNav.classList.toggle('transition-left') : false;
      let contentSize = Math.max( document.body.scrollHeight, document.body.offsetHeight,
                         document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight );
      hamburgerNav.style.height = contentSize + 'px';
    });

    function alignLeft(){
      let logo = document.querySelector('.logo');
      logo.classList.toggle('center-xs');
      logo.classList.toggle('col-xs-12');
      logo.classList.toggle('col-xs-10');
      hamburgerIcon.classList.toggle('disabled');
    };


 }());
