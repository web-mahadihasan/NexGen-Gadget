import PropTypes from 'prop-types'
import { useNavigate } from 'react-router-dom';

const ProductCard = ({product}) => {
  const navigate = useNavigate()
  const { product_id, product_title, product_image, price } = product || {};
  return (
    <div className="flex flex-col card-compact bg-base-100 shadow-md p-4 border rounded-lg">
      <figure className="bg-[#F6F6F6] rounded-lg p-2">
        <img
          src={product_image}
          alt={product_title}
          className="h-[150px] mx-auto"
        />
      </figure>
      <div className="py-4 space-y-2 flex-1">
        <h2 className="card-title">{product_title}</h2>
        <p className="text-[#09080F99]/60 font-medium">Price: ${price}</p>
        {/* <p>Rating: {rating}</p> */}
      </div>
      <button
        onClick={() => navigate(`/product-details/${product_id}`)}
        className="py-2 px-3 rounded-lg text-primary-color border border-primary-color w-fit"
      >
        View Details
      </button>
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.object.isRequired,
};

export default ProductCard
