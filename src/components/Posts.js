import React, { Component } from 'react';
import { connect } from 'react-redux';
import { itemsFetchData } from '../actions/postAction';


class ItemList extends Component {
    componentDidMount() {
        this.props.fetchData('https://jsonplaceholder.typicode.com/posts');
    }
    render() {
        if (this.props.hasErrored) {
            return <p>Error!!!</p>;
        }
        if (this.props.isLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div>
                <h1>Posts</h1>
                <div>
                    <input type="text" placeholder="Search..."/>
                    <button>Search</button>
                </div>
                <ul>
                    {this.props.items && this.props.items.map((item) => (
                        <li key={item.id}>
                            <h2>{item.title}</h2>
                            <p>{item.body}</p>
                        </li>
                    ))}
                </ul>
            </div>

        )
    }
}
const mapStateToProps = (state) => {
    return {
        items: state.items,
        hasErrored: state.itemsHasErrored,
        isLoading: state.itemsIsLoading
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        fetchData: (url) => dispatch(itemsFetchData(url))
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ItemList);
