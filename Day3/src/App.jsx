// eslint-disable-next-line no-unused-vars
import React from 'react'
import SignUpPage from './Components/Login/SignUpPage'
import SignInPage from './Components/Login/SignInPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Offers from './Components/Academy/Offers'
// import Role from './Components/SelectRole/Role'
import HomePage from './Components/HomePage/HomePage'


const App = () => {
  return (
    <div>
      {/* <HomePage/> */}
      <BrowserRouter>
        <Routes>
          <Route path='/' exact element={<HomePage/>}/>
          <Route path='/SignUp' element={<SignUpPage/>}/>
          <Route path='/SignIn' element={<SignInPage/>}/>
          <Route path='/Offers' element={<Offers/>}/>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
