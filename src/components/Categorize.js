import React from 'react'
import { Link, useLocation } from 'react-router-dom';

const Categorize = ({ categories, selectedCategory }) => {
  const location = useLocation();
  const pageType = location.pathname.split("/")[1];
  return (
    <div className=" category">
      {categories.map((category, i) =>
        selectedCategory === category ? (
          <Link
            className="category__name category__name--selected"
            key={i}
            to={`/${pageType}/${category}`}
          >
            <div>{category}</div>
          </Link>
        ) : (
          <Link
            className="category__name"
            key={i}
            to={`/${pageType}/${category}`}
          >
            <div>{category}</div>
          </Link>
        )
      )}
    </div>
  );
}

export default Categorize