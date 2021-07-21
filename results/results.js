// Import needed functions
import { getUser } from '../data/api.js';
import { getMessages, } from './messages.js';

// Grab DOM elements
const storyDisplay = document.getElementById('story-display');

const user = getUser();

function renderResult(user) {
    const message = getMessages(user);
    const messageDiv = document.createElement('p');
    messageDiv.appendChild(message);
    storyDisplay.append(messageDiv);
}

renderResult(user);
