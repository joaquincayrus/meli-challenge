"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ItemFeed = /** @class */ (function () {
    function ItemFeed(categories, items) {
        this.author = {
            name: "Joaquin",
            lastname: "Cayrus"
        };
        this.items = [];
        this.categories = [];
        this.items = items;
        this.categories = categories;
    }
    return ItemFeed;
}());
exports.default = ItemFeed;
