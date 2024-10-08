let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const mainContainer = document.getElementById('main-container');

mainContainer.addEventListener('scroll', function () {
    let scrollTop = mainContainer.scrollTop;
    if (scrollTop > lastScrollTop) {
        navbar.classList.add('icon');
    }
    else {
        navbar.classList.remove('icon');
    }
    lastScrollTop = scrollTop;
})