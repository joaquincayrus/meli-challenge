import React from 'react';
import './homeFeed.scss';
import SearchItemCard from './SearchItemCard/searchItemCard';
import ItemDetailCard from './ItemDetailCard/itemDetailCard';

import { Item } from 'meli-challenge-models';

const item = new Item('id', 'title', 'USD', 100, 2, 'picture', 'NEW', 'true');

class HomeFeed extends React.Component {

    constructor(props: any) {
        super(props);
        //TODO: 
    }

    render() {
        return (
            <div className='home-feed'>
                {/* TODO Search Results */}
                <div className='center container'>
                    <SimpleList list={searchResults} />
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

    const mylist = ['a', 'b', 'c'];

    const App = () => (
        <SimpleList list={mylist} />
    );

    const SimpleList = ({ list: Item[] }) => (
        <ul>
            {list.map(listItem: Item => (
            <li key={listItem}>
                <SearchItemCard item={listItem} />
            </li>
            ))}
        </ul>
    );
}

export default HomeFeed;