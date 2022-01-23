import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import { MenuItems }  from "./MenuItems";
import { GrMonitor } from "react-icons/gr";
import { Link } from "react-router-dom";
import './Navbar.css';
export class Navbar extends Component {
    // static propTypes = {
    // }

    render() {
        return (
            <div>
                <nav className="NavbarItems fixed-top">
                <div className="menu-icon"><GrMonitor/></div>
                <h1 className="navbar-logo">NewsFinder</h1>
                    <ul className="my-items">
                        {MenuItems.map((item,index)=>{
                            return(
                                <li key={`${item.url}`}><Link className={`${item.cName} nav-ele`} to={item.url}>{item.title}</Link></li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        )
    }
}

export default Navbar
