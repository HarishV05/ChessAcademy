import { GiChessKing } from "react-icons/gi";
import { FaLock } from "react-icons/fa";
import './SignInPage.css';
import {Link} from 'react-router-dom';
import Nav from "../Navbar/Nav";
import Role from "../SelectRole/Role";
// import SignUpPage from "./SignUpPage";
const SignInPage = () => {
  return (
    <div >
      <Nav/>
      <br></br>
    <div className='wrapper'>
      <Role/>
      <form action="">
        <h1>Login into Chess_Academy</h1>
        <div className='input-box'>
        <GiChessKing className="icon" />
          <input type='text' placeholder='Username' required />
        </div>
        <div className='input-box'><FaLock className="icon" />

          <input type='password' placeholder='Password' required />
        </div>
        <div className='remember-forgot'>
          <label><input type='checkbox'/>Remember me</label>
          <a href='#'>Forget Password</a>
        </div>
        <button type='submit'>Login</button>
        <div className='register-link'></div>
          <p>Do not have an account?<Link to='/SignUp'>Register</Link></p>
      </form>
    </div>
    </div>
  )
}

export default SignInPage;