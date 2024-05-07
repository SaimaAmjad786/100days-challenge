function create_car (manufacture , model , ...options){
//Intialize a car object with manufacture and model
    let car = {
        manufacture:manufacture,
        model:model
    };

//Add additional options to the car objects

    options.forEach(option => {
        let [key,value] = option.split(":");
        car[key.trim()] = value.trim();
    });

    return car;
}
//Call the function to create a car objects

let my_car = create_car("Toyota" , "Corolla", "Color :  Black", "sunroof : True" , "Year : 2024");

//Print the variable to ensure all the information is stored correctly in the car object

console.log(my_car)
