const Price = require('./price');

class Item {
    constructor(id, title, currency, amount, decimals, picture, free_shipping) {
        this.id = id;
        this.title = title;
        this.price = new Price(currency, amount, decimals);
        this.picture = picture,
            this.condition = condition,
            this.free_shipping = free_shipping
    }

}

exports.Item;