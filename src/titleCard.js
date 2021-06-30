function titleCard(title, description, imageSource) {
    const container = document.createElement('div');
    container.classList.add('title-card');

    const image = titleCardImage(imageSource);
    container.appendChild(image);

    const text = titleCardText(title, description);
    container.appendChild(text);

    return container;
}

function titleCardImage(imageSource) {
    const image = document.createElement('img');
    image.classList.add('title-card-image');
    image.src = imageSource;

    return image;
}

function titleCardText(title, description) {
    const textContainer = document.createElement('div');
    textContainer.classList.add('title-card-text-container');

    const textTitle = document.createElement('h1');
    textTitle.classList.add('title-card-text-title');
    textTitle.textContent = title;
    textContainer.appendChild(textTitle);

    const textDescription = document.createElement('h3');
    textDescription.classList.add('title-card-text-description');
    textDescription.textContent = description;
    textContainer.appendChild(textDescription);

    return textContainer;
}

export {
    titleCard
}