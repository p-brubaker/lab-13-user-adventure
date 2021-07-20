import quests from '../data/quests-data.js';

export function hasCompletedQuests(user) {
    for (let quest of quests) {
        if (!user.completed[quest.id]) {
            return false;
        }
    }
    return true;
}

export function isDead(user) {
    (user.hp <= 0) ? true : false;
}

export function findById(array, id) {
    for (let item of array) {
        if (item.id === id) {
            return item;
        }
    }
    return null;
}