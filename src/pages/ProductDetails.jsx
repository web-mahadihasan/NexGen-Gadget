import { useLoaderData, useParams } from "react-router-dom";
import Heading from "../components/Heading";
import { useContext, useEffect, useState } from "react";
import { BsCart4 } from "react-icons/bs";
import { HiOutlineHeart } from "react-icons/hi";
import { ProductActionsContext } from "../layouts/MainLayout";
import Ratings from "../components/Ratings";
import { Helmet } from "react-helmet-async";



const ProductDetails = () => {
  const { productId } = useParams();
  const allProduct = useLoaderData()
  const [detailsInfo, setDetailsInfo] = useState({})
  const handleProductActionBtn = useContext(ProductActionsContext)
  // const [wishlistProduct] = useContext(WishlistProductContext)
  // const [disabledWishlist, setDisabledWishlist] = useState(false)

  useEffect(()=> {
    const singleProduct = [...allProduct]?.find(product => product.product_id == productId)
    setDetailsInfo(singleProduct);
    // const findWishlist = [...wishlistProduct].find(item => item.product_id == productId);
    // if(findWishlist){
    //   setDisabledWishlist(true);
    // }
  },[allProduct, productId])

  const {
    product_title,
    product_image,
    price,
    description,
    specification,
    in_stock,
    brand_name,
    rating,
    reviews
  } = detailsInfo || {};


  return (
    <div>
      <Helmet>
        <title>NexGen Gadget - {`${product_title}`}</title>
      </Helmet>
      <div className="">
        <div className="bg-gradient-to-t from-purple-400  to-[#9538E2] min-h-[450px] pt-12">
          <div className="px-4">
            <Heading
              title="Product Details"
              subtitle="Unlock the future with NexGen Gadget! Discover cutting-edge smart devices and stylish accessories that redefine your tech experience. Elevate your everyday life today!"
            />
          </div>
        </div>
        {/* Product details  */}
        <div className="px-3">
          <div className="bg-white rounded-lg max-w-7xl p-6 mx-auto border shadow-md relative -top-[180px] lg:-top-[250px]">
            <section className=" overflow-hidden">
              <div className="mx-auto flex flex-col lg:flex-row gap-6">
                <div className=" rounded-lg bg-[#F6F6F6] flex items-center p-6 w-full lg:w-[40%]">
                  <img
                    alt={`Image of ${product_title}`}
                    className="mx-auto object-cover object-center"
                    src={product_image}
                  />
                </div>
                <div className="space-y-2 w-full lg:w-[60%]">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest uppercase">
                    {brand_name}
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product_title}
                  </h1>
                  <h3 className="text-xl font-semibold text-[#09080FCC]/80">
                    Price: $ {price}
                  </h3>
                  <p
                    className={` px-4 rounded-full border w-fit ${
                      in_stock
                        ? "border-green-600/90 text-green-500 bg-green-300/10"
                        : "border-red-500/90 bg-orange-500/10 text-orange-600"
                    }`}
                  >
                    {in_stock ? "In Stock" : "Out of Stock"}
                  </p>
                  <p className="leading-relaxed text-secondary-color/60">
                    {description}
                  </p>

                  <div>
                    <h3 className="text-lg text-black/85 font-semibold">
                      Specification:
                    </h3>
                    <ul className="pl-10 text-secondary-color/60 space-y-1">
                      {specification?.map((spec, idx) => (
                        <li key={idx} className="list-disc list-inside">
                          {spec}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-lg text-black/85 font-semibold">
                      Rating: ⭐
                    </h3>
                    {/* Rating & Review  */}
                    <Ratings rating={rating} reviews={reviews} />
                  </div>
                  {/* Add to cart button  */}
                  <div className="flex items-center gap-8">
                    <button
                      onClick={() =>
                        handleProductActionBtn("Cart", detailsInfo)
                      }
                      className="text-white flex items-center gap-2 font-semibold bg-primary-color px-6 py-2 rounded-full "
                    >
                      Add to Cart <BsCart4 size={24} />
                    </button>
                    <button
                      onClick={() =>
                        handleProductActionBtn("Wishlist", detailsInfo)
                      }
                      // disabled={disabledWishlist}
                      className={`p-3 hover:bg-[#F6F6F6] duration-300 rounded-full border tooltip `}
                      data-tip="Add to Wish-list"
                    >
                      <HiOutlineHeart size={22} />
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

// ${disabledWishlist&& "bg-gray-300"}
