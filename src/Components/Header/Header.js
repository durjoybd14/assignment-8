import React from 'react';
import './Header.css';

const Header = ({text}) => {
    return (
        <div className="col-lg-12 header-container shadow-sm rounded">
            <h1>{text}</h1>
        </div>
    );
};

export default Header;

