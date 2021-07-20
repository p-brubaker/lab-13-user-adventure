// Import needed functions
import quests from '../data/quests-data.js';
import { findById } from '../common/utils.js';
import { renderChoices } from './render-choices.js';

// Grab DOM elements
const img = document.getElementById('image');
const description = document.getElementById('description');
// const choicesForm = document.getElementById('choices-form');
const choices = document.getElementById('choices');
// const result = document.getElementById('result');
// const resultDescription = document.getElementById('result-description');


const searchParams = new URLSearchParams(window.location.search);
const quest = findById(quests, Number(searchParams.get('id')));

choices.append(renderChoices(quest));

img.src = quest.image;
description.textContent = quest.description;







