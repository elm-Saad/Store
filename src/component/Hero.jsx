import { Link } from 'react-router-dom'

import Carousel from './Carousel'


const Hero = () => {
    return (
        <div className=' grid grid-cols-1 items-center -mt-12'>
          <div className='h-[30rem] bg-green-200 p-1 w-full space-x-4'>
            <Carousel />
          </div>
        </div>
    )
}

export default Hero