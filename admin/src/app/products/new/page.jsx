'use client'

import React, { useState } from 'react'
import { useRouter } from 'next/navigation'

const NewProduct = () => {

    const [formData, setFormData] = useState({
        title:"",
        price:"",
        image:"",
        description:"",
        category:"لپتاپ"
    })

    const router = useRouter()

    const handleChange = (e) => {

        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async(e) => {

        e.preventDefault()

        const res = await fetch("http://localhost:3001/api/products" , {
            method: "POST",
            headers: {"content-type": "application/json"},
            body: JSON.stringify(formData)
        })

        if(res.ok){
            router.push("/products")
        }

    }

  return (
     <div>
         <h1>Add New Product</h1>

         <form onSubmit={handleSubmit}>
                <input onChange={handleChange} type="text" name="title" placeholder="title" />
                <input onChange={handleChange} type="number" name="price" placeholder="price" />
                <input onChange={handleChange} type="text" name="image" placeholder="image url" />
                <textarea onChange={handleChange} name="description" placeholder="description"></textarea>
                <select onChange={handleChange} name="category" >
                    <option value="لپتاپ">لپتاپ</option>
                    <option value="موبایل">موبایل</option>
                    <option value="تبلت">تبلت</option>
                </select>
                <button type="sumbit">Save product</button>
            </form>
     </div>
  )
}

export default NewProduct