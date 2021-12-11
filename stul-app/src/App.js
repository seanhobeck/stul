import logo from './logo.svg';
import './App.css';
import React from "react";
import { Router, Switch, Route } from 'react-router-dom';
import ReactDOM from 'react-dom';

import Markbook from './pages/Markbook.js';
import Outliner from './pages/Outliner.js';
import Citation from './pages/Citation.js';



function App() {
  return (
    <div className="stul">
      <header className="stul-header">
          <header className="top-header">Stul</header>
          <div className="seperator" width="1000px"></div>
          <div className="wrapper">
          <button className="btn-simple1" onClick={
            function(e) {

            }
          }>Mark Book</button>

          <button className="btn-simple2" onClick={
            function(e) {

            }
          }>Outliner</button>

          <Markbook/>

          <button className="btn-simple3" onClick={
            function(e) {

            }
          }>Citation Machine</button>
          </div>
        
          <div className="faqc"> Frequently Asked Questions</div>

          <div className="faqc">
          Q: What is Stul Made with?
          </div>

          <div className="faqc">Stul is made with React and Chart.js</div>
        </header>

        <Route path="/markbook" component={Markbook}/>
      </div>
  );
}

export default App;
