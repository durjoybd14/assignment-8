import React from 'react';
import './Banner.css'

const Banner = (props) => {
    const text = props.text;
    const logo = props.logo;
    return (
        <div className="col-lg-12 banner shadow-sm rounded">
            <div className="banner-container">
                <img src={logo} alt="" style={{ width: '200px' }} />
                <h1>{text}</h1>
            </div>
        </div>
    );
};

export default Banner;