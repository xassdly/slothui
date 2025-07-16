import './App.css'
import Navbar from './components/navbar/Navbar'
import Rightpanel from './components/rightpanel/Rightpanel'
import Home from './pages/home/Home'

function App() {    

  return (
    <div className='main'>
      <Navbar />
      <Home />
      <Rightpanel />
    </div>
    

  )
}

export default App
