import React, { useState } from "react";
import './createUser.css';
import axios from "axios";

const initialFormValues = { username: '', email: '', password: '' }

export default function createUser() {

const [values, setValues] = useState(initialFormValues);

function createUser(values) {
    axios.post('http://localhost:3001/auth/register', values)
        .then(res => {
            console.log(res)
        })
}

const onChange = evt => {
    const { id, value } = evt.target
    setValues({ ...values, [id]: value })
}

const onSubmit = evt => {
    evt.preventDefault();
    createUser(values)
    setValues(initialFormValues)
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
        </div>
    )
}