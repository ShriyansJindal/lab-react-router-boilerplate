
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/about';
import Contact from './Pages/contact';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/contact' element={<Contact/>}/>
    </Routes>

  )
}

export default App
