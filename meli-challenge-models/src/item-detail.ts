import Price from './price';

class ItemDetail {
    constructor(id: string, title: string, currency: string, amount: number, decimals: number,
        picture: string, condition: string, free_shipping: boolean, sold_quantity: number, description: string) {
        this.item = {
            id: id,
            title: title,
            price: new Price(currency, amount, decimals),
            picture: picture,
            condition: condition,
            free_shipping: free_shipping,
            sold_quantity: sold_quantity,
            description: description
        }
    }
    author = {
        name: "Joaquin",
        lastname: "Cayrus"
    };
    item: {
        id: string,
        title: string,
        price: {
            currency: string,
            amount: number,
            decimals: number,
        },
        picture: string,
        condition: string,
        free_shipping: boolean,
        sold_quantity: number,
        description: string
    };
}

export default ItemDetail;