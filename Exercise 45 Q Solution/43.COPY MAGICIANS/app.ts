function show_magicians (magicians:string[]){
    magicians.forEach(name=>console.log(name))
}

//Function to make magicians great through map .() it will modify array
function make_great (magicians:string[]){
   return magicians.map(name=>`THE GREAT ${name}`)
}

//Define an array of magicians names
let magicians_name = ["Harry poter","Hamza","Ahmed"]

//Making a copy of original array through .slice() function
let copy_magicians_names=magicians_name.slice();

//Modify the copied array to include "The great" with their names
let copy_great_magicians = make_great (copy_magicians_names);

//Original
console.log("Original Array\n")
show_magicians(magicians_name)

//Copied
console.log("\nCopied Array\n")
show_magicians(copy_great_magicians)
