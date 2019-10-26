import React, { Component } from 'react';

import './item-details.css';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    );
};

export {
    Record
};

export default class ItemDetails extends Component {

    // swapiService = new SwapiService();

    state = {
        item: null,
        loading: false,
        hasError: false,
        imgUrl: ''
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {        
        if (
            this.props.itemId !== prevProps.itemId || 
            this.props.getData !== prevProps.getData ||
            this.props.getImg !== prevProps.getImg
        ) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId, getData, getImg } = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true,
            hasError: false
        });

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    hasError: false,
                    imgUrl: getImg(item)
                });
            })
            .catch(() => {
                this.setState({
                    item: {},
                    loading: false,
                    hasError: true
                });
            });
    }

    render() {

        const { loading, hasError, item } = this.state;

        if (!item) {
            return <span>Select an person from a list</span>;
        }


        const spinner = loading ? <Spinner /> : null;
        const errorMessage = hasError ? <ErrorIndicator /> : null;
        const content = (!loading && !hasError) ? <ItemView
            item={this.state.item} img={this.state.imgUrl}
            records={
                React.Children.map(this.props.children, (child) => {
                    return React.cloneElement(child, { item });
                })
            }
        /> : null;

        return (
            <div className="item-details card">
                {spinner}
                {errorMessage}
                {content}
            </div>
        );
    }
}

const ItemView = ({ item, img, records }) => {
    const { name } = item;

    return (
        <React.Fragment>
            <img className="item-image"
                alt=""
                src={img} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    {records}
                </ul>
                <ErrorButton />
            </div>
        </React.Fragment>
    );
};