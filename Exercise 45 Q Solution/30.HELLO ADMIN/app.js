"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let users = ["sana", "admin", "ahmed", "hamza", "saba"];
for (let user of users) {
    if (user === "admin") {
        console.log("Hello admin , would you like to see a status report?");
    }
    else {
        console.log(`Hello ${user}, thank you for logging in again.`);
    }
}
