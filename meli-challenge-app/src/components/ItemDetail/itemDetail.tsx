import React from 'react';
import './itemDetail.scss';

class ItemDetail extends React.Component<any, { itemId: String }> {
    constructor(props: { itemId: String }) {
        super(props);
        this.state = {
            itemId: props.itemId,
        }
    }
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