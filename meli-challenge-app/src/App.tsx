import React from 'react';
import SearchBar from './components/SearchBar/searchBar';
import HomeFeed from './components/HomeFeed/homeFeed';
import ItemDetail from './components/ItemDetail/itemDetail';
import { Switch, BrowserRouter as Router, Route, useLocation } from 'react-router-dom';

class App extends React.Component<any, {}> {

    constructor(props: any) {
        super(props);
        this.state = {
            queryParam: false,
            itemIdParam: false
        }
    }

    // function useQuery(): any {
    //     return new URLSearchParams(useLocation().search);
    // }

    render() {
        // let query = () => { return useQuery() };
        return (
            <div>
                <Router>
                    <SearchBar />
                    <Switch>
                        <Route path="/items/:id" component={ItemDetail}>
                        </Route>
                        <Route path="/items" component={HomeFeed}>
                        </Route>
                        <Route path="/">
                        </Route>
                    </Switch>
                </Router>
            </div>
        );
    }
}


export default App;