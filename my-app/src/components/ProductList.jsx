import React from 'react'
import ProductBox from './ProductBox'

const ProductList = ({products}) => {
  return (
     <div className="products-grid">

       {
        products.length > 0 &&
        products.map((product) => (
            <ProductBox product={product} key={product.id}/>
        ))
       }
     </div>
  )
}

export default ProductList