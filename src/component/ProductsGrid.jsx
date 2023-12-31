import { Link, useLoaderData } from 'react-router-dom'
import { formatPrice } from '../utils'


const ProductsGrid = ({TopCollections=false}) => {
    // cause its part of the landing page witch hold the loader 
  const { products } = useLoaderData()

  return (
    <div className='pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3 '>
      {products.map((product) => {
        const { title, price, image } = product.attributes
        const dollarsAmount = formatPrice(price)
        let id = TopCollections ? (product.id + 1) : product.id
        console.log(TopCollections)
        console.log(title,id,product.id)
        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className='card w-full shadow-xl hover:shadow-2xl transition duration-300 group '
          >
            <figure className='px-4 pt-4'>
              <img
                src={image}
                alt={title}
                className='rounded-xl h-64 md:h-48 w-full object-cover group-hover:scale-105 transition-all duration-300'
              />
            </figure>
            <div className='card-body items-center text-center'>
              <h2 className='card-title capitalize tracking-wider'>{title}</h2>
              <span className='text-secondary'>{dollarsAmount}</span>
            </div>
          </Link>
        )
      })}
    </div>
  )
}
export default ProductsGrid