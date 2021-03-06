import Dish from './dish';
import { titleCard } from './titleCard';

const TITLE = "OUR MENU";
const DESCRIPTION = "Locally sourced and sustainable";
const IMAGE_SOURCE = "../src/assets/food-background.jpg";

function initMenuTitleCard() {
    return titleCard(TITLE, DESCRIPTION, IMAGE_SOURCE);
}

function initMenuBody() {
    const container = document.createElement('div');
    container.setAttribute('id', 'menu-body');

    container.appendChild(initDishTypeContainer('appetizer'));
    container.appendChild(initDishTypeContainer('entree'));
    container.appendChild(initDishTypeContainer('side'));

    return container;
}

// REQUIRES: typeOfDish is 'appetizer' or 'entree' or 'side'
function initDishTypeContainer(typeOfDish) {
    const container = document.createElement('div');
    container.classList.add('dish-type-container');
    container.setAttribute('id', typeOfDish + "-container");

    const title = document.createElement('h1');
    title.textContent = (typeOfDish + "s").toUpperCase();
    container.appendChild(title);
    container.appendChild(document.createElement('hr'));

    const dishColumnContainer = document.createElement('div');
    dishColumnContainer.classList.add('dish-col-container');
    container.appendChild(dishColumnContainer);

    const dishArray = getAllDishes(typeOfDish);

    const leftColumn = document.createElement('div');
    leftColumn.classList.add('dish-left-col');
    dishColumnContainer.appendChild(leftColumn);

    const rightColumn = document.createElement('div');
    rightColumn.classList.add('dish-right-col');
    dishColumnContainer.appendChild(rightColumn);

    for (let i = 0; i < dishArray.length; i++) {
        let dish = dishContainer(dishArray[i]);
        if (i < dishArray.length / 2) {
            leftColumn.appendChild(dish);
        } else {
            rightColumn.appendChild(dish);
        }
    }

    return container;
}


// REQUIRES: dish instanceof Dish
function dishContainer(dish) {
    const container = document.createElement('div');
    container.classList.add('dish-container');

    const dishNamePriceContainer = document.createElement('div');
    dishNamePriceContainer.classList.add('dish-name-price-container');
    container.appendChild(dishNamePriceContainer);

    const dishName = document.createElement('h3');
    dishName.classList.add('dish-name');
    dishName.textContent = (dish.name).toUpperCase();
    dishNamePriceContainer.appendChild(dishName);
    
    const dishPrice = document.createElement('h5');
    dishPrice.classList.add('dish-price');
    dishPrice.textContent = dish.price;
    dishNamePriceContainer.appendChild(dishPrice);

    const dishDescription = document.createElement('h5');
    dishDescription.classList.add('dish-description');
    dishDescription.textContent = dish.description;
    container.appendChild(dishDescription);
    
    return container;
}

function getAllDishes(typeOfDish) {
    switch (typeOfDish) {
        case 'appetizer':
            return getAppetizers();
        case 'entree':
            return getEntrees();
        case 'side':
            return getSides();
        default:
            return null;
    }
}

function getAppetizers() {
    const list = [];

    for (let i = 0; i < 4; i++) {
        list.push(new Dish("Caesar Salad", 13, "pork belly crutons, aged parmesan"));
    }

    return list;
}

function getEntrees() {
    const list = [];

    for (let i = 0; i < 4; i++) {
        list.push(new Dish("Caesar Salad", 13, "pork belly crutons, aged parmesan"));
    }

    return list;
}

function getSides() {
    const list = [];

    for (let i = 0; i < 4; i++) {
        list.push(new Dish("Caesar Salad", 13, "pork belly crutons, aged parmesan"));
    }

    return list;
}

export {
    initMenuTitleCard,
    initMenuBody
}
