// //creating a variable 
 let apple = "apple";

// // //Test for equality
 console.log("apple is equal to apple");
 console.log(apple == "apple");

// // //Test for inequality
console.log("apple is not equal to apple")
 console.log(apple != "apple");

// // //Test using the lower case function
let uppercaseApple = "APPLE";

// // //Equal to 
 console.log("Apple is equal to apple after converting to lowercase");
 console.log(uppercaseApple.toLowerCase() == "apple");


// // //Not equal to
console.log("Apple is notequal to apple after converting to lowercase");
 console.log(uppercaseApple.toLowerCase() != "apple");

// //Numerical test involving equality not equality , greater than and less than ,greater than or equal to and less than or equal tp

 let ten = 10;
let twenty =20;

// // //Equal to
 console.log("ten is equal to twenty");
 console.log(ten == twenty);

//Not equal to
console.log("ten is not equal to twenty");
console.log(ten != twenty);

//Greater than 
console.log("twenty is greater than ten");
 console.log(twenty > ten);

// // //Less than 
console.log("twenty is less than ten");
 console.log(twenty < ten);

// // //Greater than or equal to
console.log("twenty is greater than or equal to ten")
console.log(twenty >= ten);

// // //Less than or equal to
 console.log("twenty is less than or equal to ten");
 console.log(twenty <= ten);

// //Test using "and" and "or" operators
//Using && (and)
console.log("twenty is not equal to ten and twenty is greater than ten");
console.log(twenty != ten && twenty > ten);

console.log("twenty is not equal to ten and ten is greater than twenty");
 console.log(twenty != ten && ten > twenty);

// //Using || (or)
console.log("twenty is greater than ten or twenty is  equal to twenty");
console.log(twenty > ten || twenty == twenty);

 console.log("twenty is less than ten or twenty is not equal to twenty");
 console.log(twenty > ten || twenty == twenty);

// //Test whether an item is in a array
let fruits = ["apple","orange","banana"]
console.log("orange is include in my fruits array");
console.log(fruits.includes("orange"));

//Test wheather an items is not in a array
console.log("orange is not include in my fruits array");
console.log(!fruits.includes("orange"));










