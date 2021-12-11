import logo from './logo.svg';
import './App.css';
import React from "react";
import { Router, Switch, Route, Link, Routes } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Markbook from './pages/Markbook.js';
import Citation from './pages/Citation.js';
import Outliner from './pages/Outliner.js';


const Home = () => {
  return(
  
  <header className="stul-header">
  <header className="top-header">Stul</header>
  <div className="seperator" width="1000px"></div>
  <div className="wrapper">
  
  <Link to="/markbook">
  <button className="btn-simple1" onClick={
    function(e) {

    }
  }>Mark Book</button>
  </Link>

  <Link to="/outliner">
  <button className="btn-simple2" onClick={
    function(e) {

    }
  }>Outliner</button>
  </Link>

  <Link to="/citation">
  <button className="btn-simple3" onClick={
    function(e) {

    }
  }>Citation Machine</button>
  </Link>
  </div>

  <div className="faqc"> Frequently Asked Questions</div>

  <div className="faqc">
  Q: What is Stul Made with?
  </div>

  <div className="faqc">Stul is made with React and Chart.js</div>
  </header>
);
}

function App() {
  return (
    <div className="stul">
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/markbook" element={<Markbook/>}></Route>
        <Route path="/citation" element={<Citation/>}></Route>
        <Route path="/outliner" element={<Outliner/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
