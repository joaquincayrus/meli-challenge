"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require('express');
var app = express();
var cors = require('cors');
var port = 3000;
var meliChallengeModels = require('meli-challenge-models');
require('dotenv').config();
var corsOptions = {
    origin: 'http://localhost:3001',
    optionsSuccessStatus: 200 // For legacy browser support
};
app.use(cors(corsOptions));
var Item = meliChallengeModels.Item;
var Price = meliChallengeModels.Price;
var ItemFeed = meliChallengeModels.ItemFeed;
var ItemDetail = meliChallengeModels.ItemDetail;
var axios = require('axios');
app.use(function (_req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
app.get('/', function (_req, res) {
    res.send('Hello World');
});
app.post('/api/items', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, query, items, ruta, itemFeed;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                result = {};
                query = req.query['q'];
                items = [];
                if (!(query !== undefined)) return [3 /*break*/, 2];
                ruta = "" + process.env.MELI_SERVICE_ENDPOINT;
                return [4 /*yield*/, axios.post(process.env.MELI_SERVICE_ENDPOINT + "sites/MLA/search?q=:query")];
            case 1:
                result = _a.sent();
                result.data.results.map(function (serverItem) {
                    var meliItem = new Item(serverItem.id, serverItem.title, serverItem.currency_id, serverItem.price, 2, serverItem.thumbnail, serverItem.condition, serverItem.shipping.free_shipping);
                    items.push(meliItem);
                });
                _a.label = 2;
            case 2:
                itemFeed = new ItemFeed([], items);
                // res.setHeader('Content-Type', 'application/json');
                res.json(itemFeed);
                return [2 /*return*/];
        }
    });
}); });
app.get('/api/items/:id', function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var result, id, itemDetail, ruta, itemPromise, itemDetailsPromise, _a, promise1, promise2;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                result = {};
                id = req.params.id;
                itemDetail = null;
                if (!(id !== undefined)) return [3 /*break*/, 2];
                ruta = process.env.MELI_SERVICE_ENDPOINT + "/" + id;
                itemPromise = axios.get(process.env.MELI_SERVICE_ENDPOINT + "items/" + id);
                itemDetailsPromise = axios.get(process.env.MELI_SERVICE_ENDPOINT + "items/" + id + "/description");
                return [4 /*yield*/, Promise.all([itemPromise, itemDetailsPromise])];
            case 1:
                _a = _b.sent(), promise1 = _a[0], promise2 = _a[1];
                res.json([promise1, promise2]);
                itemDetail = new ItemDetail(promise1.data.id, promise1.data.title, promise1.data.currency_id, promise1.data.price, 2, promise1.data.thumbnail, promise1.data.condition, promise1.data.shipping.free_shipping, 0, promise1.data.desciptions[0]);
                _b.label = 2;
            case 2:
                res.json(itemDetail);
                return [2 /*return*/];
        }
    });
}); });
app.listen(port, function () {
    console.log("Example app listening at http://localhost:" + port);
});
//# sourceMappingURL=index.js.map