import React from 'react';
import '../../index.scss';
import './searchBar.scss';
import logo from '../../assets/Logo_ML.png';
import search from '../../assets/ic_Search.png';
import { Link, Redirect } from 'react-router-dom';
const PLACHOLDER = 'Nunca dejes de buscar';

class SearchBar extends React.Component<{}, { searchBoxValue: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchBoxValue: '',
        }
    }
    onFormSubmit = () => {
        return <Redirect to={`/items?search=${this.state.searchBoxValue}`} />;
    }
    render(): any {
        return (
            <div className='search-bar'>
                <div className='center col-10'>
                    <form >
                        <span className='helper'></span>
                        <img src={logo} className='logo' alt='logo' />
                        <input type='text' placeholder={PLACHOLDER} className='borderless-outlineless'
                            value={this.state.searchBoxValue}
                            onChange={(event) =>
                                this.setState({
                                    searchBoxValue: event.target.value,
                                })}>
                        </input>
                        <Link to={`/items?search=${this.state.searchBoxValue}`} className='borderless-outlineless' type="submit">
                            <button className='borderless-outlineless'>
                                <span className='helper'></span>
                                <img src={search} className='search-icon' alt='search icon' />
                            </button>
                        </Link>
                    </form>
                </div>
            </div >
        );
    }
}

export default SearchBar;