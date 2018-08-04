import React, { Component } from 'react';
import logo from './logo.svg';
import MenuContainer from './MenuContainer'
import About from './About/About'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
          <MenuContainer />
          <h3 className="App-reacttext">Powered by React</h3>
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Glad you're here.</h1>
          <h3 className="App-desc">Welcome to Aditya's Portfolio.</h3>
        </header>
        
        <p className="App-intro">
          
        </p>
        <About/>
      </div>
    );
  }
}

export default App;
