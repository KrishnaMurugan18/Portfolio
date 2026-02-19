'use strict';

document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');

    window.addEventListener('scroll', function () {
        navbar.classList.toggle('sticky', window.scrollY > 20);
        scrollUpBtn.classList.toggle('show', window.scrollY > 500);
    });

    // Slide-up script
    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle menu/navbar script
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('active');
        menu.style.left = menu.classList.contains('active') ? '0%' : '-100%';
    });

    // Typing animation script
    function initializeTyped(selector, strings) {
        return new Typed(selector, {
            strings: strings,
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    }

    // Initial initialization
    const typedInstance = initializeTyped('.typing', ['Developer', 'Freelancer']);

    // Destroy and reinitialize after each loop
    typedInstance;

    // Example: Destroy and reinitialize after 5 seconds
    setTimeout(function () {
        typedInstance.destroy();
        initializeTyped('.typing', ['Developer', 'Freelancer']);
    }, 5000);

    // Additional Typed instance
    initializeTyped('.typing-2', ['Cloud & Devops Engineer', 'Freelancer']);
});
