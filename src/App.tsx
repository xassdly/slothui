import './App.css';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Rightpanel from './components/rightpanel/Rightpanel';
import Home from './pages/home/Home';
import Signin from './pages/auth/Signin/Signin';


import Reset from './pages/auth/Reset/Reset';
import Signup from './pages/auth/Signup/Signup';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import { UserProvider } from './contexts/UserContext';


function App() {
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  // const mainUser = new UserModel(0, "Anya", avatar)

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <UserProvider>
      <Routes>
        <Route path='/signin' element={<Signin setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path='/' element={
          isLoggedIn ? (
            <div className='main'>
              <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={() => setIsLoggedIn(false)}/>
              <Home openRightPanel={() => setIsRightOpen(true)} openLeftMenu={() => setIsLeftOpen(true)}/>
              <Rightpanel isOpen={isRightOpen} onClose={() => setIsRightOpen(false)}/>
            </div>
          ) : (
            <Navigate to="/signin"/>
          ) 
        }/>

        <Route path='/reset' element={<Reset />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/settings' element={<Settings />}/>

      </Routes>
    </UserProvider>
  )
}

export default App
