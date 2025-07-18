import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Rightpanel from './components/rightpanel/Rightpanel';
import Home from './pages/home/Home';

function App() {  
  const [isRightOpen, setIsRightOpen] = useState(false);

  return (
    <div className='main'>
      <Navbar />
      <Home openRightPanel={() => setIsRightOpen(true)}/>
      <Rightpanel isOpen={isRightOpen} onClose={() => setIsRightOpen(false)}/>
    </div>
    

  )
}

export default App
