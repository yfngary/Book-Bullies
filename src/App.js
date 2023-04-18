import './App.css';
import React from 'react';
import Homepage from './components/homepage';
import Bookpage from './components/books';
import LoginPage from './components/userAuth/loginPage';
import CreateUser from './components/userAuth/createUser';
import { Routes, Route, NavLink } from 'react-router-dom';

function App() {
    return (
        <div>
            <nav>
                <div class="logo">
                    <a href="#">The Book Bullies</a>
                </div>
                <ul class="nav-links">
                    <li><NavLink id='homepage' to='/home'>Home</NavLink></li>
                    <li><NavLink id='login' to='/'>Login</NavLink></li>
                    <li><NavLink id='bookpage' to='/books'>Books</NavLink></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<LoginPage />}/>
                <Route path='/books' element={<Bookpage />}/>
                <Route path='/home' element={<Homepage />}/>
                <Route path='/createUser' element={<CreateUser />} />
            </Routes>
            </div>
    )
}

export default App