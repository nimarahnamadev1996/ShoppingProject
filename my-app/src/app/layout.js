import Header from "@/components/Header";
import "./globals.css";
import Footer from "@/components/Footer";
import { CartProvider } from "@/contexts/CartContext";



export const metadata = {
  title: "Online Shop",
  description: "Generated by create Next js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
          <CartProvider>
            <Header/>
             {children}
            <Footer/> 
          </CartProvider>
      </body>
    </html>
  );
}