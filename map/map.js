import { isDead, hasCompletedQuests } from '../common/utils.js';
import { renderQuests } from './quests.js';
import { getUser } from '../data/api.js';
// import quests from '../data/quests-data.js';

const questsDiv = document.getElementById('quests');

const user = getUser();

if (isDead(user) || hasCompletedQuests(user)) {
    window.location = '../results';
}

const renderedQuests = renderQuests(user);

for (let quest of renderedQuests) {
    questsDiv.append(quest);
}






