import Image from 'next/image'


import pic from '../../public/images/3.jpg'


const HeroSection = () => {
  return (
    <section className="hero-section">

    <div className="container">

      <div className="hero-wrapper">
        <div className="text-content">
          <h1>فروشگاه اینترنتی </h1>
          <p>
            بهترین محصولات را با قیمتی باور نکردنی خریداری کنید. همین حالا مجموعه‌ای از کالاهای
            متنوع را بررسی کرده و تجربه خریدی متفاوت را احساس کنید.
          </p>
          <a href="/products" className="btn-primary">مشاهده محصولات</a>
        </div>
        
        <div className="image-wrapper">
          <Image src={pic}  alt="محصولات فروشگاهی" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default HeroSection