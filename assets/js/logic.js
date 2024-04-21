/*JS for toggle*/

document.addEventListener('click', function() {
    let toggleEmojie = document.getElementById('toggle');

    toggleEmojie.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode', 'dark-mode .post');
    });
});