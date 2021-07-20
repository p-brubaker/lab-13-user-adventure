import { isDead, hasCompletedQuests } from '../utils.js';
import { renderQuests } from './quests.js';
import { getUser } from '../data/api.js';

const questsDiv = document.getElementById('quests');

const user = getUser();

if (isDead(user) || hasCompletedQuests(user)) {
    window.location = '../results';
}

const renderedQuests = renderQuests(user);

for (let quest of renderedQuests) {
    questsDiv.append(quest);
}






