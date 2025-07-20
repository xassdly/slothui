import { useState } from 'react';
import './App.css';
import { UserModel } from './models/UserModel';
import Navbar from './components/navbar/Navbar';
import Rightpanel from './components/rightpanel/Rightpanel';
import Home from './pages/home/Home';
import Signin from './pages/auth/Signin';

import avatar from './assets/avatars/a10.png';


function App() {
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  const mainUser = new UserModel(0, "Anya", avatar)

  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <>
      {isLoggedIn ? (
        <div className='main'>
          <Navbar mainUser={mainUser} isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={() => setIsLoggedIn(false)}/>
          <Home mainUser={mainUser} openRightPanel={() => setIsRightOpen(true)} openLeftMenu={() => setIsLeftOpen(true)}/>
          <Rightpanel mainUser={mainUser} isOpen={isRightOpen} onClose={() => setIsRightOpen(false)}/>
        </div>
      ) : (
        <Signin />
      )}  
    </>
  )
}

export default App
