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
        /*reload works but message doesn't present
        window.location.reload();*/
    } else {
        completedForm.textContent = 'Submitted';
    }

    /*JS function for text input
    function completedForm (event) {
        userName.addEventListener('input', completedForm);
        title.addEventListener('input', completedForm);
        content.addEventListener('input', completedForm);
    }*/


});