import { useSelector } from 'react-redux'
import { CartItemsList, SectionTitle, CartTotals } from '../component'
import { Link } from 'react-router-dom'
import VoidImg from '../assets/void.svg'

const Cart = () => {
  // temp
  const { user } = useSelector((state) => state.userState)

  const numItemsInCart = useSelector((state) => state.cartState.numItemsInCart)
  if (numItemsInCart === 0) {
    return <section className='min-h-[22rem]'>
      <SectionTitle text='Your cart is empty' />
      <p className='min-h-[20rem] flex items-center justify-center'>
        <img src={VoidImg} alt="Void" className='h-[15rem] object-cover' /> 
      </p>
    </section>
  }
  return (
    <>
      <SectionTitle text='Shopping Cart' />
      <div className='mt-8 grid gap-8  lg:grid-cols-12 min-h-[25rem]'>
        <div className='lg:col-span-8'>
          <CartItemsList />
        </div>
        <div className='lg:col-span-4 lg:pl-4'>
          <CartTotals />
          {user ? (
            <Link to='/checkout' className='btn btn-primary btn-block mt-8'>
              Proceed to checkout
            </Link>
          ) : (
            <Link to='/login' className='btn btn-primary btn-block mt-8'>
              please login
            </Link>
          )}
        </div>
      </div>
    </>
  )
}
export default Cart