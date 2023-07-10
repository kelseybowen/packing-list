import './App.css';
import Navbar from './components/Navbar';
import TripForm from './components/TripForm';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Index from './views/Index';
import { useState } from 'react';

function App() {

  const [criteria, setCriteria] = useState({});
  
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
