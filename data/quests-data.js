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
            description: 'quest 1 choice 3 description',
            result: 'quest 1 choice 3 result',
            hp: -50,
            treasure: -100
        }
    ]
};

const quest2 = {
    id: 2,
    title: 'Cat!',
    mapPosition: {
        x: '75vw',
        y: '35vh'
    },
    image: '../assets/mailman.jpeg',
    description: 'quest 2 description',
    choices: [
        {
            id: 1,
            description: 'quest 2 choice 1 description',
            result: 'quest 2 choice 1 result',
            hp: -35,
            treasure: 35
        },
        {
            id: 2,
            description: 'quest 2 choice 2 description',
            result: 'quest 2 choice 2 result',
            hp: -50,
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
    title: 'Delivery person!',
    mapPosition: {
        x: '60vw',
        y: '75vh'
    },
    image: '../assets/cat.jpeg',
    description: 'quest 3 description',
    choices: [
        {
            id: 1,
            description: 'quest 3 choice 1 description',
            result: 'quest 3 choice 1 result',
            hp: 50,
            treasure: -100
        },
        {
            id: 2,
            description: 'quest 3 choice 2 description',
            result: 'quest 3 choice 2 result',
            hp: -40,
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