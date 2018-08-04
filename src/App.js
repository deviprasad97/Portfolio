import React, { Component } from 'react';
import logo from './logo.svg';
import MenuContainer from './MenuContainer'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        <h3>Powered by React</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <MenuContainer />
          <h1 className="App-title">I am student at University of Texas at Arlington</h1>
        </header>
        
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
