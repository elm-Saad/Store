import ProductsGrid from "./ProductsGrid"
import SectionTitle from "./SectionTitle"

const TopCollections = () => {
    return  <div className='pt-24 '>
    <SectionTitle text='Top Collections' center={true} />
    <ProductsGrid />
  </div>
}
export default TopCollections

