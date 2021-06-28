const content = document.getElementById('content');

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
    logoContainer.href = "#";

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

    const aboutButton = document.createElement('li');
    aboutButton.setAttribute('id', 'about-button');

    const contactButton = document.createElement('li');
    contactButton.setAttribute('id', 'contact-button');

    list.appendChild(menuButton);
    list.appendChild(aboutButton);
    list.appendChild(contactButton);
    
    return nav;
}

function loadHeader() {
    content.appendChild(initHeader());
}

function landingPage() {

}


loadHeader();