//list array of current users
let current_users =["Usman","ali","Areeba","Zain","Osama"]

//list array of new users
let new_users =["Hamza","Ayesha","Ali","Mahad","Areeba"]


//loop through new users to check for usernames avaiability
new_users.forEach(new_one_users => {
    let our_condition =(current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_users.toLowerCase()))

    //print different messages using if else statement
    if(our_condition){
        console.log(`sorry ${new_one_users} is already taken`)
    }
    else{
        console.log(`This username ${new_one_users} is available`)
    }
})