import React from 'react';
import SearchBar from './components/SearchBar/searchBar';
import HomeFeed from './components/HomeFeed/homeFeed';
import ItemDetail from './components/ItemDetail/itemDetail';
import BreadCrumb from './components/BreadCrumb/breadCrumb';
import { Switch, Route } from 'react-router-dom';

class App extends React.Component<any, {}> {
    breadCrumb: BreadCrumb | null | undefined;

    constructor(props: any) {
        super(props);
        this.state = {
        }
    }

    updateBreadCrumbs = (categories: string[]) => {
        if (this.breadCrumb != null && this.breadCrumb !== undefined) {
            this.breadCrumb.setState({ categories: categories })
        }
    }

    render() {
        return (
            <div>
                <SearchBar />
                <div className="body">
                    <BreadCrumb ref={ref => (this.breadCrumb = ref)} />
                    <Switch>
                        <Route path="/items/:id"
                            render={(props) => (
                                <ItemDetail {...props} updateBreadCrumb={this.updateBreadCrumbs} />
                            )}
                        >
                        </Route>
                        <Route path="/items"
                            render={(props) => (
                                <HomeFeed {...props} updateBreadCrumb={this.updateBreadCrumbs} />
                            )}
                        >
                        </Route>
                        <Route path="/">
                        </Route>
                    </Switch>
                </div>
            </div>
        );
    }
}


export default App;