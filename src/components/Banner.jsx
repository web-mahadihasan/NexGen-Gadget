import Heading from "./Heading";
import banner from "../assets/banner.jpg"
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="relative z-0">
      <div className="container mx-auto bg-gradient-to-t from-purple-400  to-[#9538E2] rounded-b-lg">
        <div className="flex max-w-7xl mx-auto justify-center  min-h-[600px] px-4">
          <div className="py-10 text-center">
            <Heading
              title="Explore Exquisite Tech Accessories at NexGen Gadgets!"
              subtitle="Explore the latest gadgets that will take your experience to the next
        level. From smart devices to the coolest accessories, we have it all!"
            />
            <button onClick={()=> navigate("/dashboard")} className="btn bg-white rounded-full px-8">Shop Now</button>
          </div>
          {/* Banner image */}
        </div>
      </div>

      <div className="max-w-5xl mx-auto border absolute p-6 left-5 right-5 -bottom-[200px] md:-bottom-[300px] rounded-xl backdrop-blur-xl bg-white/30">
        <img src={banner} alt="" className="h-[350px] md:h-[500px] object-cover object-center w-full rounded-xl" />
      </div>
    </div>
  );
};

export default Banner;