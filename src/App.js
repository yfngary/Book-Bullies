import './App.css';
import React from 'react';
import Homepage from './components/homepage';
import Bookpage from './components/books';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
    return (
        <div>
            <nav>
                <div class="logo">
                    <a href="#">The Book Bullies</a>
                </div>
                <ul class="nav-links">
                    <li><NavLink id='homepage' to='/'>Home</NavLink></li>
                    <li><a href="#">About</a></li>
                    <li><NavLink id='bookpage' to='/books'>Books</NavLink></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<Homepage />}/>
                <Route path='/books' element={<Bookpage />}/>
            </Routes>
            </div>
    )
}

export default App