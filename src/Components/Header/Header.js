import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import './Header.css';

const Header = () => {
    const navigate = useNavigate();
    return (
        <nav className='flex justify-between items-center p-2 md:py-6 md:px-8 md:text-xl font-semibold'>
            <button onClick={()=>navigate('/home')} className='font-semibold text-xl md:text-3xl text-emerald-600'>Good Readers</button>
            <div className='flex gap-2 md:gap-8 text-indigo-400'>
                <NavLink to='/home'>Home</NavLink>
                <NavLink to='/reviews'>Reviews</NavLink>
                <NavLink to='dash-board'>DashBoard</NavLink>
                <NavLink to='/blogs'>Blogs</NavLink>
                <NavLink to='/reach-us'>Reach Us</NavLink>
            </div>
        </nav>
    );
};

export default Header;