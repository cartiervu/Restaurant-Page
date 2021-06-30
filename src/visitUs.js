import { titleCard } from './titleCard';

const TITLE = "VISIT US";
const DESCRIPTION = "";
const IMAGE_SOURCE = "../src/assets/vancouver.jpg";

function initVisitUsTitleCard() {
    return titleCard(TITLE, DESCRIPTION, IMAGE_SOURCE);
}

function initVisitUsBody() {
    const container = document.createElement('div');
    container.setAttribute('id', 'visit-us-body');
}

export {
    initVisitUsTitleCard
}