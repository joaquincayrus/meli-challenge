import React from 'react';
import './homeFeed.scss';
import SearchItemCard from './SearchItemCard/searchItemCard';
import { Link } from 'react-router-dom';
import { Item } from 'meli-challenge-models';
import axios from 'axios';
import crypto from 'crypto-js';
const MELI_APP_FRONT = 'Meli App Front End';
class HomeFeed extends React.Component<any, {
    items: Item[],
    categories: string[],
    author: {
        name: string,
        lastname: string
    },
    updateBreadCrumb: any
}> {

    //{ item: Item, searchResults: Item[] }
    constructor(props: any) {
        super(props);
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
            },
            updateBreadCrumb: props.updateBreadCrumb
        }
    }

    getItems = (queryParam: string) => {
        if (process.env.REACT_APP_MELI_SECRET_KEY !== undefined) {
            const auth = crypto.AES.encrypt(MELI_APP_FRONT, process.env.REACT_APP_MELI_SECRET_KEY).toString();
            axios.post(`${process.env.REACT_APP_MELI_API_URL}/api/items?q=${queryParam}`, null, { headers: { authorization: auth } })
                .then(res => {
                    const result = res.data;
                    this.setState({ items: result.items, categories: result.categories, author: result.author });
                    this.state.updateBreadCrumb(result.categories)
                }).catch(error => {
                    alert(`Error getting items`);
                    console.error(error);
                })
        } else {
            console.log('missing env variable MELI_SECRET_KEY')
        }
    };

    render(): any {
        return (
            <div className='home-feed'>
                <div className='center container col-10'>
                    <ul className="">
                        {this.state.items.map((listItem: Item) => (
                            <li key={listItem.id}>
                                <Link to={`/items/${listItem.id}`}>
                                    <SearchItemCard item={listItem} />
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className='horizontal-line center'></div>
                </div>
            </div>
        );
    }
}

export default HomeFeed;