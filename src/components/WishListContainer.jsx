import { useContext } from "react";
import ProductAction from "./ProductAction";
import { WishlistProductContext } from "../layouts/MainLayout";
import { removeProduct } from "../utilities/localStorage";
import { Helmet } from "react-helmet-async";

const WishListContainer = () => {
  const [wishlistProduct, setWishlistProduct] = useContext(
    WishlistProductContext
  );

  const handleRemoveBtn = (pId) => {
    removeProduct("Wishlist", pId);
    const remainingWishlist = wishlistProduct.filter(
      (product) => product.product_id !== pId
    );
    setWishlistProduct(remainingWishlist);
  };

  return (
    <div>
      <Helmet>
        <title>NexGen Gadget | Wishlist</title>
      </Helmet>
      <div className="mt-12">
        <h3 className="text-2xl py-8 font-bold text-black/85">
          Wishlist Products
        </h3>
        <div className="mb-36">
          {wishlistProduct?.map((productData) => (
            <ProductAction
              key={productData.product_id}
              productData={productData}
              handleRemoveBtn={handleRemoveBtn}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default WishListContainer;
