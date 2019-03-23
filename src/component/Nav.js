import React, {Component} from 'react'
import {NavLink } from 'react-router-dom';


class Nav extends Component
{
    render(){
        return (
            <nav className='nav-wrapper red darken-3'>
                <div className="nav-wrapper red">
                    <a href="#" className="brand-logo">Router Basics</a>
                    <ul id="nav-mobile" className="right hide-on-med-and-down">
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