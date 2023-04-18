import React from "react";
import './createUser.css';

export default function createUser() {
    return (
        <div>
            <h1>Create User</h1>
            <form>
            <label for="name">Username:</label>
            <input type="text" id="name" name="names" required />
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <button type="submit">Create User</button>
            </form>
        </div>
    )
}