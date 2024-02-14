import Nav_A from "../Nav_bar_A/Nav_A"
import { GiChessKing } from "react-icons/gi"
import { IoIosMail } from "react-icons/io"
import { MdOutlinePassword } from "react-icons/md"
import { Link } from "react-router-dom"
// import { Link } from "react-router-dom"

const Logup = () => {
  return (
    <div>
      <Nav_A/>
      <div className="wrapper">
        <form action="">
            <h1>Hey New Executive!!</h1>
            <div className="input-box">
                <GiChessKing className='icon'/>
                <input type="text" placeholder="UserName" required />
            </div>
            <div className="input-box">
                <IoIosMail className='icon'/>
                <input type="text" placeholder="EmailId" required />
            </div>
            <div className="input-box">
                <MdOutlinePassword className='icon'/>
                <input type="password" placeholder="Password" required />
            </div>
            <button type="submit">SignIn</button>
            <br></br>
            <p> Already have an account? <Link to='/Login'>Login</Link></p>
        </form>
      </div>
    </div>
  )
}

export default Logup
