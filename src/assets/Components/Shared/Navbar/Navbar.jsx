import React from 'react';
import { Link, NavLink } from 'react-router';
import navLogo from '../../../images/logo.png'

const Navbar = () => {
    const links = (
        <>
        <li><NavLink to='/' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2" : "text-black font-bold"}>Home</NavLink></li>
        <li><NavLink to='/apps' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2" : "text-black font-bold"}>Apps</NavLink></li>
        <li><NavLink to='/installation' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2" : "text-black font-bold"}>Installation</NavLink></li>
        <li><NavLink to='/dashboard' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2" : "text-black font-bold"}>Dashboard</NavLink></li>
        </>
    )
    return (
        <div className="navbar bg-base-100 shadow-sm">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 p-2 shadow">
        {
            links
        }
      </ul>
    </div>
    <Link to= '/' className='flex items-center gap-2.5'>
    <img className='w-10' src={navLogo} alt= {navLogo} />
    <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent leading-none text-lg font-bold'>App Store</p>
    </Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 items-center gap-5">
      {
        links
      }
    </ul>
  </div>
  <div className="navbar-end">
    <a className="btn">Button</a>
  </div>
</div>
    );
};

export default Navbar;