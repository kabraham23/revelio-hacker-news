import React from 'react';
import { Icon } from '@iconify/react';
import ThemeButton from './ThemeButton'


function Header() {
    return (
        <div className='header'>
            <div className='header-left'>
                <Icon icon="fa6-brands:y-combinator" color="#f56f36" />
                <h1>Hacker News</h1>
                <a href="#">latest</a>
                <span> | </span>
                <a href="#">starred</a>
            </div>
            <div className='header-right'>
                <ThemeButton />
            </div>
        </div>
    )
}


export default Header;