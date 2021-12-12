import logo from './logo.svg';
import './App.css';
import React from "react";
import { Router, Switch, Route, Link, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Markbook from './pages/Markbook.js';
import Outliner from './pages/Outliner.js';


const Home = () => {
  return(
  
  <header className="stul-header">
  <header className="top-header">Stul  </header>
  <div className="seperator" width="1000px"></div>
  <div className="wrapper">
  
  <Link to="/markbook">
  <button className="btn-simple1" onClick={
    function(e) {

    }
  }>Mark Book</button>
  </Link>
  </div>

  <div className="faqc"> This was made for the IRHS Hackathon</div>

  <div className="faqc">
    Thank you for visiting!
  </div>
  </header>
);
}

function App() {
  return (
    <div className="stul">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/markbook" element={<Markbook/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
