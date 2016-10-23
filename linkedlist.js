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
            current.next = newNode;
    };
    this.findPrevious= function (item) {
            var currNode = this.head;
            while (!(currNode.next == null) &&
            (currNode.next.element != item)) {
                currNode = currNode.next;
            }
            return currNode;
    };
   this.remove = function (remElement) {
            var prevNode = this.findPrevious(remElement);
            if (!(prevNode.next == null)) {
                prevNode.next = prevNode.next.next;
            }
            
    };
    this.display = function () {
        var currNode = this.head;
        while (!(currNode.next == null)) {
            console.log(currNode.next.element);
            currNode = currNode.next;
        }
    };
}

module.exports = LList;