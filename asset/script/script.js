'use strict';
import { Subscriber } from "./subscriber.js";
import { createPost } from "./post.js";

const textArea = document.getElementById("text");
const imgUpload = document.getElementById("imgUpload");
const postButton = document.getElementById("postBtn");
const postsContainer = document.getElementById("postsContainer");
const profileBtn = document.getElementById("profileBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const accountInfo = document.getElementById("accountInfo");
const fileName = document.getElementById("fileName");


imgUpload.addEventListener("change", () => {
    if (imgUpload.files.length > 0) {
        fileName.textContent = imageUpload.files[0].name;
    }
});

const user = new Subscriber(
    "00000131455",
    "Olukolade Kaka",
    "Kay",
    "olukoladekaka@gmail.com",
    ["Student","MITT"],
    ["Product Designer","Ecommerce Website"],
    true
);

profileBtn.addEventListener("click", () => {
    accountInfo.textContent = user.getInfo();
    modal.classList.remove("hidden");
});

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden");
});

postButton.addEventListener("click", () => {
    const text = textArea.value.trim();
    const file = imgUpload.files[0];
        if (!text && !file) {
            alert("Please upload a file.");
            return;
        } let imageURL = null;
        if (file) {
            imageURL = URL.createObjectURL(file);
        }
    const post = createPost(user, text, imageURL);
    postsContainer.prepend(post);
    
    textArea.value = "";
    imgUpload.value = "";
    fileName.textContent = "";
});