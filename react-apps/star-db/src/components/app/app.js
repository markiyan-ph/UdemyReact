import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import DummySwapiService from '../../services/dummy-swapi-service';
import SwapiService from '../../services/swapi-service';
import ErrorBoundry from '../error-boundry';
import Header from '../header';
import { PeoplePage, PlanetsPage, StarshipsPage } from '../pages';
import RandomPlanet from '../random-planet';
import { PersonDetails, PlanetDetails, StarhipDetails } from '../sw-components';
import { SwapiServiceProvider } from '../swapi-service-context';
import './app.css';

export default class App extends Component {

    state = {
        swapiService: new SwapiService()
    };

    onServiceChange = () => {
        this.setState(({ swapiService }) => {
            const Service = swapiService instanceof SwapiService ?
                DummySwapiService : SwapiService;

            return { swapiService: new Service() };
        });
    }

    componentDidCatch() {
        this.setState({ hasError: true });
    }

    render() {
        return (
            <ErrorBoundry>
                <SwapiServiceProvider value={this.state.swapiService}>
                    <Router>
                        <div className="container" >
                            <Header onServiceChange={this.onServiceChange} />

                            <RandomPlanet />

                            <Switch>
                                <Route path="/"
                                    render={() => <h2>Welcome to StarDB</h2>}
                                    exact />
                                <Route path="/people/:id?" component={PeoplePage} exact />
                                <Route path="/planets/:id?" component={PlanetsPage} exact />
                                <Route path="/starships/:id?" component={StarshipsPage} exact />
                                <Route path="/people/:id/detailed"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <PersonDetails itemId={id} detailed={true} />;
                                    }} />
                                <Route path="/planets/:id/detailed"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <PlanetDetails itemId={id} detailed={true} />;
                                    }} />
                                <Route path="/starships/:id/detailed"
                                    render={({ match }) => {
                                        const { id } = match.params;
                                        return <StarhipDetails itemId={id} detailed={true} />;
                                    }} />
                                <Route render={() => <h2>Page not found</h2>} />
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundry>
        );
    }
}