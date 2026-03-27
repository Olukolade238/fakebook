# Fakebook – Social Media Webpage
## Project Overview

**Fakebook** is a simple social media style web application developed as part of a web development assignment. The goal of this project was to practice modern front-end development concepts such as **DOM manipulation, object-oriented programming (OOP), event handling, and modular JavaScript**.

The application allows a user to create posts with **text and/or images**, display those posts dynamically on the page, and view **profile information in a modal window**. The project simulates basic functionality similar to a simplified version of Facebook.

---

## Features

### 1. Create Posts

Users can create a post by:

* Typing text in the textarea
* Uploading an image using the camera icon
* Clicking the **Post** button

The post will appear instantly at the **top of the feed**.

### 2. Image Upload Indicator

When a user selects an image file, the file name appears under the camera icon to confirm the file was selected successfully.

### 3. Dynamic Post Feed

Posts are created dynamically using JavaScript and inserted into the DOM.
Each post includes:

* User profile image
* Username
* Date of the post
* Text content (optional)
* Image content (optional)

### 4. Profile Modal

Clicking the **profile picture in the header** opens a modal window displaying the user's profile information, including:

* Name
* Username
* Email
* Pages
* Groups
* Monetization status

The modal can be closed using the **X button**.

### 5. Object-Oriented Structure

The project uses **JavaScript classes and inheritance** to model users.

* `User` class → Base class containing general user information.
* `Subscriber` class → Extends the User class and adds:

  * Pages
  * Groups
  * Monetization status.

---

## Technologies Used

The following software and technologies were used to build Fakebook:

### Development Tools

* **Visual Studio Code** – Code editor used to write and manage the project files.
* **Git Bash** – Used for version control and project management.
* **Live Server Extension** – Used to run the project locally during development.

### Programming Languages

* **HTML**

  * Used to structure the webpage layout.
  * Defines elements such as the header, post form, modal, and post container.

* **CSS**

  * Used for styling the interface.
  * Controls layout, colors, spacing, typography, and responsiveness.

* **JavaScript (ES6 Modules)**

  * Handles user interaction and dynamic content.
  * Manages events such as clicking buttons, uploading files, and displaying posts.

### JavaScript Concepts Implemented

* DOM manipulation
* Event listeners
* Template literals
* ES6 modules
* Classes and inheritance
* Private class properties
* Dynamic element creation
* File handling using `URL.createObjectURL()`

### Libraries

* **Font Awesome**

  * Used for icons such as the camera icon in the upload button.

---

## File Descriptions

**index.html**

* Contains the main structure of the webpage.

**styles.css**

* Handles layout styling and design of the Fakebook interface.

**script.js**

* Main JavaScript file that controls the application logic.

**post.js**

* Contains the function responsible for generating post elements.

**user.js**

* Defines the base `User` class.

**subscriber.js**

* Extends the `User` class to include additional subscriber data.

---

## Learning Objectives

Through this project, the following concepts were practiced:

* Creating dynamic web interfaces using JavaScript
* Implementing **Object-Oriented Programming (OOP)** in JavaScript
* Using **ES6 modules for code organization**
* Handling **file uploads in web applications**
* Manipulating the **Document Object Model (DOM)**
* Designing simple UI components such as **modals and post feeds**

---

## Author

**Olukolade Kaka**

Web Development Student,

MITT (Manitoba Institute of Trades and Technology).