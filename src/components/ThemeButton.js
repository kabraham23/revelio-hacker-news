import React, { useEffect, useState } from 'react';
import { Icon } from '@iconify/react';

import '../css/theme.css';


function ThemeButton() {
    const [theme, setTheme] = useState('light')
    const toggleTheme = () => {
        if (theme === 'light') {
            setTheme('dark');
        } else {
            setTheme('light');
        }
    };
    
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return(
        <div className={`App ${theme}`}>
            <button className='theme-button' onClick={toggleTheme}>{<Icon icon="carbon:sun" />}</button>
        </div>
    )
}

export default ThemeButton;