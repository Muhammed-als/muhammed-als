import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import "./App.css";
import Experience from './components/pages/Experience/Experience';
import CustomLink from './components/pages/Experience/CustomLink';
import Projects from './components/pages/projects/Projects';
import SelectedProject from './components/pages/projects/SelectedProject';

function App() {

  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Routes>
          <Route path="/muhammed-als/" element={<Home/>} />
          <Route path="/muhammed-als/about" element={<About/>} />
          <Route path="/muhammed-als/skills/" element={<Experience/>} />
          <Route path="/muhammed-als/skills/:id/:name" element={<CustomLink />} />
          <Route path="/muhammed-als/projects/" element={<Projects />} />
          <Route path="/muhammed-als/projects/:id/:name" element={<SelectedProject/>} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
