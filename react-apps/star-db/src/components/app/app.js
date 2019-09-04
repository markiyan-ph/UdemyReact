import React, { Component } from 'react';

import './app.css';

import Header from '../header';
import RandomPlanet from '../random-planet';
import ErrorButton from '../error-button';
import ErrorIndicator from '../error-indicator';
import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
// import ItemList from '../item-list';
// import PersonDetails from '../person-details';

export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
        hasError: false
    };

    onToggleRandomPlanet = () => {
        this.setState(({ showRandomPlanet }) => {
            return {
                showRandomPlanet: !showRandomPlanet
            };
        });
    }

    componentDidCatch() {
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

                <PeoplePage />

                {/* <div className="row mb-5">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllPlanets}
                            renderItem={({ name }) => (<span style={{color: '#ffffffaa'}}>{name}</span>)}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div>

                <div className="row mb2">
                    <div className="col-md-6">
                        <ItemList
                            onItemSelected={this.onPersonSelected}
                            getData={this.swapiService.getAllStarships}
                            renderItem={(item) => item.name}
                        />
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson} />
                    </div>
                </div> */}
            </div>
        );
    }
}