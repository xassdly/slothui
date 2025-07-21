import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import { UserModel } from './models/UserModel';
import Navbar from './components/navbar/Navbar';
import Rightpanel from './components/rightpanel/Rightpanel';
import Home from './pages/home/Home';
import Signin from './pages/auth/Signin/Signin';

import avatar from './assets/avatars/a10.png';
import Reset from './pages/auth/Reset/Reset';
import Signup from './pages/auth/Signup/Signup';


function App() {
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  const mainUser = new UserModel(0, "Anya", avatar)

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Routes>
      <Route path='/signin' element={<Signin setIsLoggedIn={setIsLoggedIn}/>}/>

      <Route path='/' element={
        isLoggedIn ? (
          <div className='main'>
            <Navbar mainUser={mainUser} isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={() => setIsLoggedIn(false)}/>
            <Home mainUser={mainUser} openRightPanel={() => setIsRightOpen(true)} openLeftMenu={() => setIsLeftOpen(true)}/>
            <Rightpanel mainUser={mainUser} isOpen={isRightOpen} onClose={() => setIsRightOpen(false)}/>
          </div>
        ) : (
          <Navigate to="/signin"/>
        ) 
      }/>

      <Route path='/reset' element={<Reset />} />
      <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />

    </Routes>
  )
}

export default App
