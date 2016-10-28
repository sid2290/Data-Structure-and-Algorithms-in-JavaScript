
function Dictionary() {
   
    this.datastore = new Array();
    
    this.add = function (key,value) {
      this.datastore[key] = value;
    };
    
    this.find = function (key) {
            return this.datastore[key];
    };
   
   this.remove = function (key) {
           delete this.datastore[key];
            }            
    };
/*
    this.display = function () {
        for each (var key in Object.keys(this.datastore)) {
            console.log(key + " -> " + this.datastore[key]);
        }
    };
*/
module.exports = Dictionary;