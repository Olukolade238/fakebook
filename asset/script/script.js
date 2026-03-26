'use strict';
import { Subscriber } from "./subscriber.js";
import { createPost } from "./post.js";

const textArea = document.getElementById("text");
const imgUpload = document.getElementById("imgUpload");
const postBtn = document.getElementById("postBtn");
const postsContainer = document.getElementById("postsContainer");
const accountBtn = document.getElementById("profileBtn");
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
    "1",
    "Olukolade Kaka",
    "Kay",
    "olukoladekaka@gmail.com",
    ["Student","MITT"],
    ["Product Designer","Ecommerce Website"],
    true
);