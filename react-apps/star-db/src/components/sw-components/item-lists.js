import React from 'react';
import { withData, withSwapiSevice, compose } from '../hoc-helpers';
import ItemList from '../item-list';

const withChildFunction = (fn) => (Wrapped) => {
    return (props) => {
        return (
            <Wrapped {...props}>
                {fn}
            </Wrapped>
        );
    };
};

const renderName = ({ name }) => <span>{name}</span>;
const renderModelAndName = ({ model, name }) => <span>{name} ({model})</span>;

const PersonList = compose(
    withSwapiSevice('people'),
    withData,
    withChildFunction(renderName)
)(ItemList);

const PlanetList = compose(
    withSwapiSevice('planets'),
    withData,
    withChildFunction(renderName)
)(ItemList);

const StarshipList = compose(
    withSwapiSevice('starships'),
    withData,
    withChildFunction(renderModelAndName)
)(ItemList);

export { PersonList, PlanetList, StarshipList };
