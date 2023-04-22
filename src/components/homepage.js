import React from 'react';
import './homepage.css';

export default function homepage(props) {
    return (
        <div>
            <section class="hero-banner">
                <div class="container">
                    <h1>Bullies who encourage reading? You betcha!</h1>
                    <p>We take the hassle out of finding your next great read - The Book Bullies have got your back!</p>
                    <button class="btn" onClick={props.redirectToBooks} >Let's Talk Books</button>
                </div>
            </section>
            <div class="top-books">
                <h2>Here are some of our favorite books</h2>
                <div class="book-images">
                    <div class='individual-books'>
                        <h3>Go Giver</h3>
                        <img src="https://target.scene7.com/is/image/Target/GUEST_b3258eca-a2bb-47dd-ab42-6465c550b5e4?wid=488&hei=488&fmt=pjpeg" alt="Go-Giver" />
                        <p>"The Go-Giver" is a business parable that tells the story of a young ambitious professional named Joe who learns the five laws of stratospheric success from a successful entrepreneur named Pindar.</p>
                    </div>
                    <div class='individual-books'>
                        <h3>Atomic Habits</h3>
                        <img src="https://target.scene7.com/is/image/Target/GUEST_3895c409-9ce5-4123-9ac8-eec90a49ca08?wid=488&hei=488&fmt=pjpeg" />
                        <p>"Atomic Habits" is a self-help book that focuses on the idea that small, consistent changes in behavior can lead to remarkable improvements in one's life.</p>
                    </div>
                    <div class='individual-books'>
                        <h3>Art Of War</h3>
                        <img src="https://target.scene7.com/is/image/Target/GUEST_0dd280c2-efc8-450d-87de-989fb23ab513?wid=488&hei=488&fmt=pjpeg" />
                        <p>"The Art of War" is a classic Chinese military treatise that focuses on the strategies and tactics necessary to win a war. It emphasizes the importance of understanding oneself, one's enemy, and the battlefield in order to achieve victory.</p>
                    </div>
                </div>
            </div>
            <div class="about-bullies">
                <div class='about-text'>
                    <h3>Multiculturalism</h3>
                    <h2>Breaking Barriers with Books</h2>
                    <p>At The Book Bullies, we are committed to promoting diversity and inclusivity through our selection of books and book reviews. We feature books by diverse authors and stories that reflect a wide range of cultural experiences. Our community encourages open and respectful discussion about diverse perspectives, and we strive to create a welcoming space for readers of all backgrounds.</p>
                </div>
                <div class="about-images">
                    <img src='https://thumbs.dreamstime.com/b/reading-exciting-book-surprised-young-man-keeping-mouth-open-standing-library-43136327.jpg' />
                </div>
            </div>
            <div class='bottom-section'>
                <div class='join-today'>
                    <h2>Want to be able to post your own books and thoughts?</h2>
                    <p>Be Part of a Community that Supports Reading - Join the Book Bullies Now!</p>
                    <button onClick={props.redirectToLogin2} class='btn'>Join Today</button>
                    <div class='copyright'>
                        <h3>Copyright © 2023 Book Bullies. All rights reserved.</h3>
                        <h3>If you have any questions about our copyright policy, please contact us at thebookbullies@gmail.com.</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}