//Task15
let guest_list:  string[]=['sana','asad','fahad','laiba'];
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
}
let not_present : string='asad';
let new_guest :  string='BabarAzam';
guest_list[1] = new_guest;
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
}
console.log(`Mr. ${not_present} will not coming tomorrow dinner.`)
