import React from 'react';
import { withData, withSwapiSevice } from '../hoc-helpers';
import ItemList from '../item-list';

const withChildFunction = (Wrapped, fn) => {
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

const PersonList = withSwapiSevice(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    'people'
);

const PlanetList = withSwapiSevice(
    withData(
        withChildFunction(ItemList, renderName)
    ),
    'planets'
);

const StarshipList = withSwapiSevice(
    withData(
        withChildFunction(ItemList, renderModelAndName)
    ),
    'starships'
);

export { PersonList, PlanetList, StarshipList };
