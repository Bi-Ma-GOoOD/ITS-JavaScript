"use strict";

// Exercise02 - Instantiation and Properties
class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    describe() {
        return `${this.title} (${this.pages} pages)`;
    }
}

const b1 = new Book("JS Basics", 200);
const b2 = new Book("DOM Guide", 150);

b1.author = "Tom";
delete b2.pages;

console.log(b1.describe()); // JS Basics (200 pages)
console.log(b2.describe()); // DOM Guide (undefined pages)
console.log("author" in b2); // false
console.log(b1.hasOwnProperty("describe")); // false
console.log(Object.keys(b1)); // ['title', 'pages', 'author']