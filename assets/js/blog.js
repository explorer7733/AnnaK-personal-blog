/*JS for blog local storage*/

let postList = JSON.parse(localStorage.getItem('blogPost'));
let body = document.querySelector('main')
for (i = 0; i < postList.length; i ++) {
    console.log(postList[i]);

    let cardPost = document.createElement("div");
    let contentPost = document.createElement("blockquote");
    let titlePost = document.createElement("h2");
    let userNamePost = document.createElement("p");

    titlePost.textContent = postList[i].title
    contentPost.textContent = postList[i].content
    userNamePost.textContent = `Posted by: ${postList[i].userName}`
    cardPost.classList.add('post');
    cardPost.append(titlePost, contentPost, userNamePost);
    body.appendChild(cardPost);
}

