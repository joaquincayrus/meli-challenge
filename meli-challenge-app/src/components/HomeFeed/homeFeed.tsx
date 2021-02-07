import React from 'react';
import './homeFeed.scss';
import SearchItemCard from './SearchItemCard/searchItemCard';
import { BrowserRouter as Router, useLocation } from 'react-router-dom';
import { Item } from 'meli-challenge-models';
import qs from 'querystring';
import axios from 'axios';

class HomeFeed extends React.Component<any, {
    items: Item[],
    categories: string[],
    author: {
        name: string,
        lastname: string
    }
}> {

    //{ item: Item, searchResults: Item[] }
    constructor(props: any) {
        super(props);
        //TODO: 
        const item = new Item('123', '123', 'usd', 123, 2, '123', 'new', 'true');
        // this.state = {
        //     item: props.item,
        //     searchResults: props.searchResults ? props.searchResults : [item]
        // }
        const query = (new URLSearchParams(this.props.location.search)).get("search");
        if (query != null) {
            this.getItems(query);
        }
        this.state = {
            items: [],
            categories: [],
            author: {
                lastname: '',
                name: ''
            }
        }
    }

    getItems = (queryParam: string) => {
        axios.post(`http://localhost:3000/api/items?q=${queryParam}`)
            .then(res => {
                const result = res.data;
                this.setState({ items: result.items, categories: result.categories, author: result.author });
            })
    };

    render(): any {
        return (
            <div className='home-feed'>
                {/* TODO Search Results */}
                <div className='center container'>
                    <ul>
                        {this.state.items.map((listItem: Item) => (
                            <li key={listItem.id}>
                                <SearchItemCard item={listItem} />
                            </li>
                        ))}
                    </ul>
                    <SearchItemCard item={new Item('123', '123', '123123', 123123, 2, 'awedawd', 'new', 'yes')} />
                    <div className='horizontal-line center'></div>
                </div>
            </div>
        );
    }
}

export default HomeFeed;