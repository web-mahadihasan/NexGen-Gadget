import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom';

const Categories = ({categories}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 justify-center px-6 py-10 w-full">
      {categories.map((category) => (
        <NavLink
          to={`/category/${category.slug}`}
          key={category.id}
          className={({ isActive }) =>
            `px-4 py-4 w-full rounded-full font-medium 
          ${isActive ? "bg-primary-color text-white font-semibold"
                : "text-lg text-[#09080F99]/60 bg-[#F6F6F6]"}`
          }
        >
          {category.name}
        </NavLink>
      ))}
    </div>
  );
}

Categories.propTypes = {
  categories: PropTypes.array.isRequired,
};

export default Categories
// flex flex-row lg:flex-col gap-6 lg:gap-0 flex-wrap space-y-0 lg:space-y-4