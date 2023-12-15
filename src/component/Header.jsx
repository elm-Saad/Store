import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { logoutUser } from '../features/user/userSlice'
import { clearCart } from '../features/cart/cartSlice'
import { useQueryClient } from '@tanstack/react-query';


const Header = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const user = useSelector((state) => state.userState.user)
  const queryClient = useQueryClient()


  const handleLogout = () => {
    navigate('/')
    dispatch(clearCart())
    dispatch(logoutUser())
    // remove all queries
    queryClient.removeQueries()

  }
  return (
    <header className=' bg-base-300 py-4 text-base-content '>
      <div className='align-elm flex justify-center sm:justify-end '>
        {user ? (
          <div className='flex gap-x-2 sm:gap-x-8 items-center'>
            <p className='text-xs sm:text-sm'>Hello, {user.username}</p>
            <button
              className='btn btn-sm btn-outline'
              onClick={handleLogout}
            >
              logout
            </button>
          </div>
        ) : (
          <div className='flex select-none justify-center items-center'>
            <div className="dropdown dropdown-hover dropdown-end">
              <div tabIndex={0} role="button" className="m-1">
                Account
              </div>
              <ul tabIndex={0} className="dropdown-content z-[10] menu p-4 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <Link to='/login' className='link link-hover text-xs sm:text-sm'>
                      Sign in / Guest
                    </Link>
                  </li>
                  <li>
                    <Link to='/register' className='link link-hover text-xs sm:text-sm'>
                      Create an Account
                    </Link>
                  </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
export default Header
