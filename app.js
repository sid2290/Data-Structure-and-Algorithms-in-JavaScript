// Decalaring and intializing variables
var x = 3;
var y = 9;

// using arthmetic operators and Math libary functions
console.log(x+y);
console.log(Math.sqrt(y));

//Decision construct
// if statement
var mid = 25;
var high = 50;
var low = 1;
var current = 33;
var found = -1;
if (current < mid) {
mid = (current-low) / 2;
console.log(mid);
}

//if-else statement
else {
    console.log("current is greater than mid");
}

// Switch statement
var monthNumber = "1";
var monthName;
switch(monthNumber) {
    case "1":
        monthName = "January";
        break;
    case "2":
        monthName = "Feb";
    case "3" : 
        monthName = "March";
    default:
        console.log("Bad Output");
}

console.log(monthName);

// Repetition constructs
//while loop
var number = 26;
var answer = 0;
var i=1;
while(answer != 260) { 
    answer = number * i;
    i++;
    console.log(answer);
}

// using for loop
var arr = [
    "Hello World",
    function () {
        console.log("I am a Function");
    },
    {
        greet: "Hello"
    }
]
for(var i=0; i<=2; i++) {
    console.log(arr[i]);
    if(i==1) {
    arr[i]();
    }
    else if (i==2) {
        console.log(arr[i].greet);
    }
}

// Recursive functions
function factorial(number) {
    var product = 1;
    for (var i=1; i<=number;i++) {
        product = product*number;
    }
    return product;
}

console.log(factorial(5));

// Creating objects in javascript using function constructor
var Checking = require('./checking');
var checkingAmount = new Checking();

console.log(checkingAmount.deposit());


