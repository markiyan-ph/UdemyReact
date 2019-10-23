import React, { Component } from 'react';
import RandomPlanet from '../random-planet';
// import ErrorButton from '../error-button';
// import PeoplePage from '../people-page/people-page';
import SwapiService from '../../services/swapi-service';
import Row from '../content-row';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import { PersonDetails, PlanetDetails, StarhipDetails } from '../sw-components/item-details';
import { PersonList, PlanetList, StarshipList } from '../sw-components/item-lists';
import './app.css';

import { SwapiServiceProvider } from '../swapi-service-context';


export default class App extends Component {

    swapiService = new SwapiService();

    state = {
        showRandomPlanet: true,
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
        // const personDetails = (
        //     <ItemDetails getData={getPerson} getImg={getPersonImg} itemId={11}>
        //         <Record field='gender' label='Gender' />
        //         <Record field='eyeColor' label='Eye color' />
        //     </ItemDetails>
        // );
        // const starshipDetails = (
        //     <ItemDetails getData={getStarship} getImg={getStarShipImg} itemId={5} >
        //         <Record field='model' label='Model' />
        //         <Record field='length' label='Length' />
        //         <Record field='costInCredits' label='Cost' />
        //     </ItemDetails>
        // );

        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.swapiService}>
                    <div className="container" >
                        <Header />
                        {planet}

                        <Row
                            left={
                                <PersonList
                                    onItemSelected={() => { }}
                                />
                            }
                            right={<PersonDetails itemId={5} />}
                        />
                        <Row
                            left={
                                <PlanetList
                                    onItemSelected={() => { }}
                                />
                            }
                            right={<PlanetDetails itemId={5} />}
                        />
                        <Row
                            left={
                                <StarshipList
                                    onItemSelected={() => { }}
                                />
                            }
                            right={<StarhipDetails itemId={5} />}
                        />


                        {/* {planet}

                    <button
                        className='toggle-random-planet btn btn-warning btn-lg'
                        onClick={this.onToggleRandomPlanet}
                    >
                        Toggle random planet
                    </button>
                    <ErrorButton /> */}

                        {/* <PeoplePage /> */}
                    </div>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}