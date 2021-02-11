const express = require('express')
const app = express()
const cors = require('cors');
import { Request, Response } from 'express';
const port = 3000
const meliChallengeModels = require('meli-challenge-models');
const crypto = require('crypto-js');
require('dotenv').config()

var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // For legacy browser support
}
const MELI_APP_FRONT = 'Meli App Front End';

app.use(cors(corsOptions));
app.use(function (req: Request, res: Response, next: () => void) {
    if (req.headers.authorization == undefined) {
        unauthorizedAccess(res);
    } else {
        const auth = crypto.AES.decrypt(req.headers.authorization, process.env.MELI_SECRET_KEY).toString(crypto.enc.Utf8);
        if (auth == MELI_APP_FRONT) {
            next();
        } else {
            unauthorizedAccess(res);
        }
    }
})

const Item = meliChallengeModels.Item;
const Price = meliChallengeModels.Price;
const ItemFeed = meliChallengeModels.ItemFeed;
const ItemDetail = meliChallengeModels.ItemDetail;

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
        const ruta = `${process.env.MELI_SERVICE_ENDPOINT}`;
        result = await axios.post(`${process.env.MELI_SERVICE_ENDPOINT}sites/MLA/search?q=:query`,)

        result.data.results.map((serverItem: any) => {
            const meliItem = new Item(serverItem.id, serverItem.title, serverItem.currency_id,
                serverItem.price, 2, serverItem.thumbnail, serverItem.condition, serverItem.shipping.free_shipping,
                serverItem.address.state_name);
            items.push(meliItem);
        })
    }
    //TODO: categories
    let itemFeed = new ItemFeed([], items);
    // res.setHeader('Content-Type', 'application/json');
    res.json(itemFeed)
})

app.get('/api/items/:id', async (req: Request, res: Response) => {
    let result: any = {};
    const id = req.params.id;

    let itemDetail: any = null;
    if (id !== undefined) {
        const ruta = `${process.env.MELI_SERVICE_ENDPOINT}/${id}`;
        const itemPromise = axios.get(`${process.env.MELI_SERVICE_ENDPOINT}items/${id}`,);
        const itemDetailsPromise = axios.get(`${process.env.MELI_SERVICE_ENDPOINT}items/${id}/description`,);

        const [item, itemDescription] = await Promise.all([itemPromise, itemDetailsPromise]);

        itemDetail = new ItemDetail(item.data.id, item.data.title, item.data.currency_id,
            item.data.price, 2, item.data.thumbnail, item.data.condition, item.data.shipping.free_shipping,
            0, itemDescription.data.plain_text);
        res.json(itemDetail)
    }
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})

function unauthorizedAccess(res: Response<any, Record<string, any>>) {
    res.status(401);
    res.json({ message: "Unauthorized access" });
}
