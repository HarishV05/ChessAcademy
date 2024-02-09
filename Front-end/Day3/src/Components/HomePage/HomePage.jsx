// eslint-disable-next-line no-unused-vars
import React from 'react';
import './HomePage.css'; 
import Nav from '../Navbar/Nav';

const HomePage = () => {
  return (
    <div>
      <Nav/>
    <div>
      <header className="header">
        <h1>KNIGHTS QUEST</h1>
        <p className='newp'>Master the Game of Kings</p>
      </header>


      <section className="main-section">
        <h1>Welcome to Chess Academy</h1>
        <p>Learn and improve your chess skills with our experienced instructors.</p>
        <img src="https://media1.tenor.com/images/01366a6180ed9941e3281bce8cdf51b2/tenor.gif?itemid=8596042" alt="Chess Academy Image" ></img>
      </section>

      <footer className="footer">
        &copy; 2024 Chess Academy. All rights reserved.
      </footer>
    </div>
    </div>
  );
};

export default HomePage;
