import PropTypes from 'prop-types'
import { useContext } from 'react';
import { FaRegTrashCan } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import { ProductActionsContext } from '../layouts/MainLayout';
import toast from 'react-hot-toast';

const ProductAction = ({ productData, handleRemoveBtn }) => {
  const { product_title, product_id, price, product_image, description, in_stock } =
    productData;
  const {pathname} = useLocation()
  const handleProductActionBtn = useContext(ProductActionsContext)

  const handleWishlistAddToCart = (pData, id) => {
    if(in_stock){
      handleProductActionBtn("Cart", pData);
      handleRemoveBtn(id)
    }else{
      toast.error("Product is not Stock. Try another Product")
    }
  }
    
  return (
    <div className="bg-white rounded-lg p-6 mb-6">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex-1 flex flex-col md:flex-row items-center gap-6">
          <div className="w-full md:min-w-[230px] lg:max-w-[250px] h-full bg-[#F6F6F6] p-2 rounded-lg">
            <img
              src={product_image}
              alt=""
              className="h-[130px] rounded-md mx-auto"
            />
          </div>
          <div className="space-y-1 md:col-span-2">
            <h4 className="font-bold text-xl text-black/70">
              {product_title}
              {pathname === "/dashboard/wishlist" && (
                <span
                  className={`text-xs font-normal ml-2 p-1 rounded-full border align-middle ${
                    in_stock
                      ? "border-green-600/70 text-green-500 bg-green-300/10"
                      : "border-orange-500/60 bg-orange-500/10 text-orange-600"
                  }`}
                >
                  {in_stock ? "In Stock" : "Out of Stock"}
                </span>
              )}
            </h4>
            <p className="text-secondary-color/40 font-medium w-full lg:max-w-[80%] overflow-hidden max-h-12 md:max-h-fit">
              {description}
            </p>
            <p className="text-xl font-semibold text-secondary-color">
              Price: $ {price}
            </p>
            {pathname === "/dashboard/wishlist" && (
              <button
                onClick={() => handleWishlistAddToCart(productData, product_id)}
                className="text-white flex items-center gap-2 font-semibold
            bg-primary-color px-6 py-2 rounded-full hover:bg-opacity-90 "
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
        {/* Remove Product */}
        <div
          onClick={() => handleRemoveBtn(product_id)}
          className="p-3  border rounded-full cursor-pointer hover:bg-[#F6F6F6] duration-300"
        >
          <FaRegTrashCan size={24} className="text-red-500" />
        </div>
      </div>
    </div>
  );
};

ProductAction.propTypes = {
  productData: PropTypes.object.isRequired,
  handleRemoveBtn: PropTypes.func.isRequired,
};

export default ProductAction;
