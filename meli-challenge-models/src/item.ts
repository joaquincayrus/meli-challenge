import Price from './price';

class Item {
    constructor(id: string, title: string, currency: string, amount: number, decimals: number,
        picture: string, condition: string, free_shipping: boolean, location: string) {
        this.id = id;
        this.title = title;
        this.price = new Price(currency, amount, decimals);
        this.picture = picture;
        this.condition = condition;
        this.free_shipping = free_shipping;
        this.location = location;
    }
    id: string;
    title: string;
    price: Price;
    picture: string;
    condition: string;
    free_shipping: boolean
    location: string
}

export default Item;