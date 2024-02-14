import Nav_A from "../Nav_bar_A/Nav_A"
import { GiChessKing } from "react-icons/gi"
import {FaLock} from "react-icons/fa"
import { Link } from 'react-router-dom'
import './Login.css'
import axios from 'axios';
import { useState} from 'react';
import {useNavigate} from "react-router-dom";


const Login = () => {

  const navigate=useNavigate();


  const [email,setUsername]=useState("");
  const [password, setPassword] = useState('');
  // const dispatch = useDispatch();
  
  const handleSubmit= async (e)=>{
    e.preventDefault();
    // dispatch(
    //   login({
    //    name:username
    //   })
    //   )
      // navigate('/Home');
  try{
    const response=await axios.post("http://localhost:8080/api/v1/auth/authenticate",{
        email:email ,
        password:password
    });
    console.log(response.data);
      localStorage.setItem("token", response.data.token);
      console.log(localStorage.getItem("token"));
      navigate("/HomeA");
      window.alert("Login Successful.");
  }
catch(error){
    window.alert("Invalid Username or Password !!!");
    console.log(error);
}
  }
  return (
    <div>
      <Nav_A/>
      <div className="wrapper">
        <div className="form-box">
            <h2>Hello Executive!👋</h2>
            <form onSubmit={handleSubmit}>
                <div className="input-box">
                    <GiChessKing className="icon"/>
                    <input className="in" 
            type="text" 
            value={email}
            name="email"
            onChange={(e) => setUsername(e.target.value)} 
            placeholder="Enter your Email" 
            id="username" required/>

                </div>
                <div className="input-box"><FaLock className='icon'/>
                <input className="in" 
            type="password" 
            value={password}
          name="password" 
          onChange={(e) => setPassword(e.target.value)} 
            placeholder="Enter your Password" 
            id="password" required/>
                </div>
                <div className="remember-forget">
                    <label><input type="checkbox"/>Remember me</label>
                    <a href="https://i.pinimg.com/originals/d7/2f/15/d72f1516f1b909cd311e2c3291080995.gif">Forget Password?</a>
                </div>
                <button type="submit">Login</button>
                 <p>Do not have an account<Link to='/Logup'>Register?</Link> </p>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login
