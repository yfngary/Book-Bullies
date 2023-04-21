import './App.css';
import React, { useState } from 'react';
import Homepage from './components/homepage';
import Bookpage from './components/booksPage/books';
import LoginPage from './components/userAuth/loginPage';
import CreateUser from './components/userAuth/createUser';
// import Loading from './components/loadingPage/loading';
import BookList from './components/booksPage/booklist';
import Message from './components/messageBlock/message';
// import LoadingWrapper from './components/loadingPage/loadingWrapper';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from './axios';

function App() {
    // const [isLoading, setIsLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState({})
    const [message, setMessage] = useState('Welcome to the Book Bullies!');
    const navigate = useNavigate();
    const redirectToBooks = () => { navigate('/books') }
    const redirectToLogin = () => { navigate('/') }

    const login = (values) => {
        axiosWithAuth().post('http://localhost:3001/auth/login', values)
            .then(res => {
                setLoggedIn(true);
                setMessage(res.data.message);
                setUser(res.data.username);
                // console.log(res)
                const token = res.data.token
                localStorage.setItem('token', token);
                redirectToBooks();
                console.log(loggedIn)
            })
            .catch(err => console.log(err))
    }

    const logout = () => {
        setLoggedIn(false);
        localStorage.clear();
        setMessage(`Goodbye ${user} :(`)
        redirectToLogin();
    }

    const postBook = book => {
        axiosWithAuth().post('http://localhost:3001/books', book)
            .then(res => {
                console.log(res)
                setMessage(``)
            })
            .catch(err => console.log(err))
    }

    const getBooks = () => {
        axiosWithAuth().get('http://localhost:3001/books')
            .then(res => {
                console.log(res)
                setBooks(res.data)
            })
            .catch(err => console.log(err))
    }

    function createUser(values) {
        axios.post('http://localhost:3001/auth/register', values)
            .then(res => {
                console.log(res)
            })
    }

    return (
        <div class='app'>
            <Message message={message}/>
            <nav>
                <div class="logo">
                    <a href="#">The Book Bullies</a>
                </div>
                <ul class="nav-links">
                    <li><NavLink id='homepage' to='/home'>Home</NavLink></li>
                    <li><NavLink id='login' to='/'>Login</NavLink></li>
                    <li><NavLink id='bookpage' to='/books'>Books</NavLink></li>
                    {loggedIn ? <li><button onClick={logout} class='logout-btn'>Logout</button></li> : null}
                </ul>
            </nav>
            <Routes>
                <Route path='/' element={<LoginPage login={login} redirectToBooks={redirectToBooks} user={user} />} />
                <Route path='/books' element={
                    <>
                        <Bookpage postBook={postBook} books={books} />
                        <BookList getBooks={getBooks} books={books}/>
                    </>} />
                <Route path='/home' element={<Homepage />} />
                <Route path='/createUser' element={<CreateUser redirectToLogin={redirectToLogin} createUser={createUser} />} />
            </Routes>
        </div>
    )
}

export default App