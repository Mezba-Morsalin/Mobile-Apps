import React from 'react';
import { Link, NavLink } from 'react-router';
import navLogo from '../../../images/logo.png'
import { FaGithub } from 'react-icons/fa';

const Navbar = () => {
    const links = (
        <>
        <li><NavLink to='/' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2 cursor-pointer" : "text-black font-bold cursor-pointer"}>Home</NavLink></li>
        <li><NavLink to='/apps' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2 cursor-pointer" : "text-black font-bold cursor-pointer"}>Apps</NavLink></li>
        <li><NavLink to='/installation' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2 cursor-pointer" : "text-black font-bold cursor-pointer"}>Installation</NavLink></li>
        <li><NavLink to='/dashboard' className={({isActive})=> isActive ? "bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2 cursor-pointer" : "text-black font-bold cursor-pointer"}>Dashboard</NavLink></li>
        </>
    )
    return (
        <div className='shadow-sm bg-white'>
            <div className="navbar w-11/12 lg:w-10/12 mx-auto">
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
    <p className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent leading-none text-lg font-bold'>Apps Store</p>
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
    <a className=" bg-linear-to-r from-[#632EE3] to-[#9F62F2] font-bold text-white rounded px-4 py-2 cursor-pointer flex items-center gap-3"><FaGithub></FaGithub>Contribute</a>
  </div>
</div>
        </div>
    );
};

export default Navbar;