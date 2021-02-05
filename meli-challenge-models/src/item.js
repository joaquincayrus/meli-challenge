"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var price_1 = __importDefault(require("./price"));
var Item = /** @class */ (function () {
    function Item(id, title, currency, amount, decimals, picture, condition, free_shipping) {
        this.id = id;
        this.title = title;
        this.price = new price_1.default(currency, amount, decimals);
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
    }
    return Item;
}());
exports.default = Item;
