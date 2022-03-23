import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route}
    from 'react-router-dom';
import About from './pages/about';
import Import from './pages/import';
import TryOn from './pages/tryon';
import Wardrobe from './pages/wardrobe';

function App() {
return (
    <Router>
    <Navbar />
    <Routes>
        <Route path='/about' element={<About/>} />
        <Route path='/import' element={<Import/>} />
        <Route path='/tryon' element={<TryOn/>} />
        <Route path='/wardrobe' element={<Wardrobe/>} />
    </Routes>
    </Router>
);
}
export default App;