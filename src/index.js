import { initLandingPage } from './landingPage';
import { initMenuTitleCard, initMenuBody } from './menu';
import { initAboutUsTitleCard, initAboutUsBody } from './about-us';
import { initVisitUsTitleCard } from './visitUs';
import { initFooter } from './footer'
import './style.css';

const content = document.getElementById('content');

function start() {
    loadHeaderAndFooter();
    loadLandingPage();
}

function loadHeaderAndFooter() {
    document.body.prepend(initHeader());
    document.body.append(initFooter());
}

function loadLandingPage() {
    content.appendChild(initLandingPage());
}

function loadMenuPage() {
    content.appendChild(initMenuTitleCard());
    content.appendChild(initMenuBody());
}

function loadAboutUsPage() {
    content.appendChild(initAboutUsTitleCard());
    content.appendChild(initAboutUsBody());
}

function loadVisitUsPage() {
    content.appendChild(initVisitUsTitleCard());
}

function switchTabs(tabFunction) {
    while (content.firstChild) {
        content.removeChild(content.lastChild);
    }
    tabFunction();
}

function initHeader() {
    const header = document.createElement('header');

    const headerInner = document.createElement('div');
    headerInner.classList.add('header-inner');
    header.appendChild(headerInner);

    headerInner.appendChild(initLogo());
    headerInner.appendChild(initHeaderNav());

    return header;
}

function initLogo() {
    const logoContainer = document.createElement('a');
    logoContainer.setAttribute('id', 'logo-container');
    logoContainer.addEventListener('click', () => {
        switchTabs(loadLandingPage);
    });

    const logoImg = document.createElement('img');
    logoImg.setAttribute('id', 'logo-img');
    logoImg.src = "../src/assets/logo.png";
    logoImg.alt =  "logo";
    logoContainer.appendChild(logoImg);

    return logoContainer;
}

function initHeaderNav() {
    const headerNav = document.createElement('div');
    headerNav.setAttribute('id', 'header-nav');
    headerNav.appendChild(initNavTabs());
    
    return headerNav;
}

function initNavTabs() {
    const nav = document.createElement('nav');
    const list = document.createElement('ul');
    nav.appendChild(list);

    const menuButton = document.createElement('li');
    menuButton.setAttribute('id', 'menu-button');
    menuButton.textContent = "menu";
    menuButton.addEventListener('click', () => {
        switchTabs(loadMenuPage);
    })

    const aboutButton = document.createElement('li');
    aboutButton.setAttribute('id', 'about-button');
    aboutButton.textContent = "about"
    aboutButton.addEventListener('click', () => {
        switchTabs(loadAboutUsPage);
    })

    const contactButton = document.createElement('li');
    contactButton.setAttribute('id', 'contact-button');
    contactButton.textContent = "visit us";
    contactButton.addEventListener('click', () => {
        switchTabs(loadVisitUsPage);
    })

    list.appendChild(menuButton);
    list.appendChild(aboutButton);
    list.appendChild(contactButton);
    
    return nav;
}

start();