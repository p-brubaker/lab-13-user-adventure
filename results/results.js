// Import needed functions
import { getUser } from '../data/api.js';
import { getHealthMessage, getTreasureMessage, getResultImage} from './messages.js';

// Grab DOM elements
const storyDisplay = document.getElementById('story-display');
const resultImage = document.getElementById('result-image');

const user = getUser();

function renderResult(user) {
    const healthMessage = getHealthMessage(user.hp);
    const treasureMessage = getTreasureMessage(user.hp, user.treasure);
    const img = getResultImage(user.hp, user.treasure);
}

renderResult(user);
