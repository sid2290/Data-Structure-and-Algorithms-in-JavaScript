var list = require ('./list');
var List = new list();
List.add("Hello");
List.add("Clayton");
List.add("Raymond");
List.add("Cynthia");
List.add("Jennifer");
List.add("Bryan");
List.add("Danny");
console.log(List.dataStore);
console.log(List.listSize);
List.remove("Hello");
console.log(List.dataStore);
List.front();
List.next();
List.prev();
List.moveTo(4);

console.log(List.getElement());
