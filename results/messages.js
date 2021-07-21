// export function getMessages(user) {
//     if (user.hp <= 0) {
//         const message = aliveMessage(user);
//     }
//     else {
//         const message = deadMessage(user);
//     }
// }

// functon aliveMessage(user) {
//     const messageDiv = document.createElement('p');
//     const hpMessage = document.createElement('span');
//     const treasureMessage = document.createElement('span');

//     hpMessage.textContent = messages.lowHp;
    
//     if (hp > 40) {
//         hpMessage.textContent = messages.mediumHp;
//     } 
//     if (hp > 75) {
//         hpMessage.textContent = messages.highHp;
//     }

//     treasureMessage.textContent = messages.broke;

//     if (treasure > 25) {
//         treasureMessage.textContent = messages.mediumTreasure;
//     }
//     if (treasure > 75) {
//         treasureMessage.textContent = messages.rich;
//     }
// }

// functon deadMessage(user) {
//     const messageDiv = document.createElement('p');
    
//     const message = document.createElement('span');

//     message.textConst = 'broke and dead Mesage';
//     if (user.treasure > 35) {
//         message.textContent = 'dead and average wealth message';
//     }
//     if (user.treasure > 75) {
//         message.textContent = 'dead and rich message';
//     }
// }

// const messages = {
//     lowHp: 'Alive but in poor health message',
//     mediumHp: 'Alive and average health message',
//     highHp: 'Alive and healthy message',
//     broke: 'broke message',
//     mediumTreasure: 'Alive and average treasure message'
// }