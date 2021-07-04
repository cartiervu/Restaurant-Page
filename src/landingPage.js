const HERO_IMAGE_SOURCE = '../src/assets/restaurant.jpg';

function initLandingPage() {
    const container = document.createElement('div');
    container.appendChild(initHero());

    return container;
}

function initHero() {
    const container = document.createElement('div');
    container.setAttribute('id', 'hero-container');

    const heroImage = new Image();
    heroImage.setAttribute('id', 'hero-img');
    heroImage.src = HERO_IMAGE_SOURCE;
    container.appendChild(heroImage);

    return container;
}

export {
    initLandingPage
}
