function list() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; //empty array to store elements
    this.clear = function () {
           delete this.dataStore;
           this.dataStore = [];
           this.listSize = this.pos =0;    
        };
    this.find = function (element) {
           for(var i=0; i<this.dataStore.length; i++) {
               if(this.dataStore[i] == element) {
                   return i;
               }
               return -1;
           }    
        };
    this.toString = function () {
           console.log("toString");    
        };
    this.insert = function (element, after) {
            var insertElementPosition = this.find(after) + 1;
            if (insertElementPosition > -1) {
                    this.dataStore.splice(insertElementPosition,0,element);
                    this.listSize++;
            }
        };
    this.add = function (element) {
           this.dataStore[this.listSize] = element;
           this.listSize = this.listSize + 1;    
        };
    this.remove = function (element) {
           var removeElementNumber= this.find(element);
               if(removeElementNumber > -1) {
                   this.dataStore.splice(removeElementNumber,1);
                   this.listSize = this.listSize -1;
                   return true;
               }
               return false; 
        };
    this.front = function () {
           this.pos = 0;    
        };
    this.end = function () {
           this.pos = this.listSize -1;    
        };
    this.prev = function () {
           if(this.pos>0) {
               this.pos = this.pos -1;
           }    
        };
    this.next = function () {
           if(this.pos < (this.listSize-1) ) {
               this.pos = this.pos + 1;;
           }     
        };
    this.length = function () {
           return this.listSize;    
        };
    this.currPos = function () {
           return this.pos;    
        };
    this.moveTo = function (position) {
           this.pos = position;   
        };
    this.getElement = function () {
           return this.dataStore[this.pos];   
        };
    this.length = function () {
           return this.listSize;    
        };
    this.contains = function contains(element) {
        for (var i = 0; i < this.dataStore.length; ++i) {
            if (this.dataStore[i] == element) {
                return true;
            }
        };
        return false
    };
}


module.exports = list;