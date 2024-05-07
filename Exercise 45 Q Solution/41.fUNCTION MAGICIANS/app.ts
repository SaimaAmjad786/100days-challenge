//define a function to print each magician name from an array

function show_magician (magician: string []){
    magician.forEach(name => console.log(name));
}

//define an array containing magician name
let magician_names = ["Harry Poter", "Hamza", "Ahmed"]

//call the function each magician name
show_magician (magician_names);
