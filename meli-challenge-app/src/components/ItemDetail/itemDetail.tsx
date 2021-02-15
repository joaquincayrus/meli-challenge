import axios from 'axios';
import { ItemDetail as ItemDetailModel } from 'meli-challenge-models';
import React from 'react';
import './itemDetail.scss';
import crypto from 'crypto-js';
const MELI_APP_FRONT = 'Meli App Front End';

class ItemDetail extends React.Component<any, { itemId: String, itemDetail: ItemDetailModel | null, updateBreadCrumb: any }> {
    constructor(props: { itemId: String, match: any, updateBreadCrumb: any }) {
        super(props);
        this.state = {
            itemId: props.match.params.id,
            itemDetail: null,
            updateBreadCrumb: props.updateBreadCrumb
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
                    this.state.updateBreadCrumb(result.breadCrumb);
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

    getCondition = () => {
        if (this.state.itemDetail?.item?.condition === 'new') {
            return <span>Nuevo</span>;
        } else {
            return <span>Usado</span>;
        };
    }

    getCurrency = () => {
        if (this.state.itemDetail?.item?.price.currency === "ARS") {
            return <span className="currency">$</span>;
        }
    }

    render(): any {
        return (
            <div className="center col-10">
                <div className='card'>
                    <div className="item-content">
                        <img src={this.state.itemDetail?.item?.picture} alt="item_picture" className="img-item" />
                        <div className="item-info-content">
                            <div className="item-condition">{this.getCondition()} - {this.state.itemDetail?.item.sold_quantity} vendidos</div>
                            <div className="title">{this.state.itemDetail?.item?.title}</div>
                            <div className="price">{this.getCurrency()}{this.state.itemDetail?.item?.price.amount.toLocaleString('de-DE')}<span className="decimals">{
                                this.getDecimales()
                            }</span></div>
                            <button onClick={() => { alert('COMPRAR!') }}>Comprar</button>
                        </div>
                    </div>
                    <div className="description-title">Descripción del producto</div>
                    <div className="description">
                        <pre>{this.state.itemDetail?.item?.description}</pre>
                    </div>
                </div>
            </div>
        );
    }
}

export default ItemDetail;