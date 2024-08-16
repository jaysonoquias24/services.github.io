let lastScrollTop = 0;
const navbar = document.getElementById('navbar');
const searchBar = document.getElementById('search-bar');
const textContainer = document.getElementById('text-container');
const searchBarWrapper = document.getElementById('search-bar-wrapper');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    if (scrollTop > lastScrollTop) {
        navbar.classList.add('hidden');
    } else {
        navbar.classList.remove('hidden');
    }

    // Check if we've scrolled past the search-bar to fix it at the top
    if (scrollTop > searchBar.offsetTop) {
        searchBar.classList.add('fixed');
        if (navbar.classList.contains('hidden')) {
            searchBar.classList.add('top-fixed');
        } else {
            searchBar.classList.remove('top-fixed');
        }
    } else {
        searchBar.classList.remove('fixed');
        searchBar.classList.remove('top-fixed');
    }

    // Visibility of the text-container and search-bar-wrapper
    if (scrollTop > searchBar.offsetTop) {
        textContainer.classList.add('hidden');
        searchBarWrapper.classList.add('visible');
    } else {
        textContainer.classList.remove('hidden');
        searchBarWrapper.classList.remove('visible');
    }

    lastScrollTop = scrollTop;
});

// Mobile menu
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

let lastScrollToP = 0;
const headerButton = document.querySelector('.header-button');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollToP) {
        headerButton.classList.add('hidden');
    } else {
        headerButton.classList.remove('hidden');
    }

    lastScrollToP = scrollTop;
});

//gallery scroll animation
document.addEventListener('scroll', function() {
    const topElement = document.querySelector('.gallery-top');
    const bottomElement = document.querySelector('.gallery-bottom');
    
    const topPosition = topElement.getBoundingClientRect().top;
    const bottomPosition = bottomElement.getBoundingClientRect().top;
    
    const screenHeight = window.innerHeight;

    // For the top gallery
    if (topPosition < screenHeight && topPosition > 0) {
        topElement.classList.add('scrolled-right');
    }

    // For the bottom gallery
    if (bottomPosition < screenHeight && bottomPosition > 0) {
        bottomElement.classList.add('scrolled-left');
    }
});
