import React from 'react';

const Header = (props) => {
    return(
        <div>
            <h2>{props.siteTitle}</h2>
            <div>{props.slogan}</div>
        </div>
    );
};

export default Header;