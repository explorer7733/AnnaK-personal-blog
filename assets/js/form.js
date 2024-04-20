/*JS for submit button*/

const submitButton = document.querySelector('.submit-button');

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let userName = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    let completedForm = document.querySelector(".form-container");

    if (userName === '' || title === '' || content === '') {
        completedForm.textContent = 'Please complete the form';
    } else {
        completedForm.textContent = 'Submitted';
    }
});