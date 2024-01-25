document.addEventListener('DOMContentLoaded', function () {
    const navbar = document.querySelector('.navbar');
    const scrollUpBtn = document.querySelector('.scroll-up-btn');
    const menuBtn = document.querySelector('.menu-btn');
    const menu = document.querySelector('.navbar .menu');

    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }

        if (window.scrollY > 500) {
            scrollUpBtn.classList.add('show');
        } else {
            scrollUpBtn.classList.remove('show');
        }
    });

    // Slide-up script
    scrollUpBtn.addEventListener('click', function () {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Toggle menu/navbar script
    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('active');
        menuBtn.querySelector('i').classList.toggle('active');
    });

    // Typing animation script
    function initializeTyped() {
        new Typed('.typing', {
            strings: ['Frontend Web Developer', 'Freelancer'],
            typeSpeed: 100,
            backSpeed: 100,
            loop: true,
        });
    }

    // Initial initialization
    initializeTyped();

    // Destroy and reinitialize after each loop
    let typedInstance = null;

    document.addEventListener('DOMContentLoaded', function () {
        typedInstance = initializeTyped();
    });

    // Example: Destroy and reinitialize after 5 seconds
    setTimeout(function () {
        typedInstance.destroy();
        typedInstance = initializeTyped();
    }, 5000);



    new Typed('.typing-2', {
        strings: ['Frontend Web Developer', 'Freelancer'],
        typeSpeed: 100,
        backSpeed: 100,
        loop: true,
    });
});
