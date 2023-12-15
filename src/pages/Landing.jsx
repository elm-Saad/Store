import { Link } from "react-router-dom"
import { Hero,FeaturedProducts ,TopCollections} from "../component"

import { customFetch } from "../utils"

import image from '../assets/main.webp'

const url = '/products?featured=true'

const featuredProductsQuery = {
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url),
}
  
export const loader = (queryClient) => async () => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery)
    const products = response.data.data
    return { products }
}


const Landing = ()=>{
    return <>
        <Hero />
        <TopCollections />
        <article>
            <section className="mt-24 w-full h-[40rem] relative text-white">
            <img src={image} alt="" className="h-full w-full object-none rounded-lg " />

            <div className="absolute top-1/2 left-8 -translate-y-1/2 text-center sm:text-start">
                <h2 className="text-2xl font-bold my-2">HURRY UP!</h2>
                <p className="text-2xl font-bold my-2 opacity-50">HOT DEAL! SALE 40% EXTRA OFF</p>
                <Link 
                    to={'/products/6'}
                    className="btn btn-primary uppercase my-4"
                >
                    Order Now
                </Link>
            </div>
            </section>
            <section className="flex flex-col md:flex-row gap-8 justify-around items-center p-4 mt-12">
                <div>
                    <h2 className="text-2xl font-semibold">Sign Up For Our Newsletter</h2>
                    <p>and get the latest new first</p>
                </div>
                <div className="join">
                    <input className="input input-bordered join-item" type="email" placeholder="Email"/>
                    <button className="btn join-item rounded-r-full">Subscribe</button>
                </div>
            </section>
        </article>
    </>
}


export default Landing