import { Link } from "react-router-dom"
import Knight from '../Nav_bar_A/Knights1.png'
import { GiChessKing } from "react-icons/gi";
import './Nav_A.css'

const Nav_A = () => {
  return (
    <header>
        <nav className='navigation'>
            <Link to="/HomeA" className="main-logo">
                <div className="KnightsQuest">
                    <img src={Knight} alt="logo1" width='100px' />
                </div>
            </Link>
            <ul>
            <li>
                <Link to="/Academy">Add Academy</Link>
            </li>

            <li>
                <a href='#'>Edit Competitor</a>
            </li>
            <li>
                <Link to="/About">About</Link>
            </li>
            <li>
                <Link to='/'>Role?</Link>
            </li>
            <li className='king'>
            <Link to="/Login"><button className="king1" ><GiChessKing/>Login</button></Link>
            
            </li>
        </ul>
        </nav>
    </header>
  )
}

export default Nav_A
