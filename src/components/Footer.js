import React from 'react';

function Footer() {
    return (
        <div className='footer'>
            <p>Hacker News</p>
            <div>
                <a href="/latest">latest</a>
                <span> | </span>
                <a href="/starred">starred</a>
            </div>

        </div>
    )
}

export default Footer;