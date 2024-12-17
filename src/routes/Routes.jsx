import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import ProductCardContainer from "../components/ProductCardContainer";
import ProductDetails from "../pages/ProductDetails";
import CartItemContainer from "../components/CartItemContainer";
import WishListContainer from "../components/WishListContainer";
import ErrorPage from "../components/ErrorPage";
import AboutUs from "../pages/AboutUs";
import Statistics from "../pages/Statistics";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    loader: () => fetch("/NavRoutes.json"),
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch("/Categories.json"),
        children: [
          {
            path: "/",
            element: <ProductCardContainer />,
            loader: () => fetch("/Products.json"),
          },
          {
            path: "/category/:categoryName",
            element: <ProductCardContainer />,
            loader: () => fetch("/Products.json"),
          },
        ],
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            path: "/dashboard",
            element: <CartItemContainer />,
          },
          {
            path: "/dashboard/cart",
            element: <CartItemContainer />,
          },
          {
            path: "/dashboard/wishlist",
            element: <WishListContainer />,
          },
        ],
      },
      {
        path: "/product-details/:productId",
        element: <ProductDetails />,
        loader: () => fetch("/Products.json"),
      },
      {
        path: "/statistics",
        element: <Statistics />,
        loader: () => fetch("/Products.json"),
      },
      {
        path: "/about-us",
        element: <AboutUs/>,
        loader: () => fetch("/ReturnPolicy.json"),
      },
    ],
  },
]);

export default routes;