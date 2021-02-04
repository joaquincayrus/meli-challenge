import React from 'react';
import './searchBar.scss';
import logo from '../../assets/Logo_ML.png';
import search from '../../assets/ic_Search.png';

const PLACHOLDER = 'Nunca dejes de buscar';

class SearchBar extends React.Component<{}, { searchBoxValue: string }> {
    constructor(props: any) {
        super(props);
        this.state = {
            searchBoxValue: '',
        }
    }
    render(): any {
        return (
            <div className='search-bar'>
                <div className='center'>
                    <span className='helper'></span>
                    <img src={logo} className='logo' alt='logo' />
                    <input type='text' placeholder={PLACHOLDER} className='borderless-outlineless'
                        value={this.state.searchBoxValue}
                        onChange={(event) =>
                            this.setState({
                                searchBoxValue: event.target.value,
                            })}>
                    </input>
                    <button className='borderless-outlineless' onClick={() => { alert(this.state.searchBoxValue); }}>
                        <span className='helper'></span>
                        <img src={search} className='search-icon' alt='search icon' />
                    </button>
                </div>
            </div >
        );
    }
}

export default SearchBar;