import React from 'react';
import './Banner.css';

const Banner = (props) => {
    const { text, badge, banner } = props;

    const bannerStyle = {
        background: `linear-gradient(rgba(180, 179, 177, 0.4),rgba(235, 228, 217, 0.3)), url(${banner})`
    }
    return (
        <div className="banner-container col-lg-12 shadow-sm rounded" style={bannerStyle}>
            <img src={badge} alt="" />
            <h4>{text}</h4>
        </div>
    );
};

export default Banner;