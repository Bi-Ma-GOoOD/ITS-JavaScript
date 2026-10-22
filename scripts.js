"use strict";

// Exercise 01 - Methods and this
const counter = {
    count: 0,
    increment() {
        this.count++;
        return this;
    },
    getCount() {
        return this.count;
    }
};

counter.increment().increment().increment();
console.log(counter.getCount());   // 3

const fn = counter.getCount;
console.log(fn());                 // TypeError: Cannot read properties of undefined (reading 'count')