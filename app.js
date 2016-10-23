var stack = require ('./stack');
var Stack = new stack();

Stack.push("David");
Stack.push("Raymond");
Stack.push("Bryan");
console.log(Stack.top);
console.log(Stack.dataStore);
console.log(Stack.peek());
console.log(Stack.top)
console.log(Stack.pop());
console.log(Stack.top);
Stack.pop();
Stack.pop();

var word = "racecar";
var wordArr = word.split("");
for(var i=0; i < word.length; i++) {
    Stack.push(wordArr[i]);
}

var first = Stack.dataStore.toString();

for(var i=0; i < word.length; i++) {
    Stack.pop(wordArr[i]);
}

var second = Stack.dataStore.toString();


console.log(wordArr);
console.log(first == second);
console.log(first);
console.log(second);

