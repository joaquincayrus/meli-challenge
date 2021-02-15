"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var price_1 = __importDefault(require("./price"));
var ItemDetail = /** @class */ (function () {
    function ItemDetail(id, title, currency, amount, decimals, picture, condition, free_shipping, sold_quantity, description, breadCrumb) {
        this.author = {
            name: "Joaquin",
            lastname: "Cayrus"
        };
        this.item = {
            id: id,
            title: title,
            price: new price_1.default(currency, amount, decimals),
            picture: picture,
            condition: condition,
            free_shipping: free_shipping,
            sold_quantity: sold_quantity,
            description: description
        };
        this.breadCrumb = breadCrumb;
    }
    return ItemDetail;
}());
exports.default = ItemDetail;
