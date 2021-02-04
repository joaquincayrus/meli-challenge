import React from 'react';
import SearchBar from './components/SearchBar/searchBar';
import HomeFeed from './components/HomeFeed/homeFeed';

class App extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <SearchBar />
                    <HomeFeed />
                </div>
            </div>
        );
    }
}

export default App;