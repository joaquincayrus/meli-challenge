import Item from './item';

class ItemFeed {
    constructor(categories: string[], items: Item[]) {
        this.items = items;
        this.categories = categories;
    }
    author = {
        name: "Joaquin",
        lastname: "Cayrus"
    };
    items: Item[] = [];
    categories: string[] = []
}

export default ItemFeed;