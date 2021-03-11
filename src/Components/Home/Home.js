import React, { useState, useEffect } from 'react';
import Header from '../Header/Header';
import Leagues from '../Leagues/Leagues';
import './Home.css';

const Home = () => {
    const [leagues, setLeagues] = useState([]);
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`;
        fetch(url)
            .then(res => res.json())
            .then(data => setLeagues(data.leagues))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                <Header text={'Sports Buzz'}></Header>
            </div>
            <div className="row">
                <div className="league-container mt-5">
                    {
                        leagues.map(league => <Leagues league={league} key={league.idLeague}></Leagues>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Home;