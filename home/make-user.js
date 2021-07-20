export function makeUser(formData) {
    return {
        name: formData.get('name'),
        breed: formData.get('breed'),
        completed: {},
        hp: 100,
        treasure: 0
    };
}