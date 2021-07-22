// Import needed functions
import quests from '../data/quests-data.js';
import { findById } from '../common/utils.js';
import { renderChoices } from './render-choices.js';
import { getUser, setUser } from '../data/api.js';

// Grab DOM elements
const img = document.getElementById('image');
const description = document.getElementById('description');
const choicesForm = document.getElementById('choice-form');
const choices = document.getElementById('choices');
const result = document.getElementById('result');
const resultDescription = document.getElementById('result-description');

const searchParams = new URLSearchParams(window.location.search);
const quest = findById(quests, Number(searchParams.get('id')));
img.src = quest.image;
description.textContent = quest.description;

let renderedChoices = renderChoices(quest);

for (let choice of renderedChoices) {
    choices.appendChild(choice);
}

choicesForm.addEventListener('submit', (e) => {
    choicesForm.style.display = 'none';
    e.preventDefault();
    description.style.display = 'none';
    const choicesFormData = new FormData(choicesForm);
    const choiceId = (choicesFormData.get('user-choice'));
    const userChoice = findById(quest.choices, Number(choiceId));
    resultDescription.textContent = userChoice.result;
    result.classList.remove('hidden');
    const userObject = getUser();
    setUser(
        {
            name: userObject.name,
            breed: userObject.breed,
            completed: [...userObject.completed, Number(quest.id)],
            hp: userObject.hp + userChoice.hp,
            treasure: userObject.treasure + userChoice.treasure
        }
    );
});






