import {useEffect, useState} from 'react'
import {FaQuoteRight} from 'react-icons/fa'
import {FiChevronLeft,FiChevronRight} from 'react-icons/fi'

import hero1 from '../assets/hero_1.webp'
import hero2 from '../assets/hero_.webp'
import hero3 from '../assets/hero_3.webp'
import hero4 from '../assets/hero4.webp'

const list = [
  {
    id: 1,
    image: hero1,
    alt:'1'
  },
  {
    id: 2,
    image: hero2,
    alt:'2'
  },
  {
    id: 3,
    image: hero3,
    alt:'3'
  }
]
const Carousel = () => {
  const [ListData,setListData] = useState(list)
  const [currentItem,setCurrentItem] = useState(2)

  const nextSide = () =>{
    setCurrentItem( (prev) =>{
      return (prev + 1) % (ListData.length)
    })

  }
  const prevSlide = () => {
    setCurrentItem( (prev) =>{
      return (prev - 1 + ListData.length) % (ListData.length)
    })
  }

  useEffect(()=>{
    let intervalId = setInterval(()=>{
      nextSide()
    },4000)

    return ()=>{
      clearInterval(intervalId)
    }
  },[currentItem])

  return(
    <div className='select-none w-full h-full flex items-center justify-center '>
      <section className='relative w-full h-full overflow-hidden'>
        {ListData.map((item,index) =>{
          return <div 
          key={item.id}
          className='absolute top-0 left-0 w-full h-full transition duration-1000'
          style={{
            transform:`translateX(${100*(index - currentItem)}%)`,
            opacity:(index === currentItem)?'1':'0'
          }}
        >
          <div className='relative h-full w-full'>
              <img src={item.image} alt={item.alt} className='w-full h-full bg-cover' />
              
              <button 
                className='p-1 absolute left-4 top-1/2 transition bg-white opacity-50 hover:opacity-70  text-black rounded-full'
                onClick={()=>prevSlide()}
              >
              <FiChevronLeft className='w-6 h-6 ' />
              </button>
              <button 
                className='p-1 absolute right-4 top-1/2 transition bg-white opacity-50 hover:opacity-70 text-black rounded-full'
                onClick={()=>nextSide()}

              >
              <FiChevronRight className='w-6 h-6'/>
              </button>
          </div>
        </div>
        })}
      </section>
    </div>
  )
}
export default Carousel