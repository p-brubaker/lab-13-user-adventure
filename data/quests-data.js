const quest1 = {
    id: 1,
    title: 'quest 1 title',
    mapPosition: {
        x: 25,
        y: 25
    },
    image: '../assets/squirrel.jpeg',
    description: 'quest 1 description',
    choices: [
        {
            id: 1,
            description: 'quest 1 choice 1 description',
            result: 'quest 1 choice 1 result',
            hp: 0,
            treasure: 0
        },
        {
            id: 2,
            description: 'quest 1 choice 2 description',
            result: 'quest 1 choice 2 result',
            hp: 0,
            treasure: 0
        },
        {
            id: 3,
            description: 'quest 1 choice 3 description',
            result: 'quest 1 choice 3 result',
            hp: 0,
            treasure: 0
        }
    ]
};

const quest2 = {
    id: 2,
    title: 'quest 2 title',
    mapPosition: {
        x: 75,
        y: 35
    },
    image: '../assets/mailman.jpeg',
    description: 'quest 2 description',
    choices: [
        {
            id: 1,
            description: 'quest 2 choice 1 description',
            result: 'quest 2 choice 1 result',
            hp: 0,
            treasure: 0
        },
        {
            id: 2,
            description: 'quest 2 choice 2 description',
            result: 'quest 2 choice 2 result',
            hp: 0,
            treasure: 0
        },
        {
            id: 3,
            description: 'quest 1 choice 3 description',
            result: 'quest 1 choice 3 result',
            hp: 0,
            treasure: 0
        }
    ]
};

const quest3 = {
    id: 3,
    title: 'quest 3 title',
    mapPosition: {
        x: 75,
        y: 75
    },
    image: '../assets/cat.jpeg',
    description: 'quest 3 description',
    choices: [
        {
            id: 1,
            description: 'quest 3 choice 1 description',
            result: 'quest 3 choice 1 result',
            hp: 0,
            treasure: 0
        },
        {
            id: 2,
            description: 'quest 3 choice 2 description',
            result: 'quest 3 choice 2 result',
            hp: 0,
            treasure: 0
        },
        {
            id: 3,
            description: 'quest 3 choice 3 description',
            result: 'quest 3 choice 3 result',
            hp: 0,
            treasure: 0
        }
    ]
};

const quests = [
    quest1,
    quest2,
    quest3
];

export default quests;