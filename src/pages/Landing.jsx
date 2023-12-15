import { Hero,FeaturedProducts ,TopCollections} from "../component"

import { customFetch } from "../utils"

const url = '/products?featured=true'

const featuredProductsQuery = {
    queryKey: ['featuredProducts'],
    queryFn: () => customFetch(url),
}
  
export const loader = (queryClient) => async () => {
    const response = await queryClient.ensureQueryData(featuredProductsQuery)
    const products = response.data.data;
    return { products }
}

const Landing = ()=>{
    return <>
        <Hero />
        <TopCollections />
        <FeaturedProducts />
    </>
}


export default Landing