//Task18
//Making a Array of countries and prints its original order
let countriesToVisit: string[]=['China', 'Denmark', 'Brazil', 'Argentina'];
console.log("Original Order:", countriesToVisit);

//print the array in Alphabetical order without modifying the actual array
console.log("Alphabetical Order:", [...countriesToVisit].sort());

//show that the array is still in its Original Order
console.log("still in Original Order:",countriesToVisit);

//print the array in reverses order without modifying the actual array list
console.log("Reverse Order:", [...countriesToVisit].reverse());

//show that the array is still in its Original Order
console.log("still in Original Order:",countriesToVisit);

//we have the change the Original  Order Array
console.log("Original Array Reverse:",countriesToVisit.reverse());

//print the Array to show that its back its Original Order
console.log("Back to Original order:",countriesToVisit.reverse());

//print the Array to show that its order has been change alphabetical order now
console.log("Sorted in Alphabetical Order:",countriesToVisit.sort());

//we have the change again the Original  Order Array now  its reverse order again
console.log("Original Array Reverse Again:",countriesToVisit.reverse());












