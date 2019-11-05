import React from 'react';
import logo from './../../assets/images/logoMatch.jpg';
import style from './Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
            <div className={style.logo}>
                <img className={style.logoImg} src={logo} alt="logo"/>
            </div>
            <nav>
                <NavLink to="/matches">Matches</NavLink>
                <NavLink to="/addmatch">AddMatch</NavLink>
                <NavLink to="/news">News</NavLink>
                <NavLink to="/contact">Contact</NavLink>     
            </nav>
        </header>
    )
}

export default Header;