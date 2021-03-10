import React from 'react';
import { Jumbotron, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSadTear } from '@fortawesome/free-solid-svg-icons';

const NoMatch = () => {
    return (
        <Jumbotron className="mt-5 mb-5 text-center">
            <Container>
                <h1><span><FontAwesomeIcon icon={faSadTear} /></span> No Match Found Error-404 <span><FontAwesomeIcon icon={faSadTear} /></span></h1>
            </Container>
        </Jumbotron>
    );
};

export default NoMatch;