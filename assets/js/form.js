/*JS for submit button*/

const submitButton = document.querySelector('.submit-button');

function savedBlogPost (blogPost) {
    let existingBlogs = JSON.parse(localStorage.getItem('blogPost')) || []
    existingBlogs.push(blogPost);
    localStorage.setItem('blogPost', JSON.stringify(existingBlogs));
}

submitButton.addEventListener('click', function(event) {
    event.preventDefault();

    let userName = document.getElementById('username').value;
    let title = document.getElementById('title').value;
    let content = document.getElementById('content').value;

    let completedForm = document.querySelector(".form-container");

    if (userName === '' || title === '' || content === '') {
       alert('Please complete the form');
        
    } else {
        completedForm.textContent = 'Submitted';
        
        let blogPost = {userName, title, content}
        savedBlogPost(blogPost)
        window.location = 'blog.html'
    }
});

