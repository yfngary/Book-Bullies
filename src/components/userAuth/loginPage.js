import React, { useState } from "react";
import './loginPage.css';
import { NavLink } from "react-router-dom";
import axios from "axios";

const initialFormValues = { username: '', password: '' }

export default function loginPage() {

const [values, setValues] = useState(initialFormValues);

function login(values) {
    axios.post('http://localhost:3001/auth/login', values)
        .then(res => {
            console.log(res)
            const token = res.data.token
            localStorage.setItem('token', token);
        })
        .catch(err => console.log(err))
}


const onChange = evt => {
    const { id, value } = evt.target
    setValues({...values, [id]: value})
}

const onSubmit = evt => {
    evt.preventDefault();
    login(values)
    setValues(initialFormValues);
}

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <label for="username">username:</label>
                <input type="text" id="username" name="username" onChange={onChange} required />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" onChange={onChange} required />
                <input type="submit" value="Login" />
            </form>
            <div>
                <h2>Don't have a login? <NavLink id='createUser' to ='/createUser'>sign up</NavLink> here</h2>
            </div>
        </div>
    )
}