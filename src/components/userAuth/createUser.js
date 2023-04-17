import React from "react";
import './createUser.css';

export default function createUser() {
    return (
        <div>
            <h1>Create User</h1>
            <label for="name">Name:</label>
            <input type="text" id="name" name="names" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
        </div>
    )
}