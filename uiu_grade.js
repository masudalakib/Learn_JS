var number = prompt("What is your Number");
number = parseInt(number);
var grade;

if (number <=100 && number >=90){
    grade = "A";
}

else if (number <= 86 && number >= 89){
    grade = "A-";
}

else if (number <82 && number >=85){
    grade = "B+";
}

else if (number <78 && number >=81){
    grade = "B";
}

else if (number <74 && number >=77){
    grade = "B-";
}

else if (number <70 && number >=73){
    grade = "C+";
}
else if (number <66 && number >=69){
    grade = "C";
}
else if (number <62 && number >=65){
    grade = "C-";
}
else if (number <58 && number >=61){
    grade = "D+";
}
else if (number <55 && number >=57){
    grade = "D";
}
else if (number <55 && number >=0){
    grade = "F";
}

else{
    grade = "Invalid Grade";
}

console.log("Your Grade: " + grade);


