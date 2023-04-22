import React, { useState } from "react";
import './createUser.css';
// import axios from "axios";
import { NavLink } from "react-router-dom";

const initialFormValues = { username: '', email: '', password: '' }

export default function createUser(props) {

const [values, setValues] = useState(initialFormValues);

const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
}

const onSubmit = evt => {
    evt.preventDefault();
    props.createUser(values)
    setValues(initialFormValues)
    props.redirectToLogin()
}

    return (
        <div>
            <h1>Create User</h1>
            <form onSubmit={onSubmit}>
            <label for="name">Username:</label>
            <input value={values.username} type="text" id="username" name="names" onChange={onChange} required />
            <label for="email">Email:</label>
            <input value={values.email} type="email" id="email" name="email" onChange={onChange} required />
            <label for="password">Password:</label>
            <input value={values.password} type="password" id="password" name="password" onChange={onChange} required />
            <button type="submit">Create User</button>
            </form>
            <h2>Already have a login? <NavLink id="login" to='/'>Click Here</NavLink></h2>
        </div>
    )
}