import axios from 'axios';
import { Item } from 'meli-challenge-models';
import React from 'react';
import './itemDetail.scss';

class ItemDetail extends React.Component<any, { itemId: String, item: Item | null, author: any }> {
    constructor(props: { itemId: String, match: any }) {
        super(props);
        this.state = {
            itemId: props.match.params.id,
            item: null,
            author: null
        }
        this.getItemDetails()
    }

    getItemDetails = () => {
        axios.get(`http://localhost:3000/api/items/${this.state.itemId}`)
            .then(res => {
                const result = res.data;
                this.setState({ item: result.item, author: result.author });
            })
    };

    render(): any {
        return (
            <div className='center container'>
                <div className='card'>
                    DETAIL CARD
                </div>
            </div>
        );
    }
}

export default ItemDetail;