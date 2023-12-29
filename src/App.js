import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home/home.js';
import About from './About/about.js';
import Learn from './Learn/learn.js';
import Merch from './Merch/merch.js';
import Navbar from './Navigation/Navbar.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "@fontsource/gothic-a1"; // Defaults to weight 400
import "@fontsource/gothic-a1/700.css"; // Specify weight
import insta from './assets/insta.svg';
import tiktok from './assets/tiktok.svg';
import linkedin from './assets/linkedin.svg';

function App() {
  return (
    <Router>
      <Navbar/>
      <div style={{marginBottom: "30px"}}></div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/learn' element={<Learn />} />
        <Route path='/merch' element={<Merch />} />
      </Routes>
      <div style={{textAlign:"center",backgroundColor:"#b6ffbd",color:"black",borderTop:"1px solid black"}}>
          <p style={{paddingTop:"20px"}}>&#169; 2023 Yewniik Friends</p>
          <div style={{paddingBottom:"20px", display: "flex", justifyContent: "center"}} class="logos">
              <div style={{paddingRight: "15px"}}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/alychoi123/">
                  <img src={insta} width="45px"></img>
                </a>
              </div>
              <div style={{paddingRight: "10px"}}>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/alyssa-choi-9b47a7198/">
                  <img src={tiktok} width="38px"></img>
                </a>
              </div>
              <div style={{marginTop: "-5px"}}>
                <a target="_blank" rel="noopener noreferrer" href="https://github.com/alychoi">
                  <img src={linkedin} width="53px"></img>
                </a>
              </div>
          </div>
      </div>
    </Router>
  );
}

export default App;
