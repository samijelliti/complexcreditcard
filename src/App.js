import React, { Component } from 'react';
import blue from './blue.jpg';
import mcvisa from './mcvisa.png';
import puce from './puce.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="maincard">
        <p className="title1">CREDIT CARD</p>
        <img className="puce" src={puce}/>
        <div className="numcard">
            <p>7865 6543 1234 0987</p>
        </div>
        <div className="valid">
            <div className="valid1">
                <p>5422</p>
                <p>Valid <br/>Thru</p>

            </div>
            <div>
                <p>MONTH/YEAR<br/>11/05</p>

            </div>
            <img className="mastercard" src={mcvisa}/>
        </div>
        <p className="title2">CARDHOLDER</p>

    </div>
    

        
      </div>
    );
  }
}

export default App;
