import { findById } from '../common/utils.js';
import quests from '../data/quests-data.js';

export function renderQuests(user) {
    let renderedQuests = [];
    for (let quest of quests) {
        if (user.completed.indexOf(quest.id) !== -1) {
            renderedQuests.push(createCompletedQuest(quest.id));
        } else {
            renderedQuests.push(createQuestLink(quest.id));
        }
    }
    return renderedQuests;
}

function createQuestLink(id) {
    const questLink = document.createElement('a');
    questLink.classList.add('questlink');
    const quest = findById(quests, id);
    questLink.style.top = quest.mapPosition.y;
    questLink.style.left = quest.mapPosition.x;
    questLink.href = '../quest/?id=' + id;
    const title = document.createElement('span');
    title.textContent = findById(quests, id).title;
    questLink.append(title);
    return questLink;
}

function createCompletedQuest(id) {
    const quest = findById(quests, id);
    const questDiv = document.createElement('div');
    questDiv.classList.add('completed-quest');
    questDiv.style.top = quest.mapPosition.y;
    questDiv.style.left = quest.mapPosition.x;
    const title = document.createElement('span');
    title.textContent = findById(quests, id).title;
    questDiv.append(title);
    return questDiv;
}