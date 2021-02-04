const express = require('express')
const app = express()
import { Request, Response } from 'express';
const port = 3000
const meliChallengeModels = require('meli-challenge-models');

require('dotenv').config()

const Item = meliChallengeModels.Item;
const Price = meliChallengeModels.Price;
const ItemFeed = meliChallengeModels.ItemFeed;

const axios = require('axios');

app.get('/', (req: Request, res: Response) => {
    res.send('Hello World');
})

app.post('/api/items', async (req: Request, res: Response) => {
    let result: any = {};
    const query = req.query['q'];
    if (query !== undefined) {
        result = await axios.post(`${process.env.MELI_SERVICE_ENDPOINT}:query`,)
        const meliItem = new Item();
    }
    // res.setHeader('Content-Type', 'application/json');
    res.json(result.data)
})

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})