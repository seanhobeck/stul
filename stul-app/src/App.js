import logo from './logo.svg';
import './App.css';
import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


const Citation = () => (
  <div>
    <h2>Citation</h2>
  </div>
);


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

          <Routes exact path="/citation" component={Citation}>
          <button className="btn-simple3" onClick={
            function(e) {

            }
          }>Citation Machine</button>
          </Routes>
        </div>
        
        <div className="faqc"> Frequently Asked Questions</div>

        <div className="faqc">
          Q: What is Stul Made with?
        </div>

        <div className="faqc">Stul is made with React and Chart.js</div>
      </header>
    </div>
  );
}

export default App;
