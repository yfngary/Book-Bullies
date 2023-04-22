import React, { useState, useEffect } from "react";
// import { useNavigate } from 'react-router-dom'
import './books.css';
// import axios from "axios";

const initialFormValues = { title: '', genre: '', rating: 0, summary: '', personal: '' }

export default function Bookpage(props) {
const [values, setValues] = useState(initialFormValues);
// const navigate = useNavigate();
const token = localStorage.getItem('token');

useEffect(() => {
    if(!token) {
        props.redirectToLogin2()
    }
}, [])

const onChange = evt => {
    const { id, value } = evt.target;
    setValues({...values, [id]: value})
}

const onSubmit = evt => {
    evt.preventDefault();
    props.postBook(values);
    setValues(initialFormValues);
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
                <form onSubmit={onSubmit}>
                    <label for="book-title">Book Title:</label>
                    <input value={values.title} type="text" id="title" name="book-title" required onChange={onChange}/>
                    <label for="book-genre">Select a Genre:</label>
                    <select value={values.genre} id="genre" name="book-genre" onChange={onChange}>
                        <option value="">--Please choose an option--</option>
                        <option value="action">Action</option>
                        <option value="adventure">Adventure</option>
                        <option value="biography">Biography</option>
                        <option value="business">Business</option>
                        <option value="comedy">Comedy</option>
                        <option value="crime">Crime</option>
                        <option value="drama">Drama</option>
                        <option value="fantasy">Fantasy</option>
                        <option value="finance">Finance</option>
                        <option value="historical">Historical</option>
                        <option value="horror">Horror</option>
                        <option value="mystery">Mystery</option>
                        <option value="romance">Romance</option>
                        <option value="science-fiction">Science Fiction</option>
                        <option value="self-help">Self-Help</option>
                        <option value="thriller">Thriller</option>
                    </select>
                    <label for="rating">Rating (1-10):</label>
                    <input value={values.rating} type="number" id="rating" name="rating" min="1" max="10" required onChange={onChange}></input>
                    <label for="summary">Brief summary:</label>
                    <textarea value={values.summary} id="summary" name="summary" onChange={onChange}></textarea>
                    <label for="personal-opinion">Personal Opinion:</label>
                    <textarea value={values.personal} id="personal" name="personal-opinion" onChange={onChange}></textarea>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}