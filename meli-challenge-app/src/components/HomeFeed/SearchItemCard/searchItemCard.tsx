import { Item } from 'meli-challenge-models';
import React from 'react';
import './searchItemCard.scss';
import free_shipping_logo from '../../../assets/ic_shipping@2x.png';

class SearchItemCard extends React.Component<{ item: Item }, { item: Item }> {
    constructor(props: { item: Item }) {
        super(props);
        this.state = {
            item: props.item
        }
    }
    render() {
        return (
            <div className='card-search-item'>
                <img src={this.state.item.picture} alt="item_image" className="item-img" />
                <div className="item-content">
                    <div className="item-content-info">
                        <span className="price">{this.getCurrency()} {this.state.item.price.amount.toLocaleString('de-DE')}</span>
                        {this.state.item.free_shipping ? <img className="free-shipping-icon" src={free_shipping_logo} alt="free_shipping_icon" /> : <span></span>}
                        <p className="title">{this.state.item.title}</p>
                    </div>
                    <div className="location">
                        <p>{this.state.item.location}</p>
                    </div>
                </div>
            </div>
        );
    }
    getCurrency = () => {
        if (this.state.item.price.currency === "ARS") { return "$" };
    }
}

export default SearchItemCard;