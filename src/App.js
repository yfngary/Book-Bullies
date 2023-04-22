import './App.css';
import React, { useState } from 'react';
import Homepage from './components/homepage';
import Bookpage from './components/booksPage/books';
import LoginPage from './components/userAuth/loginPage';
import CreateUser from './components/userAuth/createUser';

// import Loading from './components/loadingPage/loading';
import BookList from './components/booksPage/booklist';
import Message from './components/messageBlock/message';
import Dropdown from './components/linkDropDown/Dropdown'
// import LoadingWrapper from './components/loadingPage/loadingWrapper';
import { Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { axiosWithAuth } from './axios';

function App() {
    // const [isLoading, setIsLoading] = useState(true);
    const [loggedIn, setLoggedIn] = useState(false);
    const [books, setBooks] = useState([]);
    const [user, setUser] = useState({});
    const [visible, setVisible] = useState(false);
    const [message, setMessage] = useState('Welcome to the Book Bullies!');
    const navigate = useNavigate();
    const redirectToBooks = () => { navigate('/books') }
    const redirectToLogin = () => { navigate('/') }
    const redirectToLogin2 = () => {
        setMessage('You need to create a login to post books my friend ;]')
        navigate('/createUser')
    }
    const handleVisible = (visible) => {
        if(visible != true) {
            setVisible(false)
        } else {
            setVisible(true)
        }
    }

    const login = (values) => {
        axiosWithAuth().post('http://localhost:3001/auth/login', values)
            .then(res => {
                setLoggedIn(true);
                setMessage(res.data.message);
                setUser(res.data.username);
                const token = res.data.token
                localStorage.setItem('token', token);
                redirectToBooks();
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
            <Message message={message} />
            <nav>
                <div class="logo">
                    <a href="#">The Book Bullies</a>
                </div>
                <ul class="nav-links">
                    <li><NavLink id='homepage' to='/home'>Home</NavLink></li>
                    <li><NavLink id='bookpage' to='/books'>Books</NavLink></li>
                    {loggedIn ? <li><button onClick={logout} class='logout-btn'>Logout</button></li> : <li><NavLink id='login' to='/'>Login</NavLink></li>}
                </ul>
                <button class='nav-btn' onClick={handleVisible}>-<br/>-<br/>-</button>
                <Dropdown visible={visible} />
            </nav>
            <Routes>
                <Route path='/' element={<LoginPage login={login} redirectToBooks={redirectToBooks} user={user} />} />
                <Route path='/books' element={
                    <>
                        <Bookpage postBook={postBook} books={books} redirectToLogin2={redirectToLogin2} />
                        <BookList getBooks={getBooks} books={books} />
                    </>} />
                <Route path='/home' element={<Homepage redirectToLogin2={redirectToLogin2} redirectToBooks={redirectToBooks} />} />
                <Route path='/createUser' element={<CreateUser redirectToLogin={redirectToLogin} createUser={createUser} />} />
            </Routes>
        </div>
    )
}

export default App