import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFlag, faClock, faFutbol, faMars } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faYoutube, faFacebook } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import { Card } from 'react-bootstrap';
import Banner from '../Banner/Banner';
import './Information.css';
import maleImage from '../../Photo/male.png';
import femaleImage from '../../Photo/female.png';

const Information = (props) => {
    const { strBadge, strBanner, intFormedYear, strLeague, strSport, strGender, strCountry, strDescriptionEN, strDescriptionFR, strFacebook, strTwitter, strYoutube, strWebsite } = props.leagueDetails;

    let src;
    strGender === "Male" ? src = maleImage : src = femaleImage

    const websiteLink = `https://${strWebsite}`;
    const facebookLink = `https://${strFacebook}`;
    const youtubeLink = `https://${strYoutube}`;
    const twitterLink = `https://${strTwitter}`;

    return (
        <div className="mt-5 mb-5">
            <Banner badge={strBadge} text={strLeague} banner={strBanner}></Banner>

            <div className="card-container mt-5 p-5" >
                <Card className="information-card shadow">
                    <Card.Body>
                        <Card.Title>{strLeague}</Card.Title>
                        <Card.Text><FontAwesomeIcon icon={faClock} />  Founded: {intFormedYear}</Card.Text>
                        <Card.Text><FontAwesomeIcon icon={faFlag} />  Country: {strCountry}</Card.Text>
                        <Card.Text><FontAwesomeIcon icon={faFutbol} />  Sports type: {strSport}</Card.Text>
                        <Card.Text><FontAwesomeIcon icon={faMars} />  Gender: {strGender}</Card.Text>
                    </Card.Body>
                </Card>

                <div className="gender-image">
                    {<img src={src} alt="" />}
                </div>
            </div>

            <div className="container mt-5 p-5">
                <p>{strDescriptionEN}</p>
                <p>{strDescriptionFR}</p>
                <h5>Visit our website: <a href={websiteLink}>{strWebsite}</a></h5>
                <div className="social-icon">
                    <h6>Follow us on:</h6>
                    <span><a href={twitterLink}><FontAwesomeIcon icon={faTwitter} /></a></span>
                    <span><a href={facebookLink}><FontAwesomeIcon icon={faFacebook} /></a></span>
                    <span><a href={youtubeLink}><FontAwesomeIcon icon={faYoutube} /></a></span>
                </div>
            </div>

        </div>
    );
};

export default Information;