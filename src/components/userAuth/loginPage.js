import React, { useState } from "react";
import './loginPage.css';
import { NavLink } from "react-router-dom";

const initialFormValues = { username: '', password: '' }

export default function loginPage(props) {

const [values, setValues] = useState(initialFormValues);

const onChange = evt => {
    const { id, value } = evt.target
    setValues({...values, [id]: value})
}

const onSubmit = evt => {
    evt.preventDefault();
    props.login(values)
    setValues(initialFormValues);
}

    return (
        <div>
            <form onSubmit={onSubmit}>
                <h1>Login</h1>
                <label for="username">username:</label>
                <input type="text" id="username" name="username" onChange={onChange} value={values.username} required />
                <label for="password">Password:</label>
                <input type="password" id="password" name="password" onChange={onChange} value={values.password} required />
                <input type="submit" value="Login" />
            </form>
            <div>
                <h2>Don't have a login? <NavLink id='createUser' to ='/createUser'>sign up</NavLink> here</h2>
            </div>
        </div>
    )
}