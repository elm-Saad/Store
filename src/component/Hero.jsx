import { Link } from 'react-router-dom'

import Carousel from './Carousel'

const Hero = () => {
    return (
        <div className=' grid grid-cols-1 items-center -mt-4'>
          <div className='relative h-[30rem] w-full space-x-4'>
            <Carousel />
            <div className='absolute top-1/2 left-8 -translate-y-1/2 text-center sm:text-start'>
              <h1 className='text-gray-700 max-w-xl text-4xl font-bold tracking-tight  sm:text-6xl'>
                We’re changing the way people shop.
              </h1>
  
              <div className='mt-14 '>
                <Link to='/products' className='btn btn-primary '>
                  Our Products
                </Link>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Hero