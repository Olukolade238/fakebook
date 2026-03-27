'use strict';

export function createPost(user, text, imageURL) {
    const post = document.createElement("div");
    post.className = "post";
    const date = new Date().toLocaleDateString();
    let contentClass = "";

    if (text && imageURL) {
        contentClass = "postTextImage";
    } else if (imageURL && !text) {
            contentClass = "postImageOnly";
        } else {
            contentClass = "postTextOnly";
        }

    post.innerHTML = `
    <div class="profileCard">
        <div class="userInfo">
            <img src="./asset/media/My Profile Picture.jpeg" class="profileImage">
            <div>
                <div class="userName">${user.name}</div>
            </div>
        </div>
        <div class="postDate">${date}</div>
    </div>

    <div class="postBody ${contentClass}">
        ${text ? `<p class="postText">${text}</p>` : ""}
        ${imageURL ? `<img src="${imageURL}" class="postImage">` : ""}
    </div>
    `;
    return post;
}