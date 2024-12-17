
import { useLoaderData } from "react-router-dom";
import {
  ComposedChart,
  Area,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useState } from "react";
import Heading from "../components/Heading";
import { Helmet } from "react-helmet-async";

const Statistics = () => {
  const [controlChart, setControlChart] = useState("price");
  const productData = useLoaderData();
  const handleRatingChart = () => {
    if (controlChart === "rating") {
      setControlChart("price");
    } else if (controlChart === "price") {
      setControlChart("rating");
    }
  };
  return (
    <div>
      <Helmet>
        <title>NexGen Gadget | Statistics</title>
      </Helmet>
      <div className="w-full bg-gradient-to-t from-purple-400  to-[#9538E2] py-12 min-h-[260px]">
        <div className="px-4">
          <Heading
            title="Statistics"
            subtitle="Discover the Gadget tech and accessories Statistics. Compare prices, ratings, and features to find the perfect gadgets that take your experience to the next level!"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mb-32">
        <h3 className="text-2xl py-8 font-bold text-black/85">Statistics</h3>
        <div className="h-[500px]">
          <ResponsiveContainer width={"100%"} height={"100%"}>
            <ComposedChart
              width={"100%"}
              height={"100%"}
              data={productData}
              barSize={24}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3" />
              <XAxis dataKey="product_title" />
              <YAxis dataKey={`${controlChart ? controlChart : "price"}`} />
              <Tooltip />
              <Legend />
              <Area
                type="monotone"
                dataKey={`${controlChart ? controlChart : "price"}`}
                fill="#efe1fb"
              />
              <Bar
                dataKey={`${controlChart ? controlChart : "price"}`}
                fill="#9538E2"
              />
            </ComposedChart>
          </ResponsiveContainer>
        </div>

        <div className="text-center mt-6">
          <button
            onClick={handleRatingChart}
            className="px-6 p-2 rounded-full border border-primary-color text-primary-color"
          >
            {controlChart === "rating"
              ? "See Chart by Price"
              : "See Chart by Rating"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Statistics;