import Heading from "../components/Heading";
import about from "../../public/assets/about.png";
import top from "../../public/assets/best.png";
import shopping from "../../public/assets/shopping.png";
import fast from "../../public/assets/fast.png";
import customer from "../../public/assets/customer.png";
import { useLoaderData } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const returnPolicy = useLoaderData()
  return (
    <div>
      <Helmet>
        <title>NexGen Gadget | About us</title>
      </Helmet>
      <div className="bg-gradient-to-t from-purple-400  to-[#9538E2] py-12">
        <div className="px-4">
          <Heading
            title="About us"
            subtitle="Welcome to NegGen Gadget – your trusted source for the latest gadgets and tech accessories. Shop with us and experience top-notch customer service and unbeatable quality!"
          />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">
          <div className="flex-1">
            <img src={about} alt="" className="rounded-lg w-full" />
          </div>
          <div className="flex-1 text-secondary-color">
            <p className="mb-6 leading-7">
              NegGen Gadget – your one-stop destination for the
              latest and greatest in cutting-edge technology! At NegGen Gadget,
              we’re passionate about bringing you the best gadgets, accessories,
              and smart devices that elevate your daily life. Whether you’re a
              tech enthusiast or someone looking for practical and reliable
              products, we have something for everyone.
            </p>
            <p className="mb-6 leading-7">
              We take pride in offering an easy-to-navigate, user-friendly
              platform, where shopping is made simple and enjoyable. Our sleek
              and intuitive dashboard lets you manage your purchases, track
              orders, and explore your favorite products, all in one place.
            </p>
            <button className="py-2 px-6 border border-primary-color rounded-lg font-medium text-primary-color">
              <a href="#contact">Gen in touch</a>
            </button>
          </div>
        </div>

        {/* Why choose us  */}
        <div className=" my-24">
          <h3 className="text-center font-bold text-black/80 text-3xl mb-3">
            Why choose NegGen Gadget?
          </h3>
          <p className="text-center text-secondary-color w-full md:max-w-[80%] mx-auto">
            upgrade your gadgets, discover the latest tech innovations, or
            simply shop for reliable and high-quality products, NegGen Gadget is
            here to make your experience seamless and enjoyable.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 my-24">
            <div className="bg-purple-300 rounded-lg p-4 relative shadow-md">
              <div className="bg-base-100 p-1 px-2 absolute -top-8 rounded-2xl">
                <img src={top} alt="" className="w-14 " />
              </div>
              <h3 className="text-xl font-bold text-black/75 mt-6">
                Top-Quality Products
              </h3>
              <p className="text-secondary-color/75 pr-14 py-2">
                We carefully select and offer only the best products to ensure
                you get top performance, durability, and reliability.
              </p>
            </div>
            <div className="bg-purple-300 rounded-lg p-4 relative shadow-md">
              <div className="bg-base-100 p-1 px-2 absolute -top-8 rounded-2xl">
                <img src={shopping} alt="" className="w-14 " />
              </div>
              <h3 className="text-xl font-bold text-black/75 mt-6">
                Easy Shopping Experience
              </h3>
              <p className="text-secondary-color/75 pr-14 py-2">
                Our platform is designed with you in mind. Discover products,
                read reviews, and make purchases effortlessly.
              </p>
            </div>
            <div className="bg-purple-300 rounded-lg p-4 relative shadow-md">
              <div className="bg-base-100 p-1 px-2 absolute -top-8 rounded-2xl">
                <img src={fast} alt="" className="w-14 " />
              </div>
              <h3 className="text-xl font-bold text-black/75 mt-6">
                Secure & Fast Delivery
              </h3>
              <p className="text-secondary-color/75 pr-14 py-2">
                Shopping with us means fast, secure, and hassle-free delivery
                right to your door.
              </p>
            </div>
            <div className="bg-purple-300 rounded-lg p-4 relative shadow-md">
              <div className="bg-base-100 p-1 px-2 absolute -top-8 rounded-2xl">
                <img src={customer} alt="" className="w-14 " />
              </div>
              <h3 className="text-xl font-bold text-black/75 mt-6">
                Dedicated Customer Support
              </h3>
              <p className="text-secondary-color/75 pr-14 py-2">
                Our friendly and knowledgeable customer service team is always
                here to assist you.
              </p>
            </div>
          </div>

          {/* Return policy  */}
          <div className="">
            <h3 className="text-3xl font-black my-8">Return and Policy</h3>
            <ul>
              {returnPolicy.map((data, idx) => (
                <li key={idx} className="pl-10">
                  <h3 className="text-xl font-semibold text-black my-2">
                    {data.title}
                  </h3>
                  <p className="text-secondary-color leading-7 mb-6">
                    {data.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          {/* Newsletter  */}
          <div
            id="contact"
            className="max-w-5xl mx-auto bg-gradient-to-t from-purple-400 rounded-xl  to-[#9538E2] py-10 mt-24"
          >
            <div className="flex flex-col items-center justify-center py-8">
              <h2 className="text-3xl font-bold text-white py-3">
                Subscribe as Newsletter for best offer
              </h2>
              <p className="text-secondary-color text-lg">
                Subscribe using your Email address
              </p>
              <div className="join mt-4">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered join-item"
                />
                <button className="btn bg-primary-color text-white join-item">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;