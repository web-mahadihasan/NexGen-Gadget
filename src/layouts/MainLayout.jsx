import { Outlet, useLoaderData } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../App.css";
import toast, { Toaster } from "react-hot-toast";
import { ToastContainer } from "react-toastify";
import { createContext, useEffect, useState } from "react";
import { getProductFromLs, setProductToLs } from "../utilities/localStorage";
import { HelmetProvider } from "react-helmet-async";


export const ProductActionsContext = createContext();
export const CartProductContext = createContext();
export const WishlistProductContext = createContext();

const MainLayout = () => {
  const navMenu = useLoaderData()
  const [cartProducts, setCartProducts] = useState([])
  const [wishlistProduct, setWishlistProduct] = useState([])

  const handleProductActionBtn = (actionName, product) => {
    const isExist = cartProducts.find(prevP => prevP.product_id === product.product_id)
    if(actionName === "Cart"){
      if(!isExist && product.in_stock){
          const existingCartProduct = [...cartProducts];
          existingCartProduct.push(product);
          setCartProducts(existingCartProduct);
          setProductToLs("Cart", product)
          toast.success('Successfully Added to Cart')
        }
      else{
        toast.error(`${isExist? 'Product Already added to Carts': "Product is Out of stock. You can added to Wishlist"}`)
      }
    }else if(actionName === "Wishlist"){
      const isExist = wishlistProduct.find(prevP => prevP.product_id === product.product_id)
      if(!isExist){
        const existingWishlistProduct = [...wishlistProduct];
        existingWishlistProduct.push(product);
        setWishlistProduct(existingWishlistProduct);
        setProductToLs("Wishlist", product);
        toast.success("Successfully Added to Wishlist");
      }else{
        toast.error('Product Already added to Wishlist')
      }
    }    
  }

  useEffect(() => {
    const getSaveCart = getProductFromLs("Cart");
    const getSaveWishlist = getProductFromLs("Wishlist");
    setCartProducts(getSaveCart);
    setWishlistProduct(getSaveWishlist);
  },[])


  return (
      <HelmetProvider>
        <CartProductContext.Provider value={[cartProducts, setCartProducts]}>
          <WishlistProductContext.Provider
            value={[wishlistProduct, setWishlistProduct]}
          >
            <ProductActionsContext.Provider value={handleProductActionBtn}>
              <Toaster />
              <ToastContainer />
              {/* Navbar  */}
              <Navbar navMenu={navMenu} />

              {/* Dynamic outlet  */}
              <div className="min-h-[calc(100vh-520px)]">
                <Outlet />
              </div>

              {/* Footer  */}
              <Footer />
            </ProductActionsContext.Provider>
          </WishlistProductContext.Provider>
        </CartProductContext.Provider>
      </HelmetProvider>
  );
};

export default MainLayout;