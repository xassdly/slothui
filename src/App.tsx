import './App.css';
import './pages/auth/GlobalAuthStyle.css';
import { useState } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Rightpanel from './components/Rightpanel/Rightpanel';
import Home from './pages/home/Home';
import Signin from './pages/auth/Signin/Signin';
import Support from './pages/support/Support';
import Subscription from './pages/subscription/Subscription';
import Friends from './pages/friends/Friends';

import Reset from './pages/auth/Reset/Reset';
import Signup from './pages/auth/Signup/Signup';
import Profile from './pages/profile/Profile';
import Settings from './pages/settings/Settings';
import { UserProvider } from './contexts/UserContext/UserContext';
import Notifications from './pages/notifications/Notifications';
import Chats from './pages/chats/Chats';


function App() {
  const [isRightOpen, setIsRightOpen] = useState(false);
  const [isLeftOpen, setIsLeftOpen] = useState(false);

  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLeftOpen(false);
    navigate('/signin');
  }

  return (
    <UserProvider>
      <Routes>
        <Route path='/signin' element={<Signin setIsLoggedIn={setIsLoggedIn}/>}/>

        <Route path='/' element={
          isLoggedIn ? (
            <div className='main'>
              <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
              <Home openRightPanel={() => setIsRightOpen(true)} openLeftMenu={() => setIsLeftOpen(true)}/>
              <Rightpanel isOpen={isRightOpen} onClose={() => setIsRightOpen(false)}/>
            </div>
          ) : (
            <Navigate to="/signin"/>
          ) 
        }/>

        <Route path='/reset' element={<Reset />} />
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}/>} />

        <Route path='/profile' element={
          <div className='profile__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Profile />
          </div>
        }/>
        <Route path='/settings' element={
          <div className='settings__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Settings />
          </div>  
        }/>
        <Route path='/subscription' element={
          <div className='subscription__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Subscription />
          </div>  
        }/>
        <Route path='/support' element={
          <div className='support__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Support />
          </div>  
        }/>
        <Route path='/friends' element={
          <div className='support__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Friends />
          </div>  
        }/>
        <Route path='/notifications' element={
          <div className='notifications__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Notifications />
          </div>  
        }/>
        <Route path='/chats' element={
          <div className='notifications__main'>
            <Navbar isOpen={isLeftOpen} onClose={() => setIsLeftOpen(false)} handleLogout={handleLogout}/>
            <Chats />
          </div>  
        }/>

      </Routes>
    </UserProvider>
  )
}

export default App
