import './App.css';
import React, { useEffect, useState } from 'react';
import Homepage from './components/homepage';
import Bookpage from './components/books';
import LoginPage from './components/userAuth/loginPage';
import CreateUser from './components/userAuth/createUser';
import Loading from './components/loadingPage/loading';
// import LoadingWrapper from './components/loadingPage/loadingWrapper';
import { Routes, Route, NavLink } from 'react-router-dom';


function App() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Simulate loading time
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, []);

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
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={isLoading ? <Loading /> : <LoginPage />} />
                <Route path='/books' element={isLoading ? <Loading /> : <Bookpage />} />
                <Route path='/home' element={isLoading ? <Loading /> : <Homepage />} />
                <Route path='/createUser' element={isLoading ? <Loading /> : <CreateUser />} />
            </Routes>
        </div>
    )
}

export default App