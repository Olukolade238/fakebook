'use strict';
import { Subscriber } from "./subscriber.js";
import { createPost } from "./post.js";

const textArea = document.getElementById("text");
const imageUpload = document.getElementById("imgUpload");
const postBtn = document.getElementById("postBtn");
const postsContainer = document.getElementById("postsContainer");
const accountBtn = document.getElementById("profileBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const accountInfo = document.getElementById("accountInfo");
const fileName = document.getElementById("fileName");