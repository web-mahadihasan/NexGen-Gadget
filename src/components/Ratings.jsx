import PropTypes from 'prop-types'
import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";


const Ratings = ({rating, reviews}) => {
  const ratingStar = Array.from({ length: 5 }, (e, idx) => {
    let halfRating = idx + 0.4;
    return (
      <span key={idx}>
        {rating >= idx + 1 ? (
          <FaStar className="text-orange-400" />
        ) : rating >= halfRating ? (
          <FaStarHalfAlt className="text-orange-400" />
        ) : (
          <AiOutlineStar className="text-orange-400" />
        )}
      </span>
    );
  });
  return (
      <div className='flex items-center'>
        {ratingStar}
        <p className='mx-3 bg-gray-200 px-2 rounded-full'>{rating}</p>
        <p className='text-secondary-color'>({reviews} Customer Review)</p>
      </div>
  );
};

Ratings.propTypes = {
  rating: PropTypes.number,
  reviews: PropTypes.number,
};

export default Ratings;
