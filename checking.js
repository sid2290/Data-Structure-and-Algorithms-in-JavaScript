function checking(balance) {
    this.balance = balance;
}

checking.prototype.deposit= function() {
    this.balance = this.balance + 1000;
    return this.balance;
}

module.exports = checking;