import React, { useState, useEffect } from "react";
import './books.css';
import axios from "axios";

const initialFormValues = { title: '', genre: '', rating: 0, summary: '', personal: '' }

export default function Bookpage() {
const [values, setValues] = useState(initialFormValues);

const onChange = evt => {
    const { id, value } = evt.target;
    setValues({...values, [id]: value})
}

const onSubmit = evt => {
    evt.preventDefault();
    postBook(values);
}

    return (
        <div>
            <section class="book-banner">
                <div class="container">
                    <h1>Transform your life, one book at a time with The Book Bullies!</h1>
                    <p>Join the Book Bullies community and share your favorite books!<br />
                        Your opinion matters and can help others discover their next life-changing read.<br />
                        Let's bully our way through the literary world together!</p>
                </div>
            </section>
            <div class='post-section'>
                <div class='description-section'>

                </div>
                <form>
                    <label for="book-title">Book Title:</label>
                    <input type="text" id="book-title" name="book-title" required />
                    <label for="book-genre">Select a Genre:</label>
                    <select id="book-genre" name="book-genre">
                        <option value="">--Please choose an option--</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="biography">Biography</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="self-help">Self-Help</option>
                        <option value="thriller">Thriller</option>
                    </select>
                    <label for="rating">Rating (1-10):</label>
                    <input type="number" id="rating" name="rating" min="1" max="10" required></input>
                    <label for="summary">Brief summary:</label>
                    <textarea id="summary" name="summary"></textarea>
                    <label for="personal-opinion">Personal Opinion:</label>
                    <textarea id="personal-opinion" name="personal-opinion"></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}