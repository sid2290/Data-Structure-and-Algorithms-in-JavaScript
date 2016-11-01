
function HashTable() {
   
    this.table = new Array(137);
    this.simpleHash = function (data) {
        var total = 0;
        for (var i=0; i < data.length; i++) {
            total = total + data.charCodeAt(i);
        }
        return total % this.table.length;
        };   

    this.put = function (data) {
            var pos = this.simpleHash(data);
            this.table[pos] = data;
            };
   

    this.display = function () {
        for (var i = 0; i < this.table.length; i++) {
        if (this.table[i] != undefined) {
        console.log(i + ": " + this.table[i]);
        }
      }
    };
}
module.exports = HashTable;
