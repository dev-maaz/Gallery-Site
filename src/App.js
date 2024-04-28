import Navbar from './components/Navbar.js';
import './App.css';
import Gallery from './components/Gallery.js';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home.js';
import Items from './pages/Items.js';
import Contact from './pages/Contact.js';
import Tasks from './pages/Tasks.js';

function App() {
  return ( 
    <>
    
     <div className="App">
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='/items' element={<Items/>} />
         <Route path='/contact' element={<Contact/>} />
         <Route path='/tasks' element={<Tasks/>} />
       </Routes>
     </div>

    </>
  )
}

export default App;
