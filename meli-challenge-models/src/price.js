"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Price = /** @class */ (function () {
    function Price(currency, amount, decimals) {
        this.currency = 'none';
        this.amount = 0;
        this.decimals = 0;
        this.currency = currency;
        this.amount = amount;
        this.decimals = decimals;
    }
    return Price;
}());
exports.default = Price;
