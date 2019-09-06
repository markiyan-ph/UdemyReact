import React, { Component } from 'react';

import './item-details.css';
import SwapiService from '../../services/swapi-service';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import ErrorButton from '../error-button';

export default class ItemDetails extends Component {

    swapiService = new SwapiService();

    state = {
        item: null,
        loading: false,
        hasError: false
    };

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const { itemId } = this.props;

        if (!itemId) {
            return;
        }

        this.setState({
            loading: true
        });

        this.swapiService
            .getPerson(itemId)
            .then((item) => {
                this.setState({
                    item,
                    loading: false,
                    hasError: false
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

        if (!this.state.item) {
            return <span>Select an person from a list</span>;
        }

        const { loading, hasError } = this.state;
        
        const spinner = loading ? <Spinner /> : null;
        const errorMessage = hasError ? <ErrorIndicator /> : null;
        const content = (!loading && !hasError) ? <ItemView item={this.state.item} /> : null;

        return (
            <div className="item-details card">
                {spinner}
                {errorMessage}
                {content}
            </div>
        );
    }
}

const ItemView = ({ item }) => {
    const { id, name, gender, birthYear, eyeColor } = item;

    return (
        <React.Fragment>
            <img className="item-image"
                alt=""
                src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`} />

            <div className="card-body">
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Gender</span>
                        <span>{gender}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Birth Year</span>
                        <span>{birthYear}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Eye Color</span>
                        <span>{eyeColor}</span>
                    </li>
                </ul>
                <ErrorButton />
            </div>
        </React.Fragment>
    );
};
