import './App.css';
import React, { Component} from 'react';
import { MemoryRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Icon } from '@iconify/react';
import ThemeButton from './components/ThemeButton.js';
import Latest from './components/Latest.js';
import Starred from './components/Starred.js';

class App extends Component {
  render() {
  return (
    <div className="App">
      <Router>
        <div className='header'>
          <Icon className='header-icon' icon="mdi:alpha-i-box" color="#f56f36" />
          <h1 className='hacker-news'>Informed News</h1>
          <div className='component-link'>
            <Link to="/">latest</Link>
            <span> | </span>
            <Link to="/starred">starred</Link>
          </div>
          <ThemeButton />
        </div>
        <div className='content'>
          <Routes>
            <Route path="/" element={<Latest />} />
            <Route path='/starred' element={<Starred />} />
          </Routes>
        </div>
        <div className='footer'>
          <p>Informed News</p>
            <div>
                <Link className="linkTo" to="/">latest</Link>
                <span> | </span>
                <Link className="linkTo" to="/starred">starred</Link>
            </div>
        </div>
        </Router>
    </div>
  );
  }
};

export default App;
