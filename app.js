var queue = require ('./queue');
var Queue = new queue();

Queue.enqueue("postfix");
Queue.enqueue("expression");
Queue.enqueue("arithmetic");
Queue.enqueue("dispenser");

console.log(Queue.display());

