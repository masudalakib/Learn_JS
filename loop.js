// While Loop

var i =1; //initialization
 while (i<=5) {  //condition
    console.log("Number: " +i);
    i++;
 }
console.log("End of while Loop");
console.log("Start of for loop");
  

//  For Loop

for (var j =1; j<=5; j++){
    console.log(j);
}

for(var k=5; k >=1; k--){
    console.log(k);
}


//for-in --> string/array/object
//for-off --> string /array

let name ="I am learning Js";
let food =["cake", "puding", "Ice-cream"];

let person ={
    name: "Saakib Al Hasan", 
    profession : "Cricket",
    team : "Bangladesh",
    age : 33,
}

// use ib we will get index
// for (var x in name ){
//     console.log(`index ${x} and item ${name [x]}`);
// }


// // usr of we will items or values
// for (var x of name ){
//     console.log(x);
// }


//indexes
for (var y in food){
    console.log(`Index: ${y}; and item : ${food[y]}`);
}



//items
for (var y of food){
    console.log(y);
}
