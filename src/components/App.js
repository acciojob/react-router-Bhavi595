
import React from "react";
import './../styles/App.css';
import { Route , Routes } from "react-router-dom";
import { NavLink } from "react-router-dom";
import About from "./About";
import Home from "./Home";

const App = () => {
  return (
    <div>
      <ul>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="about">About</NavLink></li>
      </ul>

      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        
      </Routes>
    </div>
  )
}

export default App
