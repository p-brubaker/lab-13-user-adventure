const quest1 = {
    id: 1,
    title: 'Squirrel!',
    mapPosition: {
        x: '25vw',
        y: '35vh'
    },
    image: '../assets/squirrel.jpeg',
    description: 'A plump squirrel skitters out from behind the tree on the other side of the road... Do you...',
    choices: [
        {
            id: 1,
            description: 'Ignore it and mind your own business',
            result: 'The squirrel, sensing weakness, gets together with its squirrel friends and they ambush you, leaving you grievously wounded. During the attack, one of the squirrels drops $50 so its not a total loss',
            hp: -100,
            treasure: 50
        },
        {
            id: 2,
            description: 'Bark at the squirrel!',
            result: 'The squirrel is intimidated and runs away, then comes back with a basket full of food and $50 to appease you.',
            hp: 50,
            treasure: 50
        },
        {
            id: 3,
            description: 'Attack the squirrel!',
            result: 'Halfway across the road, an inconsiderate cyclist comes zooming out of nowhere and collides with you. You are wounded and the cyclist steals your ball.',
            hp: -50,
            treasure: -100
        }
    ]
};

const quest2 = {
    id: 2,
    title: 'Delivery Person!',
    mapPosition: {
        x: '75vw',
        y: '35vh'
    },
    image: '../assets/mailman.jpeg',
    description: 'You smell something strange and unpleasant in the front yard, so you squeeze under the fence to investigate. An ugly, sweaty stranger in odd clothing is approaching your house holding a suspicious parcel. Do you... ',
    choices: [
        {
            id: 1,
            description: 'Bite them!',
            result: 'You sink your teeth into the strangers leg and shake it back and forth while growling ferociously. They drop the parcel, which contains $150, but not before deploying bearspray on you.',
            hp: -50,
            treasure: 150
        },
        {
            id: 2,
            description: 'Bark at them!',
            result: 'The delivery person happens to be a black belt in an esoteric martial created specifically for hand to hand combat with dogs. There is a blur of motion, and you are grievously wounded. However, while lying vanquished on the ground, you see a ball.',
            hp: -150,
            treasure: 100
        },
        {
            id: 3,
            description: 'quest 1 choice 3 description',
            result: 'quest 1 choice 3 result',
            hp: -10,
            treasure: 10
        }
    ]
};

const quest3 = {
    id: 3,
    title: 'Cat!',
    mapPosition: {
        x: '60vw',
        y: '75vh'
    },
    image: '../assets/cat.jpeg',
    description: 'quest 3 description',
    choices: [
        {
            id: 1,
            description: 'Attack!',
            result: 'You easily defeat the cat, because it is small and weak and you are a big strong dog. The cat yowls and slinks away licking itself, and you find a ball on the ground.',
            hp: 10,
            treasure: 100
        },
        {
            id: 2,
            description: 'Bark at the cat!',
            result: 'The cat hisses and arches its back, and underneath it you see a ball you had lost earlier and $50. The cat runs away snarling and meowing frantically as you bound forward to claim your prize. What a good day!',
            hp: 0,
            treasure: 100
        },
        {
            id: 3,
            description: 'quest 3 choice 3 description',
            result: 'quest 3 choice 3 result',
            hp: 0,
            treasure: -50
        }
    ]
};

const quests = [
    quest1,
    quest2,
    quest3
];

export default quests;