var node = require('./node');

function LList() {
    this.head = new node("head");
    this.find = function (item) {
        var currNode = this.head;
        while (currNode.element != item) {
            currNode = currNode.next;
        }
        return currNode;
    };
    this.insert = function (newElement, item) {
            var newNode = new node(newElement);
            var current = this.find(item);
            newNode.next = current.next;
            newNode.previous = current;
            current.next = newNode;
    };
    this.findLast= function (item) {
            var currNode = this.head;
            while (!(currNode.next == null)) {
                currNode = currNode.next;
            }
            return currNode;
        };
   this.remove = function (remElement) {
            var currNode = this.find(remElement);
            if (!(currNode.next == null)) {
                currNode.previous.next = currNode.next;
                currNode.next.previous = currNode.previous;
                currNode.next = null;
                currNode.previous = null;
            }
            
    };
    this.display = function () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };

    this.displayRev =  function () {
        var currNode = this.head;
        var currNode = this.findLast();
        while (!(currNode.previous == null)) {
            console.log(currNode.element);
            currNode = currNode.previous;
        }
    }
};

module.exports = LList;