import React from 'react';
import { NavLink } from 'react-router-dom';
import avator from '../img/profile.jpg';

const NavBar = () => {
    return (
            <div className="NavBar">
                <nav className="nav">
                    <div className="profile">
                        <img src={avator} alt=""/>
                    </div>
                    <ul className="nav-items">
                        <li className="nav-item">
                            <NavLink to='/' exact activeClassName='active'>
                                Home
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/about' exact activeClassName='active'>
                                About
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/protfolios' exact activeClassName='active'>
                                Protfolios
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/blogs' exact activeClassName='active'>
                                Blogs
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to='/contact' exact activeClassName='active'>
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                    <footer className="footer">
                        <p>Created in @2021</p>
                    </footer>
                </nav>
            </div>
    );
};

export default NavBar;