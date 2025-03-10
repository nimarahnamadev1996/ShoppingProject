'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



import LogoIcon from '../../public/images/logo.jpg'
import BarsIcon from './icons/Bars'
import { useGlobalContext } from '@/contexts/CartContext'
import { enTofa } from '@/utils/Utilities'




const Header = () => {

    const [mobileNavActive, setMobileNavActive] = useState(false)

    const {cart} = useGlobalContext()

  return (
   <header className="header sticky top-0" >
     <div className="header-wrapper">

        <Link href='/' className="logo">
         <Image src={LogoIcon} alt='logo'/>
        </Link>


        <nav className={`nav ${mobileNavActive ? "active" : ""}`}>
          <Link href={"/"} className="nav-link">صفحه اصلی</Link>
          <Link href={"/products"} className="nav-link">فروشگاه</Link>
          <Link href={"/cart"} className="nav-link">سبد خرید</Link>
           
           {
            cart.length > 0 ? (
              <span className="nav-link">{enTofa(cart.length) } </span>
            ) : (
               ""
            )
           }
        </nav>

        <button 
         className="nav-button"
         onClick={() => setMobileNavActive((prev) => !prev)}>
            <BarsIcon/>
        </button>
     </div>
   </header>
  )
}

export default Header