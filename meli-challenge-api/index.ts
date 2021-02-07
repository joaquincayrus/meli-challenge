const express = require('express')
const app = express()
const cors = require('cors');
import { Request, Response } from 'express';
const port = 3000
const meliChallengeModels = require('meli-challenge-models');

require('dotenv').config()

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // For legacy browser support
}

app.use(cors(corsOptions));

const Item = meliChallengeModels.Item;
const Price = meliChallengeModels.Price;
const ItemFeed = meliChallengeModels.ItemFeed;

const axios = require('axios');

app.use(function (_req: any, res: { header: (arg0: string, arg1: string) => void; }, next: () => void) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
})

app.get('/', (_req: Request, res: Response) => {
    res.send('Hello World');
})

app.post('/api/items', async (req: Request, res: Response) => {
    let result: any = {};
    const query = req.query['q'];

    const items: any[] = [];
    if (query !== undefined) {
        result = await axios.post(`${process.env.MELI_SERVICE_ENDPOINT}:query`,)

        result.data.results.map((serverItem: any) => {
            const meliItem = new Item(serverItem.id, serverItem.title, serverItem.currency_id,
                serverItem.price, 2, serverItem.thumbnail, serverItem.condition, serverItem.shipping.free_shipping);
            items.push(meliItem);
        })
    }
    //TODO: categories
    let itemFeed = new ItemFeed([], items);
    // res.setHeader('Content-Type', 'application/json');
    res.json(itemFeed)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})