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
    
    const buttonIcon = () => {
        let moonIcon = `${<Icon icon="ion:moon-sharp" color="white" />}`
        let sunIcon = `${<Icon icon="ph:sun-dim-light" color="white" />}`
        if (theme === 'dark') {
            buttonIcon = sunIcon
        } else {
            buttonIcon = moonIcon
        }
    };
    useEffect(() => {
        document.body.className = theme;
    }, [theme]);

    return(
        <div className={`App ${theme}`}>
            <button onClick={toggleTheme}>{buttonIcon} Toggle Theme </button>
        </div>
    )
}

export default ThemeButton;