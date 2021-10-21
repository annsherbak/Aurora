const headerNav = document.querySelector('.header__nav');
const headerBurger = document.querySelector('.header__burger');
const tabItem = document.querySelectorAll('.risk__tabs-item');
const tabBlock = document.querySelectorAll('.risk__tabs-block');
const themeTabItem = document.querySelectorAll('.theme__tabs-item');
const themeTabBlock = document.querySelectorAll('.theme__tabs-block');
const btnScrollDown = document.querySelector('.intro__desc-btn')

function toggleHeaderNav() {
    headerNav.classList.toggle('active')
    headerBurger.classList.toggle('active')
}
headerBurger.addEventListener('click', toggleHeaderNav);


function scrollDown() {
    const windowCoords = document.documentElement.clientHeight;
    (function scroll() {
        if (window.pageYOffset < windowCoords) {
            window.scrollBy(0, 10);
            setTimeout(scroll, 0);
        }
        if (window.pageYOffset > windowCoords) {
            window.scrollTo(0, windowCoords);
        }
    })();
}
btnScrollDown.addEventListener('click', scrollDown);


tabItem.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        tabItem.forEach(child => {
            child.classList.remove('risk__tabs-item--active')
        });
        tabBlock.forEach(child => {
            child.classList.remove('risk__tabs-block--active')
        });
        item.classList.add('risk__tabs-item--active');
        document.getElementById(id).classList.add('risk__tabs-block--active');
    })
});

themeTabItem.forEach(item => {
    item.addEventListener('click', function (e) {
        e.preventDefault();
        const id = e.target.getAttribute('href').replace('#', '');
        themeTabItem.forEach(child => {
            child.classList.remove('theme__tabs-item--active')
        });
        themeTabBlock.forEach(child => {
            child.classList.remove('theme__tabs-block--active')
        });
        item.classList.add('theme__tabs-item--active');
        document.getElementById(id).classList.add('theme__tabs-block--active');
    })
});

if (window.innerWidth < 900) {
     const instruction = document.querySelector('.instruction');
     const instructionButton = document.querySelector('.instruction__chief-download')
     instruction.appendChild(instructionButton);
}

