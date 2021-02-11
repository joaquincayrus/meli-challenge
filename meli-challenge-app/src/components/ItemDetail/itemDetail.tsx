import axios from 'axios';
import { ItemDetail as ItemDetailModel } from 'meli-challenge-models';
import React from 'react';
import './itemDetail.scss';
import crypto from 'crypto-js';
const MELI_APP_FRONT = 'Meli App Front End';

class ItemDetail extends React.Component<any, { itemId: String, itemDetail: ItemDetailModel | null }> {
    constructor(props: { itemId: String, match: any }) {
        super(props);
        this.state = {
            itemId: props.match.params.id,
            itemDetail: null
        }
        this.getItemDetails()
    }

    getItemDetails = () => {
        if (process.env.REACT_APP_MELI_SECRET_KEY !== undefined) {
            const auth = crypto.AES.encrypt(MELI_APP_FRONT, process.env.REACT_APP_MELI_SECRET_KEY).toString();
            axios.get(`http://localhost:3000/api/items/${this.state.itemId}`, { headers: { authorization: auth } })
                .then(res => {
                    const result = res.data;
                    this.setState({ itemDetail: result });
                })
        } else {
            console.log('missing env variable MELI_SECRET_KEY')
        }
    };

    getDecimales = () => {
        if (this.state.itemDetail?.item?.price?.decimals !== undefined) {
            let decimales = '';
            for (let index = 0; index < this.state.itemDetail?.item?.price?.decimals; index++) {
                decimales += 0;
            }
            return decimales;
        }
    }

    render(): any {
        return (
            <div className='card center container col-10'>
                <div className="item-content">
                    <img src={this.state.itemDetail?.item?.picture} alt="item_picture" className="img-item" />
                    <div className="item-info-content">
                        <p>{this.state.itemDetail?.item?.condition} - {this.state.itemDetail?.item.sold_quantity} vendidos</p>
                        <p className="title">{this.state.itemDetail?.item?.title}</p>
                        <p className="price">{this.state.itemDetail?.item?.price.amount}<span className="decimals">{
                            this.getDecimales()
                        }</span></p>
                        <button onClick={() => { alert('COMPRAR!') }}>Comprar</button>
                    </div>
                </div>
                <p>Descripción del producto</p>
                <p>{this.state.itemDetail?.item?.description}</p>
            </div>
        );
    }
}

export default ItemDetail;