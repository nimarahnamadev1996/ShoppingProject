'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'



import LogoIcon from '../../public/images/logo.jpg'
import BarsIcon from './icons/Bars'




const Header = () => {

    const [mobileNavActive, setMobileNavActive] = useState(false)

  return (
   <header className="header">
     <div className="header-wrapper">

        <Link href='/' className="logo">
         <Image src={LogoIcon} alt='logo'/>
        </Link>


        <nav className={`nav ${mobileNavActive ? "active" : ""}`}>
          <Link href={"/"} className="nav-link">صفحه اصلی</Link>
          <Link href={"/products"} className="nav-link">فروشگاه</Link>
          <Link href={"/cart"} className="nav-link">سبد خرید</Link>
           
           <span className="nav-link">1</span>
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