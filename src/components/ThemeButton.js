import React from 'react';
import { Icon } from '@iconify/react';

const setTheme = (themeName) => {
    localStorage.setItem('theme', themeName);
    document.documentElement.className = themeName;
  }
  
  const toggleTheme = () => {
    if(localStorage.getItem('theme') === 'theme-dark'){
        setTheme('theme-light')
    } else {
        setTheme('theme-dark');
    }
  };
  
  (function(){
    if(localStorage.getItem('theme') === 'theme-dark') {
      setTheme('theme-dark');
    } else {
      setTheme('theme-light');
    }
  })

const buttonChanger = (buttonIcon) => {
    let moonIcon = `${<Icon icon="ion:moon-sharp" color="white" />}`
    let sunIcon = `${<Icon icon="ph:sun-dim-light" color="white" />}`
    if (themeName === 'theme-dark') {
        buttonIcon = sunIcon
    } else {
        buttonIcon = moonIcon
    }
}

function ThemeButton() {
    return(
        <div>
            <button>{toggleButton}</button>
        </div>
    )
}

export default ThemeButton;