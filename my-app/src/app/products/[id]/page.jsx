
import { enTofa } from '../../../../utils/Utilities'


const products = [
    {
        "id": 1,
        "title": 'محصول 1',
        "price": 109.95,
        "image": "/images/3.jpg",
        "description": "فقط برای تست میباشد",
      },
      {
        "id": 2,
        "title": 'محصول 2',
        "price": 22.3,
        "image": "/images/2.jpg",
        "description": "فقط برای تست میباشد",
        
      },
      {
        "id": 3,
        "title": 'محصول 3',
        "price": 55.99,
        "image": "/images/1.jpg",
        "description": "فقط برای تست میباشد",
        
      },
      {
        "id": 4,
        "title": 'محصول 4',
        "price": 15.99, 
        "image": "/images/3.jpg",
        "description": "فقط برای تست میباشد",
      },

      {
        "id": 5,
        "title": 'محصول 5',
        "price": 15.99, 
        "image": "/images/1.jpg",
        "description": "فقط برای تست میباشد",
       
      },

      {
        "id": 6,
        "title": 'محصول 6',
        "price": 19.99, 
        "image": "/images/2.jpg",
        "description": "فقط برای تست میباشد",
       
      },

      {
        "id": 7,
        "title": 'محصول 7',
        "price": 28.00, 
        "image": "/images/3.jpg",
        "description": "فقط برای تست میباشد",
       
      },

      {
        "id": 8,
        "title": 'محصول 8',
        "price": 26.00, 
        "image": "/images/1.jpg",
        "description": "فقط برای تست میباشد",
       
      },
]



const ProductDetail = ({params}) => {

    const {id} = params

    const mainProduct = products.find((item) => item.id == id)

  return (
    <div className="product-detail">

            <div className="product-detail-content">
                <div className="new-product-image">
                    <img src={mainProduct.image} alt={mainProduct.title} />
                </div>

                <div className="new-product-info">
                    <h1 className="new-product-title">{mainProduct.title}</h1>

                    <p className="new-product-description">{mainProduct.description}</p>

                    <div className="product-price-row">
                        <div className="product-price">{enTofa(mainProduct.price) }</div>
                        <button className="product-button">
                            افزودن به سبد خرید
                        </button>
                </div>
                </div>
            </div>
        </div>
  )
}

export default ProductDetail