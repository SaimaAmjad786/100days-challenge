"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function show_magicians(magicians) {
    magicians.forEach(name => console.log(name));
}
//function to make magicians great through . map( ) it will modify array
function make_great(magicians) {
    return magicians.map(name => `THE GREAT ${name}`);
}
//define an array of magicians name
let magicians_names = ["Harrypoter", "Hamza", "Ahmed"];
//call make_great function to modify magicians names
let great_magicians = make_great(magicians_names);
//call show_magicians that show modified list of magicians
show_magicians(great_magicians);
