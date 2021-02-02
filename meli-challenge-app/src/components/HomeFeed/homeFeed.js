import React from 'react';
import './homeFeed.scss';
import SearchItemCard from './SearchItemCard/searchItemCard';
import ItemDetailCard from './ItemDetailCard/itemDetailCard';

import Item from 'meli-challenge-models';

const item = new Item();

class HomeFeed extends React.Component {
    render() {
        return (
            <div className='home-feed'>
                {/* TODO Search Results */}
                <div className='center container'>
                    <SearchItemCard />
                    <div className='horizontal-line center'></div>
                    <SearchItemCard />
                    <SearchItemCard />
                    <SearchItemCard />
                    <SearchItemCard />
                </div>
                {/* TODO Details */}
                <div className='center container'>
                    <ItemDetailCard />
                </div>
            </div>
        );
    }
}

export default HomeFeed;