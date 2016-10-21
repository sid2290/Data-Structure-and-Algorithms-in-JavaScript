function checking() {
    this.balance = 10000;
}

checking.prototype.deposit= function() {
    this.balance = this.balance + 1000;
    return this.balance;
}

module.exports = checking;