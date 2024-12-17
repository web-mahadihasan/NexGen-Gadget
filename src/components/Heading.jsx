import PropTypes from 'prop-types'
import { useLocation } from 'react-router-dom';

const Heading = ({title, subtitle}) => {
  const {pathname} = useLocation()
  return (
    <div className="w-full md:max-w-[80%] mx-auto text-white text-center">
      <h1
        className={`text-3xl font-bold leading-10 ${
          pathname === "/" ? "md:text-4xl lg:text-5xl" : "lg:text-4xl"}`}>
        {title}
      </h1>
      <p className="py-6 w-full md:max-w-[70%] mx-auto">{subtitle}</p>
    </div>
  );
}

Heading.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
};

export default Heading
