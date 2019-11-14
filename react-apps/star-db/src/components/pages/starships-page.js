import React from 'react';
import Row from '../content-row';
import { withRouter } from 'react-router-dom';
import { StarshipList, StarhipDetails } from '../sw-components';

const StarshipsPage = ({ history, match }) => {
    const { id } = match.params;
    return (
        <Row
            left={
                <StarshipList
                    onItemSelected={(id) => history.push(id)}
                />
            }
            right={<StarhipDetails itemId={id} />}
        />
    );
};

export default withRouter(StarshipsPage);