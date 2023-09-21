import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio';

import Nopages from './components/Nopages';

function App() {
  return (

    <BrowserRouter>
      <Navbar />
     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/about" element={<About />} />
       <Route path="/portfolio" element={<Portfolio />} />
       <Route path="/contact" element={<Contact />} />
       <Route path="/*" element={<Nopages />} />
     </Routes>
    </BrowserRouter>
  );
}

export default App;
