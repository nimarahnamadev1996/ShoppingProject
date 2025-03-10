'use client'

import Image from 'next/image'


import TrashIcon from '@/components/icons/Trash'
import { useGlobalContext } from '@/contexts/CartContext'
import { enTofa } from '@/utils/Utilities'
import { useState } from 'react'






const Cart = () => {

  const {cart,updateQuantity,removeFromCart,getTotal,clearCart} = useGlobalContext()

  const [userInfo, setUserInfo] = useState({
    name: "",
    email: "",
    country: "",
    city: "",
    address: "",
    postalCode: ""
  })


   const handleChange = (e) => {
     setUserInfo({...userInfo, [e.target.name] : e.target.value})
   }

   const handleSubmit = async(e) => {
    e.preventDefault()

    const orderData = {
      user: userInfo,
      cart,
      totalPrice: getTotal()
    }

    try{
      const res = await fetch(`/api/orders`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(orderData),
      })
     if(res.ok){
      alert("سفارش شما ثبت شد")
      clearCart()
      setUserInfo({name:"", email:"", address:"", country:"", city:"", postalCode:""})
     }
     else{
      alert("خطا در ثبت شفارش")
     }
  } 
  catch(error){
      alert("مشکلی پیش آمده است")
  }
}

   
  return (
    <div className='cart-grid'>

        <div className='cart-box'>
           <h2>سبد خرید</h2>

           {
            cart.length == 0 && 
            <div>
                سبد خرید خالی است
            </div>
           }

           {
            cart.length > 0 && 
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
                      cart.map((product) => (
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
                                 min="1"
                                 onChange={() => updateQuantity(product._id,Number(event.target.value))}/>

                                 <button
                                  onClick={() => removeFromCart(product._id)}>
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
                                    <strong>{enTofa(getTotal()) }
                                     </strong></td>
                               </tr>
                 </tbody>


                </table>
            )
           }
        </div>

          {
                cart.length > 0 && (
                    <div className="cart-box">

                        <h2 className="cart-title">اطلاعات شما</h2>
                        
                        <form className="cart-form" onSubmit={handleSubmit}>

                            <input value={userInfo.name}  name="name" type="text" onChange={handleChange} className="cart-input" placeholder="نام" />
                            <input value={userInfo.email} name="email" type="email" onChange={handleChange} className="cart-input" placeholder="ایمیل" />
                            <input value={userInfo.country} name="country" type="text" onChange={handleChange} className="cart-input" placeholder="کشور" />
                            <input value={userInfo.city} name="city" type="text" onChange={handleChange} className="cart-input" placeholder="شهر" />
                            <input value={userInfo.address} name="address" type="text" onChange={handleChange} className="cart-input" placeholder="آدرس" />
                            <input value={userInfo.postalCode} name="postalCode" type="number" onChange={handleChange} className="cart-input" placeholder="کدپستی" />

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