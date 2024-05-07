"use strict";
//Task16
let guest_list = ['sana', 'asad', 'fahad', 'laiba'];
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
// }
let not_present = 'asad';
let new_guest = 'BabarAzam';
guest_list[1] = new_guest;
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
}
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (let i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.we found big table so we decided to invite 3 more guest\n Thankyou\n');
}
