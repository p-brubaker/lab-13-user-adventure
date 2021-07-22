import quests from '../data/quests-data.js';

export function hasCompletedQuests(user) {
    for (let quest of quests) {
        if (user.completed.indexOf(quest.id) === -1) {
            return false;
        }
    }
    return true;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}