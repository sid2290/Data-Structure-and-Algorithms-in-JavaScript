function queue() {
        this.dataStore = [];
        this.enqueue = function (element) {
            this.dataStore.push(element); 
        }
        this.dequeue = function (){
            return this.dataStore.shift();
    };
        this.front = function () {
            return this.dataStore[0];
        };
        this.back = function () {
            return this.dataStore[this.dataStore.length-1];
        };
        this.display = function () {
                var displayQueue = "";
                for (var i=0; i < this.dataStore.length; i++) {
                        displayQueue = displayQueue + this.dataStore[i] + "\n";
                }
                return displayQueue;
        };
        this.empty = function () {
                if (this.dataStore.length == 0) {
                    return true;
                }
                else {
                    return false;
                }
        };
}


module.exports = queue;