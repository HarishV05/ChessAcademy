// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Nav.css';
import knight from './Knights.png'
import { GiChessKing } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <header>
    <nav>
            <div className='img1'>
                <img src={knight} width='100px' ></img>
            </div>

        <ul className='NavItems'>

            <li>
                <Link to='/'>Home</Link>
            </li>
            <li>
                <Link to='/Offers'>Academy</Link>
            </li>

            <li>
                <a href='https://www.chess.com/play/computer'>PlayChess!</a>
            </li>
            <li>
                <a href='#'>About Us</a>
            </li>
            <li>
                <a href='#'>Contact Us</a>
            </li>
            <li>
                <Link to='/SignIn' className='king'><GiChessKing /></Link>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Nav
