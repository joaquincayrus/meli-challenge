import React from 'react';
import './homeFeed.scss';
import SearchItemCard from './SearchItemCard/searchItemCard';
import ItemDetailCard from './ItemDetailCard/itemDetailCard';

import { Item } from 'meli-challenge-models';

class HomeFeed extends React.Component<{}, { item: Item, searchResults: Item[] }> {

    constructor(props: { item: Item, searchResults: Item[] }) {
        super(props);
        //TODO: 
        const item = new Item('123', '123', 'usd', 123, 2, '123', 'new', 'true');
        this.state = {
            item: props.item,
            searchResults: props.searchResults ? props.searchResults : [item]
        }
    }

    render(): any {
        return (
            <div className='home-feed'>
                {/* TODO Search Results */}
                <div className='center container'>
                    <ul>
                        {this.state.searchResults.map((listItem: Item) => (
                            <li key={listItem.id}>
                                <SearchItemCard item={listItem} />
                            </li>
                        ))}
                    </ul>
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