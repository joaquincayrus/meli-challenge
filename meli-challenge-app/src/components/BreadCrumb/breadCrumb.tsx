import React from 'react';
import '../../index.scss';
import './breadCrumb.scss';

class BreadCrumb extends React.Component<{}, { categories: string[] }> {
    constructor(props: any) {
        super(props);
        this.state = {
            categories: [],
        }
    }

    componentWillReceiveProps(nextProps: any) {
        this.setState({ categories: nextProps.categories ? nextProps.categories : [] });
    }

    render(): any {
        return (
            <div className='breadCrumb center col-10'>
                {this.state.categories.map((category, index) => {
                    if (category == null || category === undefined) {
                        return '';
                    }
                    if (index !== this.state.categories.length - 1 && (this.state.categories[index + 1] !== undefined && this.state.categories[index + 1] !== null)) {
                        return (<span key={index}>{category}{' > '}</span>)
                    } else {
                        return (
                            <span key={index}>{category}</span>
                        )
                    }
                }
                )}
            </div >
        );
    }
}

export default BreadCrumb;