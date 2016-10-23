
var LinkedList = require('./linkedlist');
var LList = new LinkedList();

LList.insert("Milk", "head");
LList.insert("Bread", "Milk");
LList.insert("Eggs", "Bread");
LList.insert("Bacon", "Eggs");
LList.insert("cookies", "Eggs");

LList.display();
LList.remove("Bread");
LList.display();