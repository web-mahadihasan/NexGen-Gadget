import { NavLink, Outlet } from "react-router-dom";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet-async";

const Dashboard = () => {
  
  return (
    <div>
      <Helmet>
        <title>NexGen Gadget | Dashboard</title>
      </Helmet>
      <div className="bg-gradient-to-t from-purple-400  to-[#9538E2] py-12">
        <div className="px-4">
          <Heading
            title="Dashboard"
            subtitle="Manage your cart easily! Filter by price items, adjust quantities, or remove selections before checkout. Get ready to complete your purchase!"
          />
        </div>
        <div className="flex justify-center gap-6">
          <NavLink
            to={"/dashboard/cart"}
            className={({ isActive }) =>
              `px-8 py-2 rounded-full border border-white  font-medium ${
                isActive
                  ? "bg-white text-primary-color font-semibold"
                  : "text-white"
              }`
            }
          >
            Cart
          </NavLink>
          <NavLink
            to={"/dashboard/wishlist"}
            className={({ isActive }) =>
              `px-8 py-2 rounded-full border border-white  font-medium ${
                isActive
                  ? "bg-white text-primary-color font-semibold"
                  : "text-white"
              }`
            }
          >
            Wishlist
          </NavLink>
        </div>
      </div>
      {/* Cart items  */}
      <div className="max-w-7xl mx-auto px-4 ">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;