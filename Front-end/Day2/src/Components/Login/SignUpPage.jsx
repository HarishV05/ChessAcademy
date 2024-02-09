import { GiChessKing } from "react-icons/gi";
import { IoIosMail } from "react-icons/io";
import { MdOutlinePassword } from "react-icons/md";
import './SignUpPage.css'
import Nav from "../Navbar/Nav";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  const HandleSubmit=() =>{
    <script>
        function msg(){
          alert("Registration Successfull!")
        }
        </script>
  }
  return (
    <div>
            <Nav/>
    <div className='wrapper'>
      <form action="">
        <h1>Hey New Broskii!!</h1>
        <br></br>
        <label form="Role">Choose a Role:</label>
  <select name="Role" id="Role">
    <option value="Admin">Admin</option>
    <option value="Competitor">Competitor</option>
  </select>
        <div className='input-box'>
        <GiChessKing className="icon" />
          <input type='text' placeholder='FirstName' required />
        </div>
        <div className='input-box'><IoIosMail  className="icon" />

          <input type='text' placeholder='Email Id' required />
        </div>
        
        <div className='input-box'>
        <MdOutlinePassword  className="icon" />
          <input type='password' placeholder='Password' required />
        </div>
        <div className='input-box'><MdOutlinePassword className="icon" />

          <input type='password' placeholder='Confirm-Password' required />
        </div>
        <button type='submit' onClick={HandleSubmit}><Link to='/SignIn' >SignIn</Link></button>
        <div className='register-link'></div>
        <br></br>
          <p>Already have an account?<Link to='/SignIn'>Login</Link></p>
      </form>
    </div>
    </div>
  )
}

export default SignUpPage
