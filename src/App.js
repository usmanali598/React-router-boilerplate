import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import Contact from './component/Contact';
import Error from './component/Error';
import Nav from './component/Nav';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="Ap">
       <Nav />
        <Switch>
          <Route path='/' component={Home} exact />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
          <Route component={Error} />
        </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
