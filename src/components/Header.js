import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => (
    <header>
        <h1>Expensify</h1>
        <p>
            <NavLink to="/" activeClassName='is-active' exact={true} >Home  </NavLink>  
            <NavLink to="/create" activeClassName='is-active'>Create  </NavLink>  
            <NavLink to="/help" activeClassName='is-active'>Help  </NavLink>  
        </p> 
    </header>
);

export default Header;