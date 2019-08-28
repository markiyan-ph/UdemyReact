import React, { Component } from 'react';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ItemList from '../item-list';
import PersonDetails from '../person-details';
import ErrorButton from '../error-button';

import './app.css';
import ErrorIndicator from '../error-indicator';

export default class App extends Component {
    constructor() {
        super();

        this.state = {
            showRandomPlanet: true,
            selectedPerson: null,
            hasError: false
        };
    }

    onToggleRandomPlanet = () => {
        this.setState(({ showRandomPlanet }) => {
            return {
                showRandomPlanet: !showRandomPlanet
            };
        });
    }

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        });
    }

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({ hasError: true });
    }

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet /> : null;

        if (this.state.hasError) {
            return <ErrorIndicator />;
        }
        
        return (
            <div className="container" >
                <Header />
                {planet}

                <button
                    className='toggle-random-planet btn btn-warning btn-lg'
                    onClick={this.onToggleRandomPlanet}
                >
                    Toggle random planet
                </button>
                <ErrorButton />

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected} />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>
            </div>
        );
    }
}