//define a function to print each magician name from an array
function show_magician(magician) {
    magician.forEach(function (name) { return console.log(name); });
}
//define an array containing magician name
var magician_names = ["Harry Poter", "Hamza", "Ahmed"];
//call the function each magician name
show_magician(magician_names);
