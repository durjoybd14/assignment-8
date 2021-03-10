import { Button, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import './Leagues.css';

const Leagues = (props) => {
    const { strLeague, strSport, idLeague } = props.league;

    return (
        <Card className="text-center shadow league-card">
            <Card.Body>
                <Card.Title>{strLeague}</Card.Title>
                <Card.Text className="text-muted"> Sports type: {strSport}</Card.Text>
            </Card.Body>
            <Card.Footer className="card-footer">
                <Button as={Link} to={`/leagueinfo/${idLeague}`} variant="light">Explore <FontAwesomeIcon icon={faArrowRight} /></Button>
            </Card.Footer>
        </Card>
    );
};

export default Leagues;