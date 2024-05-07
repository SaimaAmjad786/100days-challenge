function show_magicians(magicians) {
    magicians.forEach(function (name) { return console.log(name); });
}
//Function to make magicians great through map .() it will modify array
function make_great(magicians) {
    return magicians.map(function (name) { return "THE GREAT ".concat(name); });
}
//Define an array of magicians names
var magicians_name = ["Harry poter", "Hamza", "Ahmed"];
//Making a copy of original array through .slice() function
var copy_magicians_names = magicians_name.slice();
//Modify the copied array to include "The great" with their names
var copy_great_magicians = make_great(copy_magicians_names);
//Original
console.log("Original Array\n");
show_magicians(magicians_name);
//Copied
console.log("\nCopied Array\n");
show_magicians(copy_great_magicians);
