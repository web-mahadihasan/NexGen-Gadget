import PropTypes from 'prop-types'
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineHeart } from 'react-icons/hi';
import CartIconDropdown from './CartIconDropdown';
import { useLocation, useNavigate } from 'react-router-dom';


const NavIcon = ({ productActionFor, productData }) => {
  const navigate = useNavigate()
  const {pathname} = useLocation()
  return (
    <div className="relative">
      <Menu>
        <MenuButton
          className={`inline-flex items-center gap-2 p-2 rounded-full text-sm/6 font-semibold text-primary-color shadow-inner shadow-white/10 bg-white border  hover:bg-opacity-10 z-30 duration-300 ${
            pathname === "/"
              ? "hover:text-white hover:bg-transparent hover:border-white"
              : "hover:bg-primary-color hover:border-primary-color"
          }`}
        >
          {productActionFor === "Cart" ? (
            <BsCart4 size={24} />
          ) : (
            <HiOutlineHeart size={22} />
          )}
          {/* <ChevronDownIcon className="size-4 fill-white/60" /> */}
        </MenuButton>

        <MenuItems
          transition
          anchor="bottom end"
          className="px-4 origin-top-right mt-2 rounded-xl border border-white bg-white p-1 text-sm/6 text-black transition duration-100 ease-out [--anchor-gap:var(--spacing-1)] focus:outline-none data-[closed]:scale-95 data-[closed]:opacity-0"
        >
          <h3 className="text-2xl font-semibold text-black/80 my-5">
            {productActionFor === "Cart" ? "Your Cart" : "Your Wishlist"}
          </h3>
          <MenuItem>
            <ul>
              {productData?.map((product) => (
                <CartIconDropdown key={product.product_id} product={product} />
              ))}
            </ul>
          </MenuItem>
          <div className="text-center my-3">
            {productActionFor === "Cart" ? (
              <button
                onClick={() => navigate("/dashboard/cart")}
                className="py-2 w-full bg-primary-color text-white font-medium rounded-lg"
              >
                Checkout
              </button>
            ) : (
              <button
                onClick={() => navigate("/dashboard/wishlist")}
                className="py-2 w-full bg-primary-color text-white font-medium rounded-lg"
              >
                See Wishlist
              </button>
            )}
          </div>
        </MenuItems>
      </Menu>
      <div className="text-sm bg-black text-white text-center rounded-full w-fit px-[6px] absolute top-0 -right-3 z-50">
        {productData.length}
      </div>
    </div>
  );
};

NavIcon.propTypes = {
  productData: PropTypes.array.isRequired,
  productActionFor: PropTypes.string.isRequired,
};

export default NavIcon
