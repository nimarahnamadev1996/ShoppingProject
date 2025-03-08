import React from 'react'

const Footer = () => {
  return (
    <footer className="footer">

    <div className="container-footer">
      <div className="inner-wrapper">
        <div className="footer-menu">
          <span>محصولات</span>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                لپ تاپ
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                موبایل
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                مبلمان
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                کالای اشپزخانه
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <span>راهنمای خرید</span>
          <ul>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                  ارسال سفارش
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                شیوه پرداخت
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                سوالات متداول
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                قوانین و مقررات
              </a>
            </li>
          </ul>
        </div>
        <div className="footer-menu">
          <span>راه‌های ارتباطی</span>
          <ul className="contact">
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                اینستاگرام
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                لینکدین
              </a>
            </li>
            <li>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
              >
                تلگرام
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div className="copyright-box">
      <div className="container-footer">
        <p>© {new Date().getFullYear()}Online Shop</p>
      </div>
    </div>
  </footer>
  )
}

export default Footer