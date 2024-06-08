import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import "./App.css";
import Experience from './components/pages/Experience/Experience';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/muhammed-als/" element={<Home/>} />
          <Route path="/muhammed-als/about" element={<About/>} />
          <Route path="/muhammed-als/skills" element={<Experience/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
