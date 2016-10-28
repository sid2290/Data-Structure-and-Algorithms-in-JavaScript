var Dictionary = require('./dictionary');
var dictionary = new Dictionary();

console.log(dictionary);
dictionary.add("name","Sid");
dictionary.add("name","Jaspal");
//dictionary.display();
console.log(dictionary);
console.log(dictionary.datastore);