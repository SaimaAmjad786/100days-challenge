//Task15
var guest_list = ['sana', 'asad', 'fahad', 'laiba'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
}
var not_present = 'asad';
var new_guest = 'BabarAzam';
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('Respected Sir/Madam' + guest_list[i] + ',\nWe invited guest on dinner tomorrow.\n Thankyou\n');
}
console.log("Mr. ".concat(not_present, " will not coming tomorrow dinner."));
