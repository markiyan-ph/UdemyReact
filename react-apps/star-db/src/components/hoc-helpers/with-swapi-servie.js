import React from 'react';
import { SwapiServiceConsumer } from '../swapi-service-context';

const mapMethodsToProps = (swapiService, object) => {
    const objectMap = {
        person: {
            getData: swapiService.getPerson,
            getImg: swapiService.getPersonImg
        },
        planet: {
            getData: swapiService.getPlanet,
            getImg: swapiService.getPlanetImg
        },
        starship: {
            getData: swapiService.getStarship,
            getImg: swapiService.getStarShipImg
        },
        people: {
            getData: swapiService.getAllPeople
        },
        planets: {
            getData: swapiService.getAllPlanets
        },
        starships: {
            getData: swapiService.getAllStarships
        }
    };

    return objectMap[object];
};

const withSwapiSevice = (Wrapped, object) => {
    return (props) => {
        return (
            <SwapiServiceConsumer>
                {
                    (swapiService) => {
                        const serviceProps = mapMethodsToProps(swapiService, object);

                        return (
                            <Wrapped {...props} {...serviceProps} />
                        );
                    }
                }
            </SwapiServiceConsumer>
        );
    };
};

export default withSwapiSevice;