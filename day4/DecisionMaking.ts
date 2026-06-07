let age: number = 19;
if (age >= 18) {
    console.log("You are eligible to voting.");
} 


let age1: number =17;
if (age1 >= 18) {
    console.log("You are eligible to voting.");
} else {
    console.log("You are not eligible to voting.");
}


var grade: number = 81;
if (grade >= 90) {
    console.log("You got an A grade.");
} else if (grade >= 80) {
    console.log("You got a B grade.");
} else if (grade >= 70) {
    console.log("You got a C grade.");
} else if (grade >= 60) {
    console.log("You got a D grade.");
} else {
    console.log("You need to improve.");
}


var grade1: string = "B";
switch (grade1) {
    case "A":{
        console.log("Exellent");
        break;
    }
    case "B":{
        console.log("Good");
        break;
    }
    case "C":{
        console.log("Fair");
        break;
    }
    case "D":{
        console.log("Poor");
        break;
    }
    default:{
        console.log("Unknown grade.");
    }
}


