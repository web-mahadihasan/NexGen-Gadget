import { useContext, useEffect, useRef, useState } from "react";
import { LiaSortSolid } from "react-icons/lia";
import { removeProduct } from "../utilities/localStorage";
import ProductAction from "./ProductAction";
import { CartProductContext } from "../layouts/MainLayout";
import success from "../../public/assets/success.svg";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const CartItemContainer = () => {
  const [price, setPrice] = useState(0);
  const [cartProducts, setCartProducts] = useContext(CartProductContext);
  const navigate = useNavigate()
  const modalRef = useRef()

  useEffect(() => {
    const totalPrice = [...cartProducts].reduce(
      (prevPrice, currPrice) => prevPrice + currPrice.price,
      0
    );
    setPrice(totalPrice);
  }, [cartProducts]);

  const handleSortByPrice = () => {
    const sortByPrice = [...cartProducts].sort((a, b) => b.price - a.price);
    setCartProducts(sortByPrice);
  };

  const handleRemoveBtn = (pId) => {
    removeProduct("Cart", pId);
    const remainingCartProduct = cartProducts.filter(
      (product) => product.product_id !== pId
    );
    setCartProducts(remainingCartProduct);
  };

  const handlePurchaseBtn = () => {
    modalRef.current.querySelector("#price").innerText = price;
    modalRef.current.showModal()
    setCartProducts([]);
    localStorage.removeItem("Cart");
  }

  return (
    <div>
      <Helmet>
        <title>NexGen Gadget | Cart</title>
      </Helmet>
      <div className="flex flex-col md:flex-row justify-between py-12 gap-6">
        <div className="flex items-center justify-between flex-1">
          <h3 className="text-2xl font-bold text-black/80">All Carts</h3>
          <h3 className="text-xl font-bold text-black/80">
            Total Cost: $ {price}
          </h3>
        </div>
        <div className="flex items-center justify-between gap-6">
          <button
            onClick={handleSortByPrice}
            className="flex items-center gap-2 px-4 py-2 border border-primary-color text-primary-color rounded-full font-semibold"
          >
            Sort by Price{" "}
            <span>
              <LiaSortSolid size={20} />
            </span>
          </button>
          <button
            onClick={handlePurchaseBtn}
            disabled={cartProducts.length > 0 ? false : true}
            className="px-6 py-2 border-primary-color bg-gradient-to-b from-[#9538E2] to-[#d25fe7]  text-white rounded-full font-medium"
          >
            Purchase
          </button>
        </div>
      </div>
      {/* Display Cart items  */}
      <div className="mb-36">
        {cartProducts?.map((productData) => (
          <ProductAction
            key={productData.product_id}
            productData={productData}
            handleRemoveBtn={handleRemoveBtn}
          />
        ))}
      </div>

      {/* For Modal  */}
      <dialog
        ref={modalRef}
        id="my_modal_5"
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box flex flex-col gap-2 items-center">
          <img src={success} alt="Success" />
          <h3 className="font-bold text-lg">Payment Successfully</h3>
          <p className="pt-4">Thank for Purchasing</p>
          <p className="">
            Total: $ <span id="price"></span>
          </p>
          <div className="w-full">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                onClick={() => navigate("/")}
                className="btn w-full rounded-full mt-6"
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default CartItemContainer;
