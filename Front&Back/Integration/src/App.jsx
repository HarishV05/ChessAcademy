import { BrowserRouter, Route, Routes } from "react-router-dom"
import HomePage_U from './Components/User/Home_User/HomePage_U'
import SignIn_U from './Components/User/SignIn&SignUp/SignIn_U'
import SignUp_U from './Components/User/SignIn&SignUp/SignUp_U'
import Cards from "./Components/User/Cards/Cards"
import Role from "./Components/SelectRole/Role"
import About from "./Components/User/About"
import Login from "./Components/Admin/Login_A/Login"
import Logup from "./Components/Admin/Login_A/Logup"
import Home_A from "./Components/Admin/HomePage_A/Home_A"
import Academy from "./Components/Admin/AddAcademy/Academy"
import RegistrationForm from "./Components/User/RegistrationForm"
import Book from "./Components/User/Book"
import Booked from "./Components/User/Booked"

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Role/>} />
      <Route path="/HomePage" element={<HomePage_U/>} />
      <Route path="/SignIn" element={<SignIn_U/>} />
      <Route path="/SignUp" element={<SignUp_U/>} />
      <Route path="/Cards" element={<Cards/>} />
      <Route path="/About" element={<About/>} />
      <Route path="/Register" element={<RegistrationForm/>} />
      <Route path="/Book" element={<Book/>} />
      <Route path="/Booked" element={<Booked/>} />
      
      <Route path="/HomeA" element={<Home_A />}/>
      <Route path="/Login" element={<Login/>} />
      <Route path="/Logup" element={<Logup/>} />
      <Route path="/Academy" element={<Academy/>}/>

      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
