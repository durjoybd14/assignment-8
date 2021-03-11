import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Information from '../Information/Information';


const LeaguesDetails = () => {
    const { idLeague } = useParams()
    const [leaguesDetails, setLeaguesDetails] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeaguesDetails(data.leagues))
    }, [idLeague])
    return (
        <div>
            {
                leaguesDetails.map(leagueDetails => <Information leagueDetails={leagueDetails} key={leagueDetails.idLeague}></Information>)
            }
        </div>
    );
};

export default LeaguesDetails;