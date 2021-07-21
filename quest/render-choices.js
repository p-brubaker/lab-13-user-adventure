export function renderChoices(quest) {
    let choices = [];
    for (let choice of quest.choices) {
        let li = document.createElement('li');
        let desc = document.createElement('span');
        let input = document.createElement('input');
        input.name = 'user-choice';
        input.value = choice.id;

        desc.textContent = choice.description;
        input.type = 'radio';
        li.append(input, desc);
        choices.push(li);
    }
    return choices;
}
