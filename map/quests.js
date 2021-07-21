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
    questLink.href = '../quest/?id=' + id;
    const description = document.createElement('span');
    description.textContent = findById(quests, id).description;
    questLink.append(description);
    return questLink;
}

function createCompletedQuest(id) {
    const quest = document.createElement('div');
    const description = document.createElement('span');
    description.textContent = findById(quests, id).description;
    quest.append(description);
    return quest;
}