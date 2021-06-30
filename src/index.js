import { initMenuTitleCard, initMenuBody } from './menu';
import { initAboutUsTitleCard, initAboutUsBody } from './about-us';
import { initVisitUsTitleCard } from './visitUs';
import './style.css';

const content = document.getElementById('content');

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

function initLandingPage() {
    const wrapper = document.createElement('div');
    wrapper.appendChild(initHero());

    return wrapper;
}

function initHero() {
    const container = document.createElement('div');
    container.setAttribute('id', 'hero');

    const heroImage = document.createElement('img');
    heroImage.setAttribute('id', 'hero-img');
    heroImage.src = "../src/assets/restaurant.jpg";
    container.appendChild(heroImage);

    return container;
}

function initFooter() {
    const container = document.createElement('footer');
    container.setAttribute('id', 'contact-container');
    
    container.appendChild(initContactInfoDiv("hours", "HOURS", "Monday to Friday - 9am to 5pm"));
    container.appendChild(initLocationInfoDiv());

    return container;
}

function initContactInfoDiv(id, title, infoText) {
    const div = document.createElement('div');
    div.setAttribute('id', id);

    const divTitle = document.createElement('h1');
    divTitle.textContent = title;
    div.appendChild(divTitle);

    if (infoText != undefined) {
        const divInfo = document.createElement('h3');
        divInfo.textContent = infoText;
        div.appendChild(divInfo);
    }

    return div;
}

function initLocationInfoDiv() {
    const locationDiv = initContactInfoDiv("location", "OUR LOCATION");

    const locationText = document.createElement('h3');
    locationText.innerHTML = "1055 Canada Place<br>Vancouver, BC<br>V6C 0C3";
    locationDiv.appendChild(locationText);

    const locationDirectionLink = document.createElement('a');
    locationDirectionLink.setAttribute('id', 'directions');
    locationDirectionLink.href = "https://goo.gl/maps/6o6frvtEdeVRTSKx5";
    locationDirectionLink.target = "_blank";

    const locationDirectionText = document.createElement('h3');
    locationDirectionText.textContent = "Get Directions";
    locationDirectionLink.appendChild(locationDirectionText);

    locationDiv.appendChild(locationDirectionLink);

    return locationDiv;
}

loadHeaderAndFooter();
loadLandingPage();