
import ProductList from './ProductList'





const LatestProducts = async() => {

  const res = await fetch('http://localhost:3000/api/products')

  const products = await res.json()

 

  return (
    <div className="new-products">
        <h2 className="title">محصولات پر فروش</h2>

        <ProductList products = {products}/>
    </div>
  )
}

export default LatestProducts