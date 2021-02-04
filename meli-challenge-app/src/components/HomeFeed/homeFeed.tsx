import React from 'react';
import './homeFeed.scss';
import SearchItemCard from './SearchItemCard/searchItemCard';
import ItemDetailCard from './ItemDetailCard/itemDetailCard';

import { Item } from 'meli-challenge-models';

class HomeFeed extends React.Component<{}, { item: Item, searchResults: Item[] }> {

    constructor(props: any) {
        super(props);
        //TODO: 

        this.state = {
            item: props.item,
            searchResults: props.searchResults
        }
    }

    render(): any {
        return (
            <div className='home-feed'>
                {/* TODO Search Results */}
                <div className='center container'>
                    <SimpleList {...this.state.searchResults} />
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

const SimpleList = (list: Item[]): any =>
    <ul>
        <>
            {list.map((listItem: Item) => (
                <li key={listItem.id}>
                    <SearchItemCard item={listItem} />
                </li>
            ))}
        </>
    </ul>;

export default HomeFeed;