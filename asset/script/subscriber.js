'use strict';

import { User } from "./user.js";

export class Subscriber extends User {
    // private properties
    #pages;
    #groups;
    #canMonetize;

    constructor(id, name, userName, email, pages, groups, canMonetize) {
        super(id, name, userName, email);
        this.#pages = pages;
        this.#groups = groups;
        this.#canMonetize = canMonetize;
    }

    get pages() { return this.#pages; }
    get groups() { return this.#groups; }
    get canMonetize() { return this.#canMonetize; }

    getInfo() {
        let userInfo = super.getInfo();
        return `
        <div class="profile-card">
            <img src="./asset/media/My Profile Picture.jpeg" class="profileImage">
            <h2>${userInfo}</h2>
            <p>${this.userName}</p>
            <div class="details">
                <p>Email: ${this.email}</p>
                <p>Pages: ${this.#pages.join(", ")}</p>
                <p>Groups: ${this.#groups.join(", ")}</p>
                <p>Monetization: ${this.#canMonetize}</p>
            </div>
        </div>
        `;
    }

}