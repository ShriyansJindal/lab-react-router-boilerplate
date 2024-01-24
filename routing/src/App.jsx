
import './App.css'
import { Route, Routes } from 'react-router-dom';
import home from './Pages/Home';
import about from './Pages/About';
import contact from './Pages/Contact';

function App() {

  return (
    
    <Routes>
      <Route path='/' element={<home/>}/>
      <Route path='/about' element={<about/>}/>
      <Route path='/contact' element={<contact/>}/>
    </Routes>

  )
}

export default App
