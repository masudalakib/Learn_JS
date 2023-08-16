// if(true){
//     console.log("If statement Executed");
// }
// else{
//     console.log("Else Statement");
// }

// console.log("End of If Statement!");




// // var age =55;
// var age = prompt();
// if(age >= 50){
//     console.log("Old");
// }
// else{
//     console.log("bacca");
// }



// var age = prompt();
// if(age >= 50){
//     console.log("Old");
// }
// else if (age >= 30 && age < 50) {
//     console.log("under 50 but above or equal 30!");
// }

// else if(age < 30 && age >= 18){
//     console.log("Under 30 but above or equal 18")
// }

// else{
//     console.log("Bacca polapan");
// }

//******************************
// // //Fine the Largest Number

// var n1 = prompt("First Number: ");
// var n2 = prompt("Second Number: ");
// var n3 = prompt("Third Number: ");

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// n3 = parseInt(n3);

// if(n1 >= n2 && n1>= n3){
//     console.log(n1 + " is the Largest Number");
// }

// else if(n2 >= n1 && n2>= n3){
//     console.log(n2 + " is the Largest Number");
// }

// else{
//     console.log(n3 + " is the Largest Number");
// }


//********************* */
//switch

// console.log("Select an option: \na. Option 1 \nb. option 2 \nc. option 3 ");

// choice = prompt();

// var text;

// if(choice == "a"){
//     text = "You have selected Option 1";
// }

// else if (choice == "b"){
//     text = "You have selected Option 2";
// }

// else if (choice == "c"){
//     text = "You have selected Option 3";
// }


// else{
//     text = "No option is selected!";
// }

// console.log(text);


console.log("Select an option: \na. Option 1 \nb. option 2 \nc. option 3 ");

choice = prompt();

var text;
switch(choice){
    case "a" :  //id(choice == "a")
    text = "Option 1 Selected";
    break;

    case "b" :  
    text = "Option 2 Selected";
    break;
    case "c" :  
    text = "Option 3 Selected";
    break;
    default:
        text = "No option is Selected";
}

console.log(text);



