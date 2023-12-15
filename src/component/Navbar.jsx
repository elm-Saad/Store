import { BsCart3, BsMoonFill,BsSunFill} from 'react-icons/bs'
import { FaBarsStaggered } from 'react-icons/fa6'
import { NavLink } from 'react-router-dom'
import NavLinks from './NavLinks'
// import { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { toggleTheme } from '../features/user/userSlice';

// const themes = {
//   light:'light',
//   dark:'dark'
// }
// const handleLocalStorage = () => {
//  return localStorage.getItem('theme') || themes.light
// }
             


const Navbar = ()=>{

  // get the items in the cart number
  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)

  const theme = useSelector((state) => state.userState.theme);

  const isDarkTheme = (theme === 'dark');

  /**
   * way setting the theme on the reducer and not here well 
   * the bug is that the navbar contain in the homeLayout witch dose not have login / logout pages 
   * mens the theme wil not get changed in theme 
   * but using localStorage in the reducer make the theme access on every page 
   */
  // const [Theme,setTheme] = useState(handleLocalStorage())

  // const ChangeTheme = () =>{
  //   const {light,dark} = themes
  //   const newTheme = (Theme === light) ? dark : light
  //   setTheme(newTheme)
  // }

  // useEffect(()=>{
  //   document.documentElement.setAttribute('data-theme', Theme)
  //   localStorage.setItem('theme',Theme)
  // },[Theme])

    const dispatch = useDispatch()
    const ChangeTheme = () => {
      dispatch(toggleTheme())
    }


  return <nav className='bg-base-200'>
    <div className='navbar align-elm '>
      <div className='navbar-start'>
        {/* Title */}
        <NavLink
          to='/'
          className='hidden lg:flex btn btn-primary text-3xl items-center '
        >
          S
        </NavLink>
        {/* DROPDOWN */}
        <div className='dropdown'>
          <label tabIndex={0} className='btn btn-ghost lg:hidden'>
            <FaBarsStaggered className='h-6 w-6' />
          </label>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-200 rounded-box w-52'
          >
            <NavLinks />
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal '>
          <NavLinks />
        </ul>
      </div>
      <div className='navbar-end'>
        {/* THEME ICONS */}
        <label className='swap swap-rotate '>
          {/* this hidden checkbox controls the state */}
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
      </div>
    </div>
  </nav>

}

export default Navbar