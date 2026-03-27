'use strict';

export class User {
    // private properties
    #id;
    #name;
    #userName;
    #email;
    
    // constructor
    constructor(id, name, userName, email) {
        this.#id = id;
        this.#name = name;
        this.#userName = userName;
        this.#email = email;
    }

    // Getters
    get id() { return this.#id; }
    get name() { return this.#name; }
    get userName() { return this.#userName; }
    get email() { return this.#email; }
    
    getInfo() {
        return `
        <div class="profileCard">
            <img src="./asset/media/My Profile Picture.jpeg" class="profileImage">
            <h2>Name: ${this.#name}</h2>
            <p>Username: ${this.#userName}</p>
            <div class="details">
                <p>Email: ${this.#email}</p>
            </div>
        </div>
        `;
    }
}