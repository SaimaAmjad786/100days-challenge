//define a function with a rest parameter that accepts items arguments representing our sandwich
function makeSandwich (...items:string[]){

    console.log("\nMaking a sandwich with the following items: \n");

    items.forEach(singleitems => console.log(singleitems));

    console.log("\nNow enjoy Sandwich");

}

//call the function 3 times with 3  different number of arguments 

makeSandwich("Chicken","Cheese","Mayo","Egg");

makeSandwich("Bread","Butter");

makeSandwich("Bread","Butter","Mayo","Egg","cheese","Chicken","Onion","Tomato");
