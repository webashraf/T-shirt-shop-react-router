import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <nav className='font-bold flex gap-5 justify-center'>
            <NavLink to={'/'} className={({isActive}) => isActive ? "border-3 border-red-300" : ""}>Home</NavLink>
            <NavLink to={'/about'} className={({isActive}) => isActive ? "border-3 border-red-300" : ""}>About</NavLink>
            <NavLink to={'/ shop'} className={({isActive}) => isActive ? "border-3 border-red-300" : ""}>Shop </NavLink>
            <NavLink to={'/order'} className={({isActive}) => isActive ? "border-3 border-red-300" : ""}>Order</NavLink>
            <NavLink to={'/login'} className={({isActive}) => isActive ? "border-3 border-red-300" : ""}>Login</NavLink>
            
        </nav>
    );
};

export default Header;