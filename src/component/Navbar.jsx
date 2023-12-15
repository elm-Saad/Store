import { BsCart3, BsMoonFill,BsSunFill} from 'react-icons/bs'
import { FaBars } from "react-icons/fa6"
import { IoStorefront } from "react-icons/io5";

import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
// import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';


const Navbar = ()=>{

  // get the items in the cart number
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  const theme = useSelector((state) => state.userState.theme);

  const isDarkTheme = (theme === 'dark');

    const dispatch = useDispatch()
    const ChangeTheme = () => {
      dispatch(toggleTheme())
    }


  return <nav className='bg-base-200 py-2'>
    <div className='navbar align-elm '>
      <div className='navbar-start'>
        {/* Title */}
        <NavLink
          to='/'
          className='flex text-4xl items-center  rounded-full p-2'
        >
          <IoStorefront className=' text-primary'/>
        </NavLink>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal gap-4'>
          <NavLinks />
        </ul>
      </div>
      <div className='navbar-end gap-2'>
        {/* THEME ICONS */}
        <label className='swap swap-rotate '>
          <input type='checkbox' onChange={ChangeTheme} defaultChecked={!isDarkTheme}/>
          {/* sun icon */}
          <BsSunFill className='swap-on h-4 w-4' />

          {/* moon icon */}
          <BsMoonFill className='swap-off h-4 w-4' />
        </label>
        {/* CART LINK*/}
        <NavLink to='cart' className='btn btn-ghost btn-circle btn-md ml-4'>
          <div className='indicator'>
            <BsCart3 className='h-6 w-6' />
            <span className='badge badge-sm badge-primary indicator-item'>
              {numItemsInCart}
            </span>
          </div>
        </NavLink>
         {/* DROPDOWN */}
         <div className='dropdown dropdown-end'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <FaBars className='h-6 w-6' />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow bg-base-200 rounded-box w-72'
          >
            <NavLinks />
          </ul>
        </div>
      </div>
    </div>
  </nav>

}

export default Navbar