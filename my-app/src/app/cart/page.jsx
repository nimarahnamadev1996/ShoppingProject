import TrashIcon from '@/components/icons/Trash'
import { enTofa } from '@/utils/Utilities'
import Image from 'next/image'



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

]



const Cart = () => {
  return (
    <div className='cart-grid'>

        <div className='cart-box'>
           <h2>سبد خرید</h2>

           {
            products.length == 0 && 
            <div>
                سبد خرید خالی است
            </div>
           }

           {
            products.length > 0 && 
            (
             <table className="cart-table">
                <thead>
                    <tr>
                     <th>کالا</th>
                     <th>قیمت (تومان)</th>
                    </tr>
                 </thead>

                 <tbody>
                    {
                      products.map((product) => (
                        <tr key={product.id}>
                            <td className="cart-product">

                              <Image
                                src={product.image} 
                                width={80} height={80}
                                className="cart-product-image"
                                alt={product.title}/>
                                {product.title}

                                <input 
                                 type="number" 
                                 value={product.quantity} 
                                 min="1"/>

                                 <button>
                                    <TrashIcon/>
                                 </button>
                              </td>

                              <td>
                                {enTofa(product.price) }
                             </td>
                        </tr>
                      ))
                    }

                               <tr>
                                 <td> <strong>مجموع</strong></td>
                                 <td>
                                    <strong>{enTofa(200) }
                                     </strong></td>
                               </tr>
                 </tbody>


                </table>
            )
           }
        </div>

          {
                products.length > 0 && (
                    <div className="cart-box">

                        <h2 className="cart-title">اطلاعات شما</h2>
                        
                        <form className="cart-form" >
                            <input  name="name" type="text" className="cart-input" placeholder="نام" />
                            <input  name="email" type="email" className="cart-input" placeholder="ایمیل" />
                            <input  name="country" type="text" className="cart-input" placeholder="کشور" />
                            <input  name="city" type="text" className="cart-input" placeholder="شهر" />
                            <input  name="address" type="text" className="cart-input" placeholder="آدرس" />
                            <input  name="postalCode" type="number" className="cart-input" placeholder="کدپستی" />

                            <button 
                             className="cart-button">
                                پرداخت آنلاین
                            </button>
                        </form>
                    </div>
                )
            }
    </div>
  )
}

export default Cart