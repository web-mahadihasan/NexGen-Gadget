import PropTypes from 'prop-types'
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { Divide as Hamburger } from "hamburger-react";
import { useContext, useEffect, useState } from 'react';
import NavIcon from './NavIcon';
import { CartProductContext, WishlistProductContext } from '../layouts/MainLayout';

const Navbar = ({ navMenu }) => {
  const [isActive, setIsActive] = useState(false)
  const { pathname } = useLocation();
  const [checkPath, setCheckPath] = useState("");
  const [isPath, setIsPath] = useState(false)
  const navigate = useNavigate()
  const [cartProducts] = useContext(CartProductContext);
  const [wishlistProduct] = useContext(WishlistProductContext)


  useEffect(() => {
    if (
      pathname === "/" ||
      pathname.includes("/category")
    ) {
      setCheckPath("bg-[#9538E2] rounded-t-lg container");
      setIsPath(true)
    } else {
      setCheckPath("bg-white text-black w-full");
      setIsPath(false);
    }
  },[pathname])

  return (
      <div className={`mx-auto mt-2 ${checkPath}`}>
        <div
          className={`max-w-7xl mx-auto px-4 lg:px- flex justify-between items-center py-4 gap-4 relative ${
            isPath ? "text-white" : "text-black"
          } ${isActive ? "overflow-visible" : "overflow-hidden duration-700"}`}
        >
          <div className="flex-1 lg:flex-initial">
            <button
              onClick={() => navigate("/")}
              className="text-xl md:text-2xl font-bold"
            >
              NexGen Gadgets
            </button>
          </div>

          {/* NavLink  */}
          <ul
            className={`absolute z-50 flex flex-col bg-gradient-to-t from-purple-500  to-purple-500 gap-2 top-[100%] w-2/3 md:w-2/5 items-center space-y-4 py-8 h-screen lg:static lg:h-full lg:w-fit lg:flex-row lg:space-y-0 lg:py-0 lg:bg-none ${
              isActive ? "right-0 duration-700" : "-right-96"
            }`}
          >
            {navMenu.map((nav) => (
              <NavLink
                to={`${nav.path}`}
                key={nav.id}
                className={({ isActive }) =>
                  `px-4 py-1  ${
                    isActive
                      ? "bg-black/85 rounded-md text-white font-semibold"
                      : ""
                  }`
                }
              >
                {nav.name}
              </NavLink>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <NavIcon productActionFor={"Cart"} productData={cartProducts} />
            <NavIcon
              productActionFor={"Wishlist"}
              productData={wishlistProduct}
            />
          </div>
          {/* Mobile hamburger */}
          <div onClick={() => setIsActive(!isActive)} className="lg:hidden">
            <Hamburger />
          </div>
        </div>
      </div>
  );
};

Navbar.propTypes = {
  navMenu: PropTypes.array.isRequired,
};

export default Navbar

