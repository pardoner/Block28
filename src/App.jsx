import './index.css'
import './App.css'
import { Routes, Route, Link } from "react-router-dom";
import Blue from './components/Blue';
import Red from './components/Red';
import Home from './components/Home';
import Yellow from './components/yellow';
import Green from './components/green';

function App() {

  return (
    <div id="container">
    <div id="navbar">
      <Link to="/blue">Blue</Link>
      <Link to="/green">Green</Link>
      <Link to="/">Home</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/red">Red</Link>
    </div>
    <div id="main-section">
    <Routes>
     <Route path="/blue" element={<Blue/>} />
     <Route path="/green" element={<Green/>} />
     <Route path="/" element={<Home/>} />
     <Route path="/yellow" element={<Yellow/>} />
     <Route path="/red" element={<Red/>} />
   </Routes>
    </div>
    <div className="footer">
      <Link to="/blue">Blue</Link>
      <Link to="/green">Green</Link>
      <Link to="/">Home</Link>
      <Link to="/yellow">Yellow</Link>
      <Link to="/red">Red</Link>
    </div>
  </div>
  )
}

export default App