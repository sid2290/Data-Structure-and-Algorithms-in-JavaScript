function stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = function (element) {
        this.dataStore[this.top] = element;
        this.top = this.top + 1;
    };
    this.pop = function () {
        this.top = this.top -1;
        return this.dataStore[this.top];
    };
    this.peek = function () {
        return this.dataStore[this.top-1];
    };
}


module.exports = stack;