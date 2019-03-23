import React, {Component} from 'react'
// import 'antd/dist/antd.css';
// import './index.css';
import {NavLink } from 'react-router-dom';


class Nav extends Component
{
    render(){
        return (
            <nav>
    <div class="nav-wrapper">
      {/* <a href="#" class="brand-logo">Logo</a> */}
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/about'>About</NavLink></li>
        <li><NavLink to='/contact'>Contact</NavLink></li>
      </ul>
    </div>
  </nav>
        )
    }
}

export default Nav;