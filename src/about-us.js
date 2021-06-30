import { titleCard } from './titleCard';

const TITLE = "ABOUT US";
const DESCRIPTION = "Cooked to perfection";
const IMAGE_SOURCE = "../src/assets/chef.jpg";

function initAboutUsTitleCard() {
    return titleCard(TITLE, DESCRIPTION, IMAGE_SOURCE);
}

function initAboutUsBody() {
    const container = document.createElement('div');
    container.setAttribute('id', 'about-us-body');
    
    container.appendChild(firstBodySection());
    container.appendChild(secondBodySection());

    return container;
}

function firstBodySection() {
    const container = document.createElement('div');
    container.classList.add('about-us-body-section');

    const text = document.createElement('p');
    text.classList.add('about-us-body-text');
    text.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc luctus tristique dui vel tincidunt. Nullam orci leo, ultricies ac dignissim sed, cursus vitae metus. Sed consequat nisi vulputate maximus scelerisque. Curabitur lacus augue, porttitor vel ultrices nec, luctus non ligula. Curabitur in maximus ex. Nullam luctus, dolor a aliquet fringilla, purus tortor tristique tortor, quis eleifend dui velit eget enim. Aenean mattis ante nec felis fermentum gravida. Nam venenatis ex commodo quam hendrerit dignissim. Nulla aliquam lorem ac quam consectetur, at pharetra sem facilisis. Proin et tellus porta, molestie augue mattis, varius tortor. Etiam gravida, nunc porta ultricies convallis, nunc erat ultricies sapien, vitae tempus diam elit et sem. Donec sodales, augue in volutpat feugiat, urna nibh placerat leo, eu cursus nisi metus sed nunc.`;
    container.appendChild(text);

    const image = document.createElement('img');
    image.classList.add('about-us-body-image');
    image.setAttribute('id', 'about-us-body-right-image');
    image.src = '../src/assets/waiter.jpg';
    container.appendChild(image);

    return container;
}

function secondBodySection() {
    const container = document.createElement('div');
    container.classList.add('about-us-body-section');

    const image = document.createElement('img');
    image.classList.add('about-us-body-image');
    image.setAttribute('id', 'about-us-body-left-image');
    image.src = '../src/assets/waiter(1).jpg';
    container.appendChild(image);

    const text = document.createElement('p');
    text.classList.add('about-us-body-text');
    text.textContent = `Quisque eget venenatis ex, eget bibendum mi. Phasellus sagittis ac justo eget tincidunt. Etiam lobortis tellus sit amet urna blandit maximus. Nulla fringilla lacus id metus cursus, volutpat malesuada quam tempor. Proin urna felis, accumsan id consectetur vitae, malesuada eget nisi. Cras malesuada urna id lacus porttitor, ac tincidunt erat condimentum. Mauris dignissim ipsum quis posuere lacinia. Pellentesque sollicitudin felis ligula, quis varius risus fermentum id. Aenean non sapien at tellus vulputate accumsan nec id ex. Nullam porta eros lorem, ac dictum lectus ullamcorper ut. Vivamus ultricies sed dui at facilisis. Nunc pulvinar vulputate sapien a accumsan. Integer posuere condimentum euismod. Aenean quis arcu ligula.`;
    container.appendChild(text);

    return container;
}

export {
    initAboutUsTitleCard,
    initAboutUsBody
}