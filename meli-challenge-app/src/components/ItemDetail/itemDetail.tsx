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
                }).catch(error => {
                    alert(`Error getting item Details`);
                    console.error(error);
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
                        <div className="item-condition">{() => {
                            return (this.state.itemDetail?.item?.condition === 'new') ? "Nuevo" : "Usado";
                        }} - {this.state.itemDetail?.item.sold_quantity} vendidos</div>
                        <div className="title">{this.state.itemDetail?.item?.title}</div>
                        <div className="price">{this.state.itemDetail?.item?.price.amount}<span className="decimals">{
                            this.getDecimales()
                        }</span></div>
                        <button onClick={() => { alert('COMPRAR!') }}>Comprar</button>
                    </div>
                </div>
                <div>Descripción del producto</div>
                <div>{this.state.itemDetail?.item?.description}</div>
            </div>
        );
    }
}

export default ItemDetail;