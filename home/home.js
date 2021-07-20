// Import needed functions
import { makeUser } from './make-user.js';
import { setUser } from '../data/api.js';

// Grab DOM elements
const userSignUpForm = document.getElementById('user-sign-up');

userSignUpForm.addEventListener('submit', (e) => {
    // prevent page reload
    e.preventDefault();

    // create new form data object
    const formData = new FormData(userSignUpForm);

    // create a new user from the form data object
    const user = makeUser(formData);

    // initialize user object in local storage
    setUser(user);

    // redirect to map page
    window.location = '../map/index.html';

});
