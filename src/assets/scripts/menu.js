'use strict';

;(function () {

    'use strict';

    var links = document.querySelectorAll('.main-nav > a');
    var hamburger = document.querySelector('.hamburger');
    var hamburgerNav = document.querySelector('.hamburger-nav');
    var hamburgerButton = document.querySelector('.hamburger-button');

    for (var i = 0; i < links.length; i++) {
        var clonedNode = links[i].cloneNode(true);
        clonedNode.classList.add('block');
        hamburgerNav.appendChild(clonedNode);
    }

    hamburgerButton.addEventListener('click', toggleTransition);
    window.addEventListener('resize', function () {
        window.innerWidth > 600 && hamburgerNav.classList.contains('transition-top') ? toggleTransition() : false;
    });

    function toggleTransition() {
        hamburgerNav.classList.toggle('transition-top');
    };
})();