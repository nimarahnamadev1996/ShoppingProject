'use client'

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'



import { enTofa } from '@/utils/Utilities'
import { useGlobalContext } from '@/contexts/CartContext'


const ProductBox = ({product}) => {

    const {addToCart} = useGlobalContext()

  return (
    <div className="product-wrapper">

    <Link href={`/products/${product._id}`} >
        <div className="product-image-box">
            <Image width={150} height={150} src={product.image} alt={product.title}/>
        </div>
    </Link>
    
    <div className="product-info-box">
        <Link href={`/products/${product._id}`} >
            <div className="product-title">{product.title}</div>
        </Link>
        
        <div className="product-price-row">
            <button 
             className="product-button"
             onClick={() => addToCart(product)}>
                افزودن به سبد خرید
            </button>
            <div className="product-price">
                {enTofa(product.price)}
            </div>
        </div>
    </div>
</div>
  )
}

export default ProductBox