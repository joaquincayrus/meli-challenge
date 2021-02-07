import { Item } from 'meli-challenge-models';
import React from 'react';
import './searchItemCard.scss';

class SearchItemCard extends React.Component<{ item: Item }, { item: Item }> {
    constructor(props: { item: Item }) {
        super(props);
        this.state = {
            item: props.item
        }
    }
    render() {
        return (
            <div className='card'>
                CARD
            </div>
        );
    }
}

export default SearchItemCard;