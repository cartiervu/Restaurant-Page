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

export {
    initFooter
}