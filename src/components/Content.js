import React from 'react';
import { BrowserRouter as Router, Route, Routes, redirect } from 'react-router-dom';
import Latest from './Latest.js';
import Starred from './Starred.js';

function Content() {
    return(
        <div className='home'>
            <BrowserRouter>
                <Routes>
                <Route path="/">
                    <redirect to="latest" />
                </Route>
                <Route path="/starred" element={<Starred />} />
            </Routes>
          </BrowserRouter>
        </div>
    )
}

export default Content;