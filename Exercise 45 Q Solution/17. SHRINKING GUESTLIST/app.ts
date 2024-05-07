//Task17
let guest_list:  string[]=['sana','asad','fahad','laiba'];
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
// }

let not_present : string='asad';
let new_guest :  string='BabarAzam';
guest_list[1] = new_guest;
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
// }

guest_list.unshift('shaheen','sarfaraz','rizwan');
// for (let i=0; i<guest_list.length; i++){
//     console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.we found big table so we decided to invite 3 more guest\n Thankyou\n');
// }

console.log('\nUnfortunately we cannot arrange big table ,Only two people allow.')
while(guest_list.length>2){
    let remove_guest = guest_list.pop();
    console.log(`Sorry Sir/Madam.${remove_guest}you are not invited for dinner.`);
}
for (let i=0; i<guest_list.length; i++){
    console.log('Respected Sir/Madam' + guest_list[i] + ',\n Yes you are still invited on tomorrow dinner\n Thankyou\n');
}
guest_list.splice(0,2)
console.log(guest_list)

