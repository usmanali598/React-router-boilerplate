import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { BrowserRouter, Route,Switch } from 'react-router-dom';


import Nav from './component/Nav';

class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav />
      </div>
    );
  }
}

export default App;
