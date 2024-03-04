const navSlide = () => {
    const burger = document.querySelector('.burger');
    const sidebarNav = document.querySelector('.sidebar');
    const sidebarLinks = document.querySelectorAll('.sidebar-links li');

    //Burger to change to an X on toggle (runs animation located css)
    burger.addEventListener('click', () => {
        sidebarNav.classList.toggle('sidebar-active');
        burger.classList.toggle('xOnPress');
    });
    //This will animate links to transition in with ease
    sidebarLinks.forEach((link, index) => {
        link.style.animation = `sidebarLinkFade 0.5s ease forwards ${index / 7 + 0.3}s`;
    });
}

navSlide();
