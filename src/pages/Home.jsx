import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import { Helmet } from "react-helmet-async";

const Home = () => {
  const categories = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>NexGen Gadget - Home</title>
      </Helmet>
      <Banner />
      <h1 className="text-center text-3xl font-bold text-black mt-72 md:mt-96">
        Explore Cutting-Edge Gadgets
      </h1>

      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row gap-3 my-12">
        <div className=" bg-white rounded-lg w-full lg:w-[25%] flex items-center justify-center h-fit shadow-sm border">
          <Categories categories={categories} />
        </div>
        <div className="w-full lg:w-[75%] px-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Home;