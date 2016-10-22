// Creating empty Arrays
var arr = [];

// Writing Arrays
for(i=0; i<10; i++) {
    arr[i] = i; 
}

//Accessing Arrays
for(i=0; i<arr.length; i++) {
    console.log(arr[i]);
}
//Creating arrays from string
var sentence = "The world is very beautiful";
var words = sentence.split(" ");
for(i=0; i<words.length; i++) {
    console.log(words[i]);
}

// Assigning one array to another through reference

var arr = ["Hello","Jim","How","are","you"];
var arr1 = arr;
console.log(arr1[2]);
arr1[2] = "Who"; 
console.log(arr1[2]);

// copying one array to another by value

var arr2 = [];
for(i=0;i<arr.length;i++) {
    arr2[i] = arr[i];
}

console.log(arr2[2]);
arr2[2] = "Who"; 
console.log(arr2[2]);

//Searching the elememt in the array
var names = ["Sid", "Jaspal", "Ram", "Sham", "John", "David"];
var findName = "David";
var position = names.indexOf(findName);
console.log(position);

//Converting array to string
var nameString = names.join();
console.log(nameString);

//using splice and concat methods in array prototype

var concatArray = names.concat(arr);
console.log(concatArray.length); 
var spliceArray = concatArray.splice(3,4);
console.log(concatArray.length);
console.log(spliceArray.length);

//Removing elements from an array
console.log(names.length);
names.pop();
console.log(names.length);

// Creating two dimensional array in javascript
Array.matrix = function(numrows, numcols) {
    var arr = [];
    for(var i=0; i<numrows; i++) {
        var columns = [];
        for(var j=0; j<numcols; j++) {
            columns[j] = j;
        }
        arr[i] = columns;
    }
    return arr;
}
var twoDemArray = Array.matrix(3,3);
console.log(twoDemArray[2][2]);

// Jagged arrays: Many programming languages have
//problems handling jagged arrays, but JavaScript does not since we can compute the
//length of any row.

var grades = [[89, 77],[76, 82, 81],[91, 94, 89, 99]];

for (var row = 0; row < grades.length; row++) {
    for (var col = 0; col < grades[row].length; col++) {
        console.log(grades[row][col]);
}
}

//Array of Objects
var checking = require('./checking');

var checking1 = new checking(1000);
var checking2 = new checking(5000);
var checking3 = new checking(7000);

var checkingArray = [checking1, checking2, checking3];

for(var i=0; i < checkingArray.length; i++) {
    console.log(checkingArray[i].balance);
}

//Arrays in object
function weekTemps() {
this.dataStore = [];
this.add = add;
this.average = average;
}
function add(temp) {
this.dataStore.push(temp);
}
function average() {
var total = 0;
for (var i = 0; i < this.dataStore.length; ++i) {
total += this.dataStore[i];
}
return total / this.dataStore.length;
}
var thisWeek = new weekTemps();
thisWeek.add(52);
thisWeek.add(55);
thisWeek.add(61);
thisWeek.add(65);
thisWeek.add(55);
thisWeek.add(50);
thisWeek.add(52);
thisWeek.add(49);
console.log(thisWeek.average());


