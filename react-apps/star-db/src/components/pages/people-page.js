import React from 'react';
import Row from '../content-row';
import { withRouter } from 'react-router-dom';
import { PersonList, PersonDetails } from '../sw-components';

const PeoplePage = ({ history, match }) => {
    const { id } = match.params;

    return (
        <Row
            left={
                <PersonList
                    onItemSelected={ (id) => history.push(id) }
                />
            }
            right={<PersonDetails itemId={id} detailed={false} />}
        />
    );
};

export default withRouter(PeoplePage);