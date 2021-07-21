export function getMessages(user) {
    let message;
    if (user.hp <= 0) {
        message = deadMessage(user);
    }
    else {
        message = aliveMessage(user);
    }
    return message;
}

function aliveMessage(user) {
    const messageDiv = document.createElement('p');
    const hpMessage = document.createElement('span');
    const treasureMessage = document.createElement('span');
    messageDiv.append(hpMessage, treasureMessage);

    hpMessage.textContent = messages.lowHp;
    
    if (user.hp > 40) {
        hpMessage.textContent = messages.mediumHp;
    } 
    if (user.hp > 75) {
        hpMessage.textContent = messages.highHp;
    }

    treasureMessage.textContent = messages.broke;

    if (user.treasure > 25) {
        treasureMessage.textContent = messages.mediumTreasure;
    }
    if (user.treasure > 75) {
        treasureMessage.textContent = messages.rich;
    }

    return messageDiv;
}

function deadMessage(user) {
    const messageDiv = document.createElement('p');
    const message = document.createElement('span');
    messageDiv.appendChild(message);

    message.textContent = 'broke and dead Mesage';
    if (user.treasure > 35) {
        message.textContent = 'dead and average wealth message';
    }
    if (user.treasure > 75) {
        message.textContent = 'dead and rich message';
    }
    return messageDiv;
}

const messages = {
    lowHp: 'Alive but in poor health message',
    mediumHp: 'Alive and average health message',
    highHp: 'Alive and healthy message',
    broke: 'broke message',
    mediumTreasure: 'Alive and average treasure message',
    rich: 'Alive and rich treasure message'
};
