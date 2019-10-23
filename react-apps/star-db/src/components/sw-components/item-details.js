import React from 'react';
import ItemDetails, { Record } from '../item-details';
import { withSwapiSevice } from '../hoc-helpers';

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field='gender' label='Gender' />
            <Record field='eyeColor' label='Eye color' />
        </ItemDetails>
    );
};

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field='population' label='Population' />
            <Record field='rotationPeriod' label='Rotation period' />
            <Record field='diameter' label='Diameter' />
        </ItemDetails>
    );
};

const StarhipDetails = (props) => {
    return (
        <ItemDetails {...props} >
            <Record field='model' label='Model' />
            <Record field='length' label='Length' />
            <Record field='costInCredits' label='Cost' />
        </ItemDetails>
    );
};

const personDetails = withSwapiSevice(PersonDetails, 'person');
const planetDetails = withSwapiSevice(PlanetDetails, 'planet');
const starhipDetails = withSwapiSevice(StarhipDetails, 'starship');

export {
    personDetails as PersonDetails,
    planetDetails as PlanetDetails,
    starhipDetails as StarhipDetails
};
